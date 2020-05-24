const Discord = require('discord.js');

const nefestut = [
  "Negatif",
  "Pozitif",
  "Bidaha dene belirlenmedi ama yinede testin parasını vericen",
 ];

exports.run = function(client, message) {
//Komutun Kodları
const corona = nefestut[Math.floor(Math.random() * nefestut.length)];
  message.channel.send(
  
  "** Hazırlanılıyor..**"
  
  ).then(
  function(i){
    i.edit("**Test yapılıyor...**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Testin sonucu !**')
    .setDescription(' ---------')
      .addField('**Testin sonucu **: ',  corona)
    .setColor('RANDOM')
    
    
    )
  })
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['korona-test'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'corona-test',//Komutun adı (Komutu girerken lazım olucak)
  description: 'corona testi',//Komutun Açıklaması
    kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  usage: 'koronatest' 
}