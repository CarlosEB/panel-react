//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

console.log("Registering endpoint: /tasks_data");
router.get('/tasks_data', function(req, res) {
  
    var file = "dashboard.db";
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database(file);
            
    var rows_dash;
    db.all("SELECT * FROM process", function(err, rows) {  
      
      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(JSON.stringify(rows));
    });   
    db.close();
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
