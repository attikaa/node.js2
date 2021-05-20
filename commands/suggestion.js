const Discord = require('discord.js');

module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: ["ADMINISTRATOR"],
    description: 'creates a suggestion!',
    execute(message, args, client, Discord){
    
        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        message.channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}