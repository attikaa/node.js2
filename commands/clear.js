module.exports = {
    name: "clear",
    description: "",
    execute(message, args) {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nincs jogod hogy használd ezt a parancsot!")
         args = message.content.split(" ").slice(1)
        let author = message.member;
        if(!args[0]) {
            message.delete();
            message.channel.send("Használat: !clear (szám)")
            return;
        }
        if(args[0] > 1000){
            message.channel.send("A maxmimum törötlető üzenet 1000, kérlek probáld újra!")
            return;
        }
        message.channel.bulkDelete(args[0]);
        message.channel.send("Sikeresen töröltél " + args[0] + " üzenetet!")
        return;
    }
}