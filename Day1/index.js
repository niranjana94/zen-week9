const date = require('date-and-time');
const fs= require('fs');
const path = require('path');

const pattern = date.compile('MMM_D_YYYY_h_m_s_A');
let filename = date.format(new Date(), pattern)+'.txt';

fs.writeFile(filename,new Date().toUTCString(),function(err){
    if(err) throw err;
    console.log('file created');
});

fs.readdir(__dirname,{ withFileTypes: true },function(err,files){
    if (err) 
    console.log(err); 
    else {      
    console.log(files);
    }
   
    });
