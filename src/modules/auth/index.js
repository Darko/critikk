import express from 'express';
import passport from 'passport';
import session from 'express-session';

import config from '../../config/env/index';

import * as Auth from '../../services/auth';
import './github';

const router = express.Router();
const options = {
  secret: config.github.secret,
  name: 'critikk-session',
  saveUninitialized: false,
  resave: false
};

router.use(session(options));
router.use(passport.initialize());
router.use(passport.session());

router.get('/github', passport.authenticate('GithubGeneral', {
  failureRedirect: '/error',
  session: false
}));

router.get('/github/callback', passport.authenticate('GithubGeneral', {
  failureRedirect: '/error',
  session: false
}), Auth.login);

export default router;
