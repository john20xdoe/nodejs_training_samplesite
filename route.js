function route(pathname) {
	console.log("About to route a request for " + pathname);
}

//export this function to be used outside this module
exports.route = route;