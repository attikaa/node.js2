module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send("Hello I'm here you can ping me!");
	},
};