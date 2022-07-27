const http = require('http')
const url = require('url')
const server = http.createServer(function(requset,Response){
	let path = url.parse(requset.url).pathname
	if(path ==='/'){
		Response.statusCode = 200
		Response.setHeader('Content-type','text/html','charset=utf-8')
		Response.write(`
			<link rel="stylesheet" href="./c">
		    <h1>hell</h1>
		`)
		Response.end()
	}else if(path==='/c'){
		Response.statusCode = 200
		Response.setHeader('Content-type','txet/css','charset=utf-8')
		Response.write(`
		h1{color:red;}
		`)
		Response.end()
	}else{
		Response.statusCode = 404
		Response.end()
	}
})
server.listen(8888,function(){
	console.log('服务器已经启动');
})