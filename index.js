
const path = require('path');
const {getPtByID} = require('./getPtByID.js')

/* 
getPtByID
pass in options object containing:

1. sqlite db path with name
2. table name containing patient data
3. column name for patient ID
4. column name for product ID
5. column name for days supply
6. Patient ID
*/


const options = {
  dbpath: path.join(__dirname,'rx.db'),
  tableName: 'sampleData',
  ptIDCol: 'DESYNPUF_ID',
  serviceDtCol: 'SRVC_DT',
  prodIDCol: 'NDC',
  daySupplyCol: 'DAYS_SUPLY_NUM',
  ptID: '664000000000000'
}


async function test(){

  var data = await getPtByID(options)
  console.log(data)
}

test()

/*
Example data
DESYNPUF_ID	     SRVC_DT	NDC	          DAYS_SUPLY_NUM
664000000000000	20080116	57664-568-13	7
664000000000000	20080125	57664-568-13	7
664000000000000	20080201	57664-568-13	30
664000000000000	20080228	57664-568-13	7
664000000000000	20080415	57664-568-13	7

Period lasting 91 days
Following dates are not covered:
Jan 23,24, Feb 1, Mar 10, Mar 11, Mar 12, Mar 13, Mar 14 (8 days total)
PDC = (91-8) / 91 = 0.912 = 91%
*/





