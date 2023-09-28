const User = require('../models/User')

function userLoggedMiddleware (req, res, next) {
  res.locals.isLogged = false

  let remember_meCookie = req.cookies.userKey //porque no levanta el home por unready userKey
  //let userFromCookie = User.findByField('email', remember_meCookie)
  let userFromCookie = db.User.findAll('email', remember_meCookie)

  if (userFromCookie) {
    req.session.userLogged = userFromCookie
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
};

module.exports = userLoggedMiddleware;