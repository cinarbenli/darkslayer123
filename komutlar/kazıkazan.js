const Discord = require('discord.js');
//MOON CODE
const kazı = [
  "10TL",
  "1TL ",
  "3TL",
  "BOŞ",
  "BOŞ",
  "BOŞ",
  "2TL",
  "1TL ",
  "3TL",
  "Kazmaman yeri kazıdın 0.",
  "5TL",
  "50.000TL",
  "100.000TL!!!",
];

exports.run = function(client, message) {
//Komutun Kodları
const para = kazı[Math.floor(Math.random() * kazı.length)];
  message.channel.send(
  
  "** Hazırlanılıyor..**"
  
  ).then(
  function(i){
    i.edit("**Kazılıyor...**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Tam tamına bu kadar para kazandın!**')
    .setDescription(' ---------')
      .addField('**Para **: ',  para)
      .setImage('https://media.giphy.com/media/12Eo7WogCAoj84/giphy.gif')
    .setColor('#68af99')
    
    
    )
  })
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['nefes-tut'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'kazı-kazan',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Kazı kazan',//Komutun Açıklaması
    kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  usage: 'kazı-kazan' 
}