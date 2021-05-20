module.exports = {
	name: 'say',
	description: 'Bot can say!',
	execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Nincs jogod hogy használd ezt a parancsot!")
        var text = message.content.split(' ').slice(1).join(' ')
        if(!text) return message.channel.send("***Használat: !say (Üzenet)***")
        message.delete();
        message.channel.send(text)
    }
}