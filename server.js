var http = require("http");
var http = require("url");

function start(){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;

		//this is displayed in the server console
		console.log("Request for " +pathname + " received.");

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