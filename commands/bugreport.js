module.exports = {
    name: "bugreport",
    aliases: ['bug', 'reportbug'],
    description: 'let users report bugs',
     execute(message, args, client, Discord){
        //the channel you want the bug-reports to be send to
       

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug')
        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        message.channel.send(reportEmbed);
        //send the embed to the channel
        message.channel.send("**Bug report has been sent!**")
    }
}