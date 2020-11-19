
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
  tableName: 'DE1_0_2008_to_2010_Prescription_Drug_Events_Sample_1',
  ptIDCol: 'DESYNPUF_ID',
  serviceDtCol: 'SRVC_DT',
  prodIDCol: 'PROD_SRVC_ID',
  daySupplyCol: 'DAYS_SUPLY_NUM',
  ptID: '9D7984F817FF6825'
}


async function test(){

  var data = await getPtByID(options)
  console.log(data.length)
}

test()










