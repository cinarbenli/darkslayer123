const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const sunucubilgi = new Discord.RichEmbed()
      .setAuthor(
        "Koca Yürekli " + message.author.username +  "Herkese Tokat attı!"
      )
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setImage(
        `https://1.bp.blogspot.com/-TB3w5e9IyY0/XXLcGHgsyVI/AAAAAAAAyMU/7aDGj7N6hxEvNCT4xZm1abnqHF7iqkuEQCLcBGAs/s1600/osmanli_tokadi.gif`
      );
    return message.channel.sendEmbed(sunucubilgi);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tokat"],
  permLevel: 0
};

exports.help = {
  name: "herkesetokat",
  description: "Herkese tokat atar",
  usage: "herkesetokat"
};