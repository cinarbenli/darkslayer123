const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
//Dcs Ekibi
const üye = message.mentions.users.first()
if (!üye) return message.channel.send("Kimin Doğum Günü ise Onu Etiketlemen Gerek!")

   const embed = new Discord.RichEmbed()
.setTitle("İYİKİ DOĞDUN DOSTUM")
.setColor("RANDOM")
.setThumbnail("https://cdn.discordapp.com/attachments/687989890175991808/690716208936386570/emote.png")
.setFooter("Happy New Year")
.setTimestamp()
.setDescription(`😚 Yehu Hey \`${üye.username}\` İyiki Doğdun🤩\n😘Seni Çok Seviyoruz Herzaman Hep Bizimle Ol\n🎂Nice Mutlu Senelere!`)
message.channel.send(embed)
 message.delete()
}
exports.conf = {
  aliases: []
} //Dcs Ekibi
exports.help ={
  name: "doğum-günü",
  usage:"doğum"
}