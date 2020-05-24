const db = require("quick.db")
const Discord = require('discord.js');
exports.run = function(client, message, args) {
  var kullanıcı = message.author;
  var sebep = args.slice(0).join("  ");
  if(!sebep) return message.reply("AFK Olmak İçin Bir Sebep Belirtin.");
  
  db.set(`afk_${kullanıcı.id}`, sebep);
  db.set(`afk_süre_${kullanıcı.id}`, Date.now());
  message.reply("<a:cigara:702107529852878849>  Başarıyla AFK Moduna Girdin. <a:cigara:702107529852878849>")
  
   message.member.setNickname(`${message.author.username}  • AFK`);
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'afk', 
  description: 'Kullanıcııyı afk moduna sokar.',
  usage: 'afk <sebep>'
};
