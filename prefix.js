module.exports = {
	name: 'prefix',
	description: 'Here the bot prefix!',
	execute(message, args) {
		
const prefix = "!"
message.channel.send("Jelenlegi prefix: " + `**${prefix}**`)
    }
}