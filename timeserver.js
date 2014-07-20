//cli timeserver that returns date in specific format when given port # as variable

var net = require('net');
var portNumber = process.argv[2];
var date = new Date();


var server = net.createServer(function(socket){
  //month logic because getMonth() method is dumb
  var month = date.getMonth()+1;
    if(month <10){
	  month = "0"+month;
	}
  var data = date.getFullYear()+"-"+month+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n";
  
  socket.write(data);
  socket.end();

});
server.listen(portNumber);