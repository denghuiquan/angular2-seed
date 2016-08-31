// index.js
var userRoute = require('./users/user-router')
function router(io) {
	return userRoute(io)
}
module.exports = router