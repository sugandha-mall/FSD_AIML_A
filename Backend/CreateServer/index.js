const http=require('http');
const port = 3000;
const server = http.createServer((req,res)=>{
res.write("hello using node")
const obj={
    "name:":"sugandha",
    "phone no":"87509968"
}
res.end(JSON.stringify(obj))
})
server.listen(port,()=>{
    console.log("server running on"+port)
})