var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

io.on('connection', function(socket){
  console.log('user connect with a msg')
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
    console.log(msg)
  });

  // useful one 
  socket.on('broadcast', function (msg) {
  	console.log(msg)
	socket.emit('chat message', msg)
  })
  /*io.on('broadcast', function(msg){
    socket.emit('chat message', msg+'>>>>>')
    console.log(msg+ '>>>>>>')
  });*/

  // useless
  /*socket.on('broadcast', function(msg){
    io.emit('broadcast', msg)
    console.log(msg)
  });*/
});

// useless too
/*io.on('broadcast', function(msg){
	socket.emit('chat message', msg+'>>>>>')
	console.log(msg+ '>>>>>>')
});*/

/*app.use(function (req, res, next) {
	req.io = io
	next()
})*/

app.get('/', function(req, res){
  res.sendFile(__dirname + '/chat.html')
});

var userRoute = require('./server-route/index')
app.use('/talk2all', userRoute(io))

http.listen(3001, function(){
  console.log('listening on *:3000')
});