const request = require('request');
const fs = require('fs');


const website = process.argv.slice(2)[0];
const filename = process.argv.slice(3)[0];


request(website, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 

 
  fs.writeFile(filename, body, 'utf8', (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`Successful`)
      
      const filesize = fs.statSync(filename).size
      console.log(`Downloaded and saved ${filesize} bytes to ${filename}`)
    }
  })
});