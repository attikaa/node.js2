const Discord = require('discord.js');

module.exports = {
	name: 'date',
	description: 'This command is show date!',
	execute(message, args) {

const exampleEmbed = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle("-=- $OfficalJs Bot -=-")
.setThumbnail("https://cdn.discordapp.com/attachments/757135575772954647/776062011565539338/azta.gif")
.addField(`Date\n- ${new Intl.DateTimeFormat("English").format(Date.now())}`,"For you")
message.channel.send(exampleEmbed);
    }
}