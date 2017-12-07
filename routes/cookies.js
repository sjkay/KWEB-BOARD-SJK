var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Cookies'});
});

router.get('/get', function(req, res, next) {
  res.send(req.cookies);
});

router.get('/set', function(req, res, next) {
  res.cookie('kweb', {
    id: 'study',
    name: '마지막',
    authorized: true
  });
  res.redirect('/cookies/get');
});

module.exports = router;
