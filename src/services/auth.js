import moment from 'moment';
import jwt from 'jsonwebtoken';
import constants from '../constants/index';
import config from '../config/env/index';

export function signToken(userId, role) {
  return jwt.sign({
    userId,
    role
  }, config.app.jwtSecret);
}

export function login(req, res) {
  if (!req.user) {
    return res.boom.notFound('Something broke');
  }

  const cookieMaxAge = moment.duration(1, 'months').asMilliseconds();
  const token = signToken(req.user._id, req.user.role);

  res.cookie(constants.app.cookieName, token, {
    maxAge: cookieMaxAge,
    domain: config.env === 'development' ? 'localhost' : 'critikk.io',
    secure: config.env !== 'development',
    path: '/'
  });

  return res.redirect(`${config.frontEnd.url}/main`);
}
