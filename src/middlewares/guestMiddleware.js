function guestMiddleware(req, res, next) {
    let user = req.session.userLogged;
    if(user) {
        if (user.username == "admin") {
          res.redirect('/prodAdmin')
        } else {
          return res.redirect('/profile')
        }
    }
    next();
 }
 
 module.exports = guestMiddleware;