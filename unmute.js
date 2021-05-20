module.exports = {
	name: 'unmute',
	description: 'unmute command!',
	execute(message, args) {

if(message.member.roles.cache.has('836906873968918538')) {
    const target = message.mentions.users.first();
    if(target){
        let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
        let muteRole = message.guild.roles.cache.find(role => role.name === 'mute');

        let memberTarget= message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
    } else{
        message.channel.send('Cant find that member!');
    }
} else {
    message.channel.send('I see you dont have the correct permission.');
    message.member.roles.add('836906873968918538')
}
    }
}