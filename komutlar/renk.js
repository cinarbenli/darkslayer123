const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message) => {
   message.channel.send('Renk yükleniyor.').then(message => {
      var espriler = ['Kırmızı','Mavi','Beyaz.','Siyah.','Lacivert.','Sarı.','Mor.','Pembe.','Yeşil.','Camgöbeği.','Turuncu.','Eflatun.','Bordo.','Kahverengi.','Deniz mavisi.','Gri.'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgele-renk', 'renk-seç', 'seç-renk', 'seçbi-renk'],
  permLevel: 0
};
exports.help = {
  name: 'rastgele-renk',
  description: 'Rastgele renk.',
  usage: 'rastgele-renk'
}; 
