const fs = require('fs');
const ayarlar = require("../ayarlar.json");
const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (bot, message, args) => {
  let davetlog = JSON.parse(fs.readFileSync('./ayarlar/davetlog.json', 'utf8'));
  let kanalid = message.channel.id,
    guildID = message.guild.id,
    davetlkanal;

  if (guildID in davetlog) davetlkanal = bot.channels.get(davetlog[guildID]).name;
  else davetlkanal = "Ayarlanmamış";

  if (!args[0]) 
return message.channel.send(`
**Davet Log:** \`\`${ayarlar.prefix}ayar davetlog #davet-log\`\` | **Kapatmak için**: \`\`${ayarlar.prefix}ayar davetlog kapat\`\` 
**Davet Log Kanalı:**  ${davetlkanal} (${davetlog[guildID] == undefined ? "" : davetlog[guildID]}) `);

  switch (args[0]) {
    case "davetk":
    case "davetkanal":
    case "davetlog":
      if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send("Gerekli izinlere sahip değilsiniz!");
      if (!args[1]) return message.channel.send("Lütfen kanal belirtin!");
      if (args[1].toLowerCase() == "kapat") {
        delete davetlog[guildID];
        fs.writeFile('./ayarlar/davetlog.json', JSON.stringify(davetlog), (err) => {
          if (err) console.log(err);
        });
        message.channel.send("Davet Log Kanalı Kapatıldı!");
      } else {
        if (!message.mentions.channels.first()) return message.channel.send("Lütfen kanal belirtin!");
        davetlog[guildID] = message.mentions.channels.first().id;
        fs.writeFile('./ayarlar/davetlog.json', JSON.stringify(davetlog), (err) => {
          if (err) console.log(err);
        });
        message.channel.send(`<#${davetlog[guildID]}> Davet Log Kanalı belirlendi!`);
      }
   
  }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davetlog","davettakip","davet-takip"],
  permLevel: 3
};

module.exports.help = {
  name: 'ayar',
  description: '',
  usage: 'davetlog'
};