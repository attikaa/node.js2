const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "website",
    description: "Here my friend's website.",
    execute(message, args) {
        const embed = new MessageEmbed()
        .setTitle("Websites")
        .setColor("BLACK")
        .setThumbnail("https://cdn.discordapp.com/avatars/676850692371251215/78efaa3774175ae74a6695ce0ccd7f57.webp")
        .addField("Developer Website", "From Website Coder.")
        .addField("Link: https://lilpeep1337.pw/", "Just click")
        .addField("Fejlesztő: Lil Peep#5631","Good Coder!")
        .setFooter("Thanks for support!")

        message.channel.send(embed)
    }
}