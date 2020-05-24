const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

//dcs ekibi
exports.run = async(client, message, args) => {
  let prefix = ayarlar.prefix

 if(message.author.id !== "") return message.channel.send(" Bu komutu sadece geliştiricim kullanabilir.");
  if (!args[0]) return message.channel.send(`Yanlış Kullanım ---> **${prefix}bakım aç** / **${prefix}bakım kapat**`)

  if(args[0] == 'kapat') {
    db.delete(`dcs`)
    message.channel.send(`**Bot Başarıyla Bakımdan Çıkarıldı**`)
    return;
  }
  

  if(args[0] == 'aç') {
  
db.set(`dcs`,'aktif')
    message.channel.send(`**Bot Başarıyla Bakıma Alındı**`)
}}
exports.conf = { //dcs ekibi
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: "bakım"

};
