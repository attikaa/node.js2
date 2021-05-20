const Discord = require('discord.js');

module.exports = {
	name: 'social',
	description: '',
	execute(message, args) {


const socialEmbed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle('Social Media')
        .setDescription('Here my Instagram.')
        .addField('https://www.instagram.com/gold_gtps4/', 'Just Click.')
        .setImage('https://nveloop.com/wp-content/uploads/2021/02/instagram.jpg')
                          message.channel.send(socialEmbed)
const social1Embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle('Social Media')
        .setDescription('Here my Email.')
        .addField('attilagmr2006@gmail.com', 'Just drop it.')
        .setImage('https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63')
                          message.channel.send(social1Embed)
        }
    }