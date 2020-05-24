const Discord = require("discord.js");

module.exports.run = async (client, message) => {
   if (!message.guild) {
  return message.author.send(``); }
if (message.author.bot === true) {
  return;
}
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Malesef Bu Komutu Kullanmak İçin Yetkin Yok!**");
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(99)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)
message.channel.bulkDelete(1)

  

  
  
    .then(() => {
  message.channel.send(`**${5000}** Adet Mesaj Temizlendi!`).then(msg => msg.delete(5000));
});

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle","uçur","uççur"],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: '5000 mesaj siler',
  usage: 'sil'
  //HardCoding 
};