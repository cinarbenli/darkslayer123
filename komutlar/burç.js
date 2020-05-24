const Discord = require('discord.js');


exports.run = async (bot, message, args) => { 

if (!args[0]) {
  message.channel.send
let hata = new Discord.RichEmbed()
.setTitle(":warning: Hata!")
.setDescription(":x: Burç girmeyi unuttun!")
.setTimestamp()
}
/////Cevaplar
let sayi;
    
    
if (args[0] === "koç") {
 sayi = "8"
}
if (args[0] === "boğa") {
  sayi = "6"
}
if (args[0] === "ikizler") {
  sayi = "5"
}
if (args[0] === "yengeç") {
  sayi = "2"
}
if (args[0] === "aslan") {
  sayi = "1"
}
if (args[0] === "başak") {
  sayi = "5"
}
if (args[0] === "terazi") {
  sayi = "6"
}
if (args[0] === "akrep") {
  sayi = "8"
}
if (args[0] === "yay") {
  sayi = "3"
}
if (args[0] === "oğlak") {
  sayi = "4"
}
if (args[0] === "kova") {
  sayi = "4"
}
if (args[0] === "balık") {
  sayi = "9"
}


message.channel.send(
new Discord.RichEmbed()
  
  .setTitle("**Örnek:** !!burç ikizler")
  .setDescription("**Uğurlu sayın:** " + sayi)
  .setColor("RANDOM")
  .setTimestamp()
  
  )
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'burç',//Komutun adı (Komutu girerken lazım olucak)
  description: 'Burcunuzun uğurlu sayısını söyler',//Komutun Açıklaması
  kategori: 'kullanıcı',// Komutun olduğu kategori. kategoriler: bot-yetkili-ayarlar-kullanıcı-sunucu-eğlence-efektcerceve
  usage: 'burç' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}