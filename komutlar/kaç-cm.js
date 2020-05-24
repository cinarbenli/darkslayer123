const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  18CM ** <a:31:702107533187481691> ' ,'**Senin Malafatın  11CM ** <a:31:702107533187481691>' ,'**Senin Malafatın 32CM  ** <a:31:702107533187481691>' ,'**Senin Malafatın  35CM ** <a:31:702107533187481691>' ,'**Senin Malafatın  8CM  ** <a:31:702107533187481691>' ,'**Senin Malafatın  65CM  ** <a:31:702107533187481691>' ,'**Senin Malafatın 5CM  ** <a:31:702107533187481691>' ,'**Senin Malafatın 31CM  ** <a:31:702107533187481691>' ,'**Senin Malafatın  14CM ** <a:31:702107533187481691>' ,'**Senin Malafatın  1CM ** <a:31:702107533187481691>'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaç-cm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};