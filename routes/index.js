var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/board', function(req, res, next) {
  res.render('index', { title: 'board' });
});

// router.get('/view', function(req, res, next) {
//   res.render('index', { title: 'view get' });
// });
//
// router.get('/write', function(req, res, next) {
//   res.render('index', { title: 'write get' });
// });
//
// router.get('/update', function(req, res, next) {
//   res.render('index', { title: 'update get' });
// });

router.post('/board', function(req, res, next) {
  res.render('index', { title: 'board post' });
});

// router.post('/write', function(req, res, next) {
//   res.render('index', { title: 'write post' });
// });
//
// router.post('/update', function(req, res, next) {
//   res.render('index', { title: 'update post' });
// });
//
// router.post('/delete', function(req, res, next) {
//   res.render('index', { title: 'delete post' });
// });

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
