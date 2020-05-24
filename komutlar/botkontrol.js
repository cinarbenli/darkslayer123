const Discord = require("discord.js");

module.exports.run = async (Octopus, message, args) => {
  let msg = await message.channel.send("Test Ediliyor.<a:loading:702107532784697366>");
  let msg1 = await message.channel.send("Test Ediliyor..<a:loading:702107532784697366>");
  let msg2 = await message.channel.send("Test Ediliyor...<a:loading:702107532784697366>");
  let testembed = new Discord.RichEmbed()
  .setColor("Random")
  .setDescription("Test Başarılı<a:sec:702496426961272832>     Bot Çevrimiçi <:online:702209413032706139>")
  message.channel.send(testembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botkontrol',
  usage:'botkontrol'
};