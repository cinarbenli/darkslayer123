const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var request = require("request");
//Dcs Ekibi

exports.run = (client, message, params) => {
  const png = "https://iasbh.tmgrup.com.tr/d86620/752/395/0/7/738/394?u=https://isbh.tmgrup.com.tr/sbh/2019/11/04/10-kasim-resmi-tatil-mi-olacak-10-kasim-okullar-tatil-mi-hangi-gune-denk-geliyor-1572849616557.jpg" || "https://static.euronews.com/articles/stories/04/28/74/76/773x435_cmsv2_da56396a-17f3-528b-a15c-44e12dfd9033-4287476.jpg"
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("Eğlence Komutları Özel Mesajlarda Kullanılamaz!");
    return message.author.sendEmbed(ozelmesajuyari);
  } //Dcs Ekibi
  if (message.channel.type !== "dm") {
    const ataturk = new Discord.RichEmbed()
      .setColor(0xffffff)
      .setTimestamp()
      .setDescription("")
      .setImage(png);
    return message.channel.sendEmbed(ataturk);
  }
}; //Dcs Ekibi

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["atam"],
  permLevel: 0
};

exports.help = {
  name: "atatürk",
  description: "atatürk",
  usage: "atam"
};
   