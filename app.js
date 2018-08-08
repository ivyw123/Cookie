/* const http = require("http");
const server = http.createServer();



server.on("request",(req,res)=>{
    if (req.url === "/") {
        // console.log(req.headers.cookie);
        const cookie ={};
        req.headers.cookie && req.headers.cookie.split(";").forEach(item => {
            const parts = item.split("=");
            cookie[parts[0]]=parts[1];
        });
        console.log(cookie);
        console.log(cookie['isVisit']);
        // var expiresTime = new Date(Date.now()+60*1000).toUTCString();
        
        if (cookie.isVisit == "yes") {
            res.writeHeader(200,{
                'Content-Type':'text/html;charset=utf-8',
            });
            res.end("不能太贪心")
        }else{
            res.writeHeader(200,{
                'Content-Type':'text/html;charset=utf-8',
                'Set-Cookie':['isVisit=yes','test=ook']
                // 'Set-Cookie':['isVisit=yes;expires='+expiresTime,'test=ook']
            });
            res.end("送你一朵小红花");
        }
       
    }else{
        res.end('404')
    }
}); */

var http = require('http');

var server = http.createServer();

server.on('request', function (req, res) {
    // 解析cookie
    var cookies = {};
    var cookieStr = req.headers.cookie; // 从请求的headers中获取cookie信息
    cookieStr && cookieStr.split(';').forEach(function (item) {
        var parts = item.split('=');
        cookies[parts[0].trim()] = parts[1].trim(); // 将cookie解析出来，保存到对象中
    });
    var expiresTime = new Date(Date.now()+5*1000).toUTCString();

    res.writeHeader(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        "Set-Cookie": ['issend=ok;expires='+expiresTime, 'age=20']
    });

    if(cookies.issend ==='ok'){
        res.end('不要太贪心哦！');
    }else{
        res.end('呐，赏你一朵小红花~~');
    }
});



server.listen(4000,()=>{
    console.log("server running at http://127.0.0.1:4000");
    
})