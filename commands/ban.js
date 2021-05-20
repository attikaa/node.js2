module.exports = {
	name: 'ban',
	description: 'Can ban member!',
	execute(message, args) {


  const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.members.resolve(user);
    if (member) {
      member
        .ban({
          reason: 'They were bad!',
        })
        .then(() => {
          message.reply(`Sikeresen kitiltotad a következö felhasználót ${user.tag}`);
        })
        .catch(err => {
          message.reply('I was unable to ban the member');
          console.error(err);
        });
    } else {
      message.reply("That user isn't in this guild!");
    }
  } else {
    message.reply("Magadat nem tudod ki tiltani.");
  }
}
}