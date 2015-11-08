function route(handle, pathname, response, postData) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function'){
		handle[pathname](response, postData); //we pass the response object from server module
	} else {
		console.log("No request handler found for " + pathname); 
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

//export this function to be used outside this module
exports.route = route;
