var http = require("http");
var url = require("url");

function start(route){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;

		//this is displayed in the server console
		console.log("Request for " +pathname + " received.");

		route(pathname);
		
		response.writeHead(
			200,
			{"Content-Type":"text/plain"}
		);
		response.write("Hello World");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}


//allow this function to be used outside this module
exports.start = start;