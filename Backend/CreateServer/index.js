const http=require('http');
const port = 3000;
const server = http.createServer((req,res)=>{
res.write("welcome to node server")
res.end("request has been ended")
})
server.listen(port,()=>{
    console.log("server running on"+port)
})