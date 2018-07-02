import _ from 'lodash';
import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github';
import config from '../../config/env/index';
import User from '../../models/user';

passport.use('GithubGeneral', new GithubStrategy({
  clientID: config.github.clientId,
  clientSecret: config.github.secret
}, handleGithubLogin))

export const createUserFromProfile = profile => {
  const { avatar_url: avatar, name, email, accessToken } = profile;

  return {
    avatar,
    username: name,
    email: email,
    accessToken
  };
}

export function handleGithubLogin(accessToken, refreshToken, p, done) {
  const profile = Object.assign({}, p._json, {
    accessToken, refreshToken
  });
  const userFromProfile = createUserFromProfile(profile);
  const { id: providerId, provider = 'github' } = profile;

  User.findOne({ providers: {
    provider, providerId
  }})
  .then(user => {
    if (user) {
      _.extend(user, userFromProfile)
      return user.save()
      .then(u => done(null, u));
    }

    const newUser = new User(
      Object.assign({}, userFromProfile, {
        providers: [{
          provider,
          providerId
        }]
      })
    );

    _.extend(newUser, user);

    return newUser.save()
    .then(user => done(null, user));
  });
}
