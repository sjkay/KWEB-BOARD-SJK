var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();

//var pool =

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user) {
    res.redirect('/login/view');
  } else {
    res.render('login', {me: null});
  }
});

router.post('/', function(req, res, next) {
  if(req.session.user) {
    res.redirect('/login/view');
  } else {
    var id = req.body.id;
    var pwd = req.body.pwd;
    req.session.user = {
      id: id,
      pwd: pwd,
      //auth: auth,
      authorized: true
    };
    res.redirect('/login/view');
  }
});

router.get('/view', function(req, res, next) {
  if(req.session.user) {
    res.render('index', {title: req.session.user.id+"'s homepage"});
  } else {
    res.redirect('/login');
  }
});

router.get('/mysql', function(req, res, next) {
  if(req.session.user) {
    res.redirect('/login/view');
  } else {
    res.redirect('login', { me: "mysql"});
  }
});

router.get('/logout', function(req, res, next) {
  if(req.session.user) {
    req.session.destroy(function (err)
    {
      if (err) throw err;
      res.redirect('/login');
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
