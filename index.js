//execute as: node index.js


//this file is like the bean configuration file in spring framework??

var server = require("./server");
var router = require("./router");  ///strings correspond to filenames e.g "route" points to the file route.js
var requestHandlers = require("./requestHandlers.js");

var handle = {}
handle["/"] 		= requestHandlers.start;
handle["/start"]	= requestHandlers.start;
handle["/upload"]	= requestHandlers.upload;




//Start the server: this is like the method main in other languages
server.start(router.route,handle);

//continue at nodebeginner page 28 - XXXX
//continue at nodebeginner page 41 - XXXX
//continue at nodebeginner page 50