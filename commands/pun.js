const { pun } = require('../assets/arrays.json')
const { randomInArray } = require('../utils')

exports.run = function (client, msg) {
	msg.channel.sendMessage(randomInArray(pun))
}