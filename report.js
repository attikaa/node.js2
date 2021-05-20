const Discord = require('discord.js');

module.exports = {
	name: 'report',
	description: 'Can report member!',
	execute(message, args,) {

    const prefix = "!"

        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send(`No.`);
      let User = message.mentions.users.first() || null;
  
      if (User == null) {
        return message.channel.send(`Nem írtál mellé felhasználót!\n- Helyes használat:\ns!jelent (@felhasználó) (Indok)`);
      } else {
        let Reason = message.content.slice(prefix.length + 22 + 7) || null;
        if (Reason == null) {
          return message.channel.send(
            `Nem adtál meg a végén egy indokot!\nKérlek próbáld újra.`
          );
        }
        let Avatar = User.displayAvatarURL();
        let Channel = message.guild.channels.cache.find(
          (ch) => ch.name === "reports"
        );
        if (!Channel)
          return message.channel.send(
            `Nem létezik ilyen szoba \`reports\`\nKérlek csinálj.`
          );
          const exampleEmbed = new Discord.MessageEmbed()
          .setTitle(`Feljelentés!`)
          .setDescription(
            `Egy felhasználó \`${message.author.tag}\` jelentette őt \`${User.tag}\`! `
          )
          .setColor("BLACK")
          .setThumbnail(Avatar)
          .addFields(
            { name: "Jelentő ID", value: `${message.author.id}`, inline: true },
            { name: "Jelentő Tag", value: `${message.author.tag}`, inline: true },
            { name: "Áldozat ID", value: `${User.id}`, inline: true },
            { name: "Áldozat Tag", value: `${User.tag}`, inline: true },
            { name: "Indok", value: `\`${Reason.slice(1)}\``, inline: true },
            {
              name: "Dátum",
              value: `${new Intl.DateTimeFormat("hun").format(Date.now())}`,
              inline: true,
            }
          );
        Channel.send(exampleEmbed);
      }
    }
    }
