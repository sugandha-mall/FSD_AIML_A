const http=require('http')
const server=http.createServer((req,res)=>{
    res.write("welcome to node js server");
    console.log(res.statusCode);
    if(req.url=="/data" && req.method=="GET"){
        res.end()
    }
    
    res.end("server response has completed")
})

server.listen(3000,()=>{
    console.log("server is"+3000);
})