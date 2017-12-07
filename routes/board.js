var express = require('express');
var router = express.Router();
const DBConn = require('../db/db_con');

const connMnager = new DBConn();
connMnager.init();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('/board/list');
});
router.get('/list', function(req, res, next) {
  connMnager.getConn()
    .then((conn) => conn.query('SELECT * FROM Board;', (err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
      //console.log(data);
      //res.send('');
    }));
});
router.get('/view/:id', function(req, res, next) {
  connMnager.getConn()
    .then((conn) => conn.query('SELECT * FROM Board WHERE id='+req.params.id, (err, data) => {
      if (err) {
        throw err;
      }
      res.json(data[0]);
    }));
  res.json(req.params.id);

});
router.get('/write', function(req, res, next) {
  res.render('board_write');
});

router.post('/write', function(req, res, next) {
  connMnager.getConn()
    .then((conn) => conn.query(`
      INSERT INTO Board(title, content, author) VALUES ?
      `, [
        [[
          req.body.title,
          req.body.content,
          req.body.author
        ]]
      ], (err, data) => {
      if (err) {
        throw err;
      }
      //res.json(data);
      res.redirect('/board/view/'+data.insertId);
    }));
  //res.json(req.params.id);
});

module.exports = router;
