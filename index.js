var server = require("./server");
var router = require("./route");  ///strings correspond to filenames e.g "route" points to the file route.js




//Start the server: this is like the method main in other languages
server.start(router.route);

//continue at nodebeginner page 28