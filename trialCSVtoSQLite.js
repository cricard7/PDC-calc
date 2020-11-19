
  /*

  // Trial loading CSV file and placing into in memory database
  // Running takes a significant amount of time vs just importing using db browser

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

//https://stackoverflow.com/questions/47823288/parse-remote-csv-file-using-nodejs-papa-parse
//TheDuke

var fs = require('fs');
var Papa = require('papaparse');
var file = './DE1_0_2008_to_2010_Prescription_Drug_Events_Sample_1.csv';
// When the file is a local file when need to convert to a file Obj.
//  This step may not be necissary when uploading via UI
var content = fs.readFileSync(file, "utf8");

var rows; //contents of the CSV file in array of objects
//create in memory db table

db.run(`CREATE TABLE IF NOT EXISTS rxs (
    PtID TEXT,
    ServiceDt INTEGER,
    ProdID INTEGER,
    DAYSUPP INTEGER
    )`)

//todo:
//map database columns to variable which can be updated
Papa.parse(content, {
    header: true,
    step: function(row){
        
        console.log(row.data)
        //insert each row into database
        db.run(`INSERT INTO rxs
        (PtID, ServiceDt, ProdID, DAYSUPP) VALUES
        ($PtID, $ServiceDt, $ProdID, $DAYSUPP)`,
        {
        $PtID: row.DESYNPUF_ID,
        $ServiceDt: row.SRVC_DT,
        $ProdID: row.PROD_SRVC_ID,
        $DAYSUPP: row.DAYS_SUPLY_NUM
        });

    },
    delimiter: ",",
    complete: function(results) {
        //console.log("Finished:", results.data);
        rows = results.data;
    }
});





db.close((err) => {
    if (err) {
    console.error(err.message);
    }
    console.log('Close the database connection.');
    });

*/