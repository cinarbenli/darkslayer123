const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

module.exports = async message => {
  let client = message.client;
  let prefix = ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) { 
let dcsa = await db.fetch(`dcs`,'aktif')
if(dcsa) {
 
   if(message.author.id !== ayarlar.sahip){ // Ayarlar.sahip te kimin id si varsa o kullanır

 
 let dcs = new Discord.RichEmbed()
 .setTitle('Bot Bakımda')
 .setDescription(`\`**Bot Bakımdadır**`) // \`
 .setColor('RANDOM') // \`
message.channel.send(dcs).then(dcs1 => dcs1.delete(5000))
 return
 } 
  
}

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
}