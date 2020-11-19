const sqlite3 = require('sqlite3').verbose();
const open = require('sqlite').open //https://www.npmjs.com/package/sqlite for async version of db



async function getPtByID(options){

    

    let db = await open({
      filename: options.dbpath,
      driver: sqlite3.Database
    })

   

    var sql = `SELECT ${options.ptIDCol} as id,
    ${options.serviceDtCol} as date,
    ${options.prodIDCol} as prodID,
    ${options.daySupplyCol} as daySupp
    FROM ${options.tableName}
    WHERE ${options.ptIDCol} = ?`

    var rowdata = []
    const rowsCount = await db.each(
      sql,[options.ptID],
      (err, row) => {
        if (err) {
          throw err
        }
        
        rowdata.push(row)
      }
    )

   return rowdata
     
    /*
    db.serialize(() => {
      db.each(sql, [options.ptID], (err, row) => {
        if (err) {
          console.error(err.message);
        }
        console.log(row.id + "\t" + row.date + "\t" + row.prodID + "\t"+  row.daySupp);
      });
    });
    
    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Close the database connection.');
    });

    */
}


module.exports = {
    getPtByID
  }