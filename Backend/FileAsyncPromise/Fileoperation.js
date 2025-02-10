const fs = require('fs').promises;
const promise=fs.writeFile("data.txt","Hello, Writing data through Fs promises module",{encoding:'utf-8'});
//console.log(promise);
promise.then(()=>{
  console.log("error is"+err);
    
}).catch(err=>{
    console.log("error is"+err);
    
}).finally(msg=>{console.log("finally done");
})

const promise1=fs.readFile("data.txt",{encoding:'utf-8'});
//console.log(promise);
promise.then(()=>{
  console.log("data read successfully");
    
}).catch(err=>{
    console.log("error is"+err);
    
}).finally(msg=>{console.log("finally done");
})
