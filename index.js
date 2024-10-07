let  http=require("http");
let {details}=require("./registration")
console.log(details)

let url=require("url");



var server=http.createServer((req,res)=>{

//    console.log(req.url)

let decodedUrl=decodeURIComponent(req.url)
// console.log(decodedUrl)

var parsed=url.parse(decodedUrl,false)


replaced=parsed.query.replace(/"/g,'').split('&')

// console.log(replaced);
var obj={}
for(i=0;i<replaced.length;i++){
    splitof=replaced[i].split('=')
    console.log(splitof);
    keys=splitof[0]
    values=splitof[1]
    obj[keys]=values

}
console.log(obj);


if(req.method=="POST" && parsed.pathname=="/register"){

    if((obj.user==details.user)&&(obj.password==details.password)){
        res.statusCode=200
        res.write(JSON.stringify({res:'registration Successfull'}))
    res.end()

    }else{
        res.statusCode=400
        res.end("user not Found")
    }

    }else{
        res.end("send request properly")
    }


});


var port=490

server.listen(port,()=>{
    console.log("registerport:"+port);
})