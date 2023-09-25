const fs = require('fs');
// const payload = `Akucoba membuat file write and read di fs`

fs.readFile('halo.txt', 'utf-8', (err, data) => {
if(err){console.error(err)};
console.log("DATA : ", data);
    
})

