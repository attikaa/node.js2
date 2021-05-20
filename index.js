const Discord = require('discord.js');
const api = require("imageapi.js");

const client = new Discord.Client();

const version = "1.0"

const prefix = "!"

const fs = require('fs');

const { Player } = require('discord-player');

const player = new Player(client);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
const guildFiles = fs.readdirSync('./guild/').filter(file => file.endsWith('.js'));
for(const file of guildFiles){
    const command = require(`./guild/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log('${bot.user.username} elindult!')

    let statuszok = [
        "prefix : !",
        "Creator: Attila#8171",
        "My Name is $OfficalJs",
        "If have questen pls send it to Attila#8171!"
        
    ]

    setInterval(function(){
        let status = statuszok[Math.floor(Math.random()* statuszok.length)]

        client.user.setActivity(status, {type: "PLAYING"})
    }, 3000)
});
client.on("message", message => {
    if(message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()
        if (cmd === "help") {
            const helpEmbed = new Discord.MessageEmbed()
                    .setColor("BLACK")
                    .setThumbnail("https://cdn.discordapp.com/avatars/841325357964853268/f6b44ca6022478b54fae26244f51ce04.webp")
                    .setTitle(`${client.user.username}'s Help Menu`)
                    .setDescription(`**PREFIX: \`${prefix}\`**`)
                    .addField("` help-member ` ` help-moderator ` ` help-fun ` ` help-music ` ", "Bot commands.")
      
            message.channel.send(helpEmbed)
        }
    });
    client.on("message", message => {
      if(message.author.bot) return;
      if (message.content.indexOf(prefix) !== 0) return;
  
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase()
          if (cmd === "help-music") {
              const helpEmbed = new Discord.MessageEmbed()
              
                      .setColor("BLACK")
                      .setThumbnail("https://cdn.discordapp.com/avatars/841325357964853268/f6b44ca6022478b54fae26244f51ce04.webp")
                      .setTitle(`${client.user.username}'s Help Menu`)
                      .setDescription(`**PREFIX: \`${prefix}\`**`)
                      .addField("`play`, `leave`" )
              message.channel.send(helpEmbed)
          }
      });
    client.on("message", message => {
        if(message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase()
            if (cmd === "help-moderator") {
                const helpEmbed = new Discord.MessageEmbed()
                        .setColor("BLACK")
                        .setTitle(`${client.user.username}'s Moderator commands`)
                        .setThumbnail("https://cdn.discordapp.com/avatars/841325357964853268/f6b44ca6022478b54fae26244f51ce04.webp")
                        .setDescription(`**PREFIX: \`${prefix}\`**`)
                        .addField("`ban` `kick` `clear` `mute` `unmute` `sign` `say` `slowmode`", "For moderators!")
                       
                message.channel.send(helpEmbed)
            }
        });
        client.on("message", message => {
            if(message.author.bot) return;
            if (message.content.indexOf(prefix) !== 0) return;
        
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase()
                if (cmd === "help-fun") {
                    const helpEmbed = new Discord.MessageEmbed()
                            .setColor("BLACK")
                            .setTitle(`${client.user.username}'s Fun commands`)
                            .setThumbnail("https://cdn.discordapp.com/avatars/841325357964853268/f6b44ca6022478b54fae26244f51ce04.webp")
                            .setDescription(`**PREFIX: \`${prefix}\`**`)
                            .addField("`avatar command`  `weather command`  ", "You can find ur avatar or ur friends.")
                           
                    message.channel.send(helpEmbed)
                }
            });
            client.on("message", message => {
                if(message.author.bot) return;
                if (message.content.indexOf(prefix) !== 0) return;
            
                const args = message.content.slice(prefix.length).trim().split(/ +/g);
                const cmd = args.shift().toLowerCase()
                    if (cmd === "help-member") {
                        const helpEmbed = new Discord.MessageEmbed()
                                .setColor("BLACK")
                                .setTitle(`${client.user.username}'s Member commands`)
                                .setThumbnail("https://cdn.discordapp.com/avatars/841325357964853268/f6b44ca6022478b54fae26244f51ce04.webp")
                                .setDescription(`**PREFIX: \`${prefix}\`**`)
                                .addField("`datum`  `prefix`  `rules`  `bugreport`  `report`  `embed`  `website`  `social` `bot`, `ticket`", "For members!")

                        message.channel.send(helpEmbed)
                    }
                });
client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'rules') {
    client.commands.get('rules').execute(message, args)
  } else if (command === 'avatar') {
    client.commands.get('avatar').execute(client, message, args)
  } else if (command === 'ban') {
    client.commands.get('ban').execute(message, args)
  } else if (command === ' clear') {
    client.commands.get('clear').execute(message, args)
  } else if (command === 'date') {
    client.commands.get('date').execute(message, args)
  } else if (command === 'kick') {
    client.commands.get('kick').execute(message, args)
  } else if ( command === 'mute') {
    client.commands.get('mute').execute(message, args)
  } else if (command === 'ping') {
    client.commands.get('ping').execute(message, args)
  } else if (command === 'prefix') {
    client.commands.get('prefix').execute(message, args)
  } else if (command === 'report') {
    client.commands.get('report').execute(message, args)
  } else if (command === 'say') {
    client.commands.get('say').execute(message, args)
  } else if (command === 'sign') {
    client.commands.get('sign').execute(message, args)
  } else if (command === 'unmute') {
    client.commands.get('unmute').execute(message, args)
  } else if (command === 'youtube') {
    client.commands.get('youtube').execute(message, args)
  } else if (command === 'info') {
    client.commands.get('info').execute(message, args)
  } else if (command === 'server-info') {
    client.commands.get('server-info').execute(message, args)
  } else if (command === 'bugreport') {
    client.commands.get('bugreport').execute(message, args, client, Discord)
  } else if (command === 'slowmode') {
    client.commands.get('slowmode').execute(message, args)
  } else if (command === 'weather') {
    client.commands.get('weather').execute(client, message, args)
  } else if (command === 'embed') {
    client.commands.get('embed').execute(client, message, args)
  } else if (command === 'social') {
    client.commands.get('social').execute(message, args)
  } else if (command === 'nickname') {
    client.commands.get('nickname').execute(message, args)
  } else if (command === 'nickname') {
    client.commands.get('nickname').execute(message, args)
  } else if (command === 'website') {
    client.commands.get('website').execute(message, args)
  } else if (command === 'clear') {
    client.commands.get('clear').execute(message, args)
  } else if (command === 'ticket') {
    client.commands.get('ticket').execute(message, args, client, Discord)
  } else if (command === 'suggestions') {
    client.commands.get('suggestions').execute(message, args, client, Discord)
  } else if (command === 'play') {
    client.commands.get('play').execute(message, args)
  } else if (command === 'leave') {
    client.commands.get('leave').execute(message, args)
  } 
  if(message.content.startsWith(prefix + "bot")) {
    message.channel.send(`**$OfficalJs Bot Info**\n\n**Developer: Attila**\n**Language: JavaScript**\n**Verzion: ${version}**\n**Jelenlegi prefix: ${prefix}**\n**Szerverek: ${client.guilds.size}**\n**Létrehozva: ${client.user.createdAt.toDateString()}**`);
}
});

  
client.login("ODQxMzI1MzU3OTY0ODUzMjY4.YJlHTA.wMPBGU2rh94ra2qsn6E0KF0y4ZI")
