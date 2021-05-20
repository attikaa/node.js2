const Discord = require('discord.js');

module.exports = {
	name: 'rules',
	description: 'This command is show bot rules!',
	execute(message, args) {


const rulesEmbed = new Discord.MessageEmbed()
                          .setColor("BLACK")
        .setTitle('Rules')
        .setDescription('This is a embed for the server rules')
        .addFields(
            {name: '1', value: '---Hello People!'},
            {name: '2', value: '---This bot is for you and for your friends!'},
            {name: '3', value: "---Can't sell this bot just can invite to servers!"},
            {name: '4', value: '---If you have any questen send it to creator: ATTILA#8171!'},
	    {name: '5', value: "---If like this bot, then pls send the bot's server link!"}
        )
        .setImage('')
        .setFooter('Thanks for following the bot rules!');
                          message.channel.send(rulesEmbed)
        }
    }