module.exports = {
	name: 'kick',
	description: 'Can kick member!',
	execute(message, args) {



const user = message.mentions.users.first();
if (user) {
  const member = message.guild.member(user);
  if (member) {
    member
      .kick('Optional reason that will display in the audit logs')
      .then(() => {
        message.reply(`Sikeres kirugás ${user.tag}`);
      })
      .catch(err => {
        message.reply('A kirugás nem lehetséges mert nagy a rangja.');
        console.error(err);
      });
  } else {
    message.reply("That user isn't in this guild!");
  }
} else {
  message.reply("Ezt a személyt nem tudod kirugni!");
}
    }
}
