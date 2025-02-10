const fs=require('fs');

function dataWriteCB(){
fs.writeFile("data.pdf","hello my name is suggu",(err)=>{
    if(err){
        console.log("error occured:"+ err);
        
    }
    console.log("data written successfully");
    

});
console.log("resource closed");
}


function dataReadCB(){
fs.readFile("data.pdf",{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log("error occured:"+ err);
        
    }
    console.log("data read successfully");
    

});
console.log("resource closed");
}

const obj={
    write:dataWriteCB,
    read:dataReadCB,
}
module.exports=obj;