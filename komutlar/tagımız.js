const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => { 

const tag = "𝕯𝖘 | "

message.channel.send(tag)
}
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['tagımız'], 
  permLevel: 0
};

exports.help = {
 name: 'tagımız',
usage:"tagımız"
};
   