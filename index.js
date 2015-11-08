//execute as: node index.js


var server = require("./server");
var router = require("./route");  ///strings correspond to filenames e.g "route" points to the file route.js
var requestHandlers = require("./requestHandlers.js");

var handle = {}
handle["/"] 		= requestHandlers.start;
handle["/start"]	= requestHandlers.start;
handle["/upload"]	= requestHandlers.upload;




//Start the server: this is like the method main in other languages
server.start(router.route,handle);

//continue at nodebeginner page 28 - XXXX