const Discord = require("discord.js");

exports.run = async (client, message, params) => {
  let user = message.guild.channels.find(c => c.name === '【❗】şikayet-ve-öneriler')
//Dcs Ekibi
  const juke = await client.channels.get(message.channel.id).createInvite();
  message.delete();

  const embed = new Discord.RichEmbed()
    .setTitle("DarkSlayer")
    .setDescription("**Yapımcımı Çağırdım**")
    .setFooter("Uzun Bir Süre Cevap Verilmez ise Destek Sunucusuna Gelin!");
  message.channel.send(embed);

  const invite = new Discord.RichEmbed()
    .setAuthor("• Talep")
    .addField(
      "**• Kullanıcı Adı **",
      message.author.username + "#" + message.author.discriminator
    )
    .addField("**• Sunucu Adı **", message.guild.name)
    .setDescription(juke.url);
  user.send(invite)
};
//Dcs Ekibi
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "çağır",
  description: "Botun Yapımcısına Mesaj Gönderir!",
  usage: "çağır"
};
   