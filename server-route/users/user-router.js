// user-router.js
function talk2All(io) {
	return function (req, res, next) {
		var talk = {msg: 'Hi, guys, how are you, i am new here join just now. Thks!'}
		
		setTimeout(function () {
			console.log('a message need to broadcast to any one online!')
			console.dir(req.cookies)
			// useless...............
			/*io.sockets.on('broadcast', function (msg) {
				console.log(msg)
				io.sockets.emit('chat message', msg)
			})*/
			setTimeout(() => {
				// both are ok
				io.sockets.emit('broadcast', talk.msg)
				io.emit('broadcast', talk.msg+ 'io.emit()')
			},5000)
			res.json({hi: '你好吗！？', sockets: io.sockets.length}).end()
		}, 1000)
	}
}


module.exports = talk2All