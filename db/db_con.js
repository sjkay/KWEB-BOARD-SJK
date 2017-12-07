const mysql = require('mysql');
const db_info = require('./db_info');

class DBConn {
  init(){
    this.pool = mysql.createPool(db_info.local);
  }

  getConn(){
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, conn) => {
        if (err) {
          reject(err);
        } else {
          resolve(conn);
        }
      })
    });
  }
}

module.exports = DBConn;

/*const connman = new DBConn();
connman.init();

connman.getConn()

connman.pool.getConnection((err, conn) => {
  console.log(err, conn);
});
*/
