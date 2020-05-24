//DarkCode
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
     if 
//DarkCode
(!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('BLACK').setTitle('Komut Girişi').setDescription('Sunucuyu Sıfırlamak İstiyor Musun?.').setFooter('Bu eylemi onaylıyorsan "yes " yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'yes', {
max: 1,
time: 40000,
errors: ['time'],
})
.then((collected) => {
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});    
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   

  message.guild.createChannel('DarkSlayer', 'category', [{
       id: message.guild.id,
     }]);

  message.guild.createChannel(`Sunucu-Sıfırlandı`, 'text')
  
  .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "DarkSlayer")))
    .then(channels =>
    channels.send(`Başarıyla Kanallar Sıfırlandı`))
  //DarkCode
 });
});
};
//DarkCode
exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-uçur"],
  permLevel: 4
};
//DarkCode
exports.help = {
  name: 'sunucu-sıfırla',
  description: 'Bot İçin gerekli kanlları sıfırlar.',
  usage: 'sunucu-uçur'
};