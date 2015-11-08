var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		//this is displayed in the server console
		console.log("Request for " +pathname + " received.");

		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			//log the chunks in console; dont do this in production
			console.log("received POST data chunk '"+ postDataChunk + "'.");
		});
		
		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}


//allow this function to be used outside this module, e.g. in index.js
exports.start = start;