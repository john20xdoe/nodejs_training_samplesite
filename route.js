function route(handle, pathname) {
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function'){
		handle[pathname]();
	} else {
		console.log("No request handler found for " + pathname); 
	}
}

//export this function to be used outside this module
exports.route = route;