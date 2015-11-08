var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;

		//this is displayed in the server console
		console.log("Request for " +pathname + " received.");

		route(handle, pathname);
		
		response.writeHead(
			200,
			{"Content-Type":"text/html"}
		);
		response.write("Hello World<br>");
		response.write("You are in &laquo;"+pathname+"&raquo;");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}


//allow this function to be used outside this module
exports.start = start;