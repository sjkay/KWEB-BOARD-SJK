var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/board', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/board', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/cookies', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// router.post('/cookies', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// router.get('/cookies', function(req, res, next) {
//   res.render('index', {title: Express});
// });
//
// router.get('/cookies/get', function(req, res, next) {
//   res.send(req.cookies);
// });
//
// router.get('/cookies/set', function(req, res, next) {
//   res.cookie('kweb', {
//     id: 'study',
//     name: '마지막',
//     authorized: true
//   });
//   res.redirect('/cookies/get');
// });

module.exports = router;
