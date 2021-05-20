const Discord = require('discord.js');

module.exports = {
	name: 'sign',
	description: 'Bot can sign!',
	execute(message, args) {

if(!message.member.hasPermission("OWNER")) return message.channel.send("Nincs jogod ehhez!");
        let BcEnbed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(message.content.split(' ').slice(1).join(' '))
        message.delete();
        message.channel.send(BcEnbed)
    }
}