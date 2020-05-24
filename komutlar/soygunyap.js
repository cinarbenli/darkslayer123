const Discord = require('discord.js');

const prosoyguncu = [
  "85 Türk Lirası Soydun",
  "10 Türk Lirası Soydun",
  "Ahhaa Polise Yakalandın.",
  "1 Türk Lirası Soydun",
  "120 Türk Lirası Soydun",
  "250 Türk Lirası Soydun",
  "800 Türk Lirası Soydun!",
  "950 Türk Lirası Soydun",
  "1.000 Türk Lirası Soydun",
  "2.500 Türk Lirası Soydun",
  "1.485 Türk Lirası Soydun",
  "7.850 Türk Lirası Soydun",
  "24.657 Türk Lirası Soydun",
  "89.652 Türk Lirası Soydun",
  "278.545 Türk Lirası Soydun",
  "578.546 Türk Lirası Soydun",
  "875.135 Türk Lirası Soydun",
  "205.598 Türk Lirası Soydun",
  "975.124 Türk Lirası Soydun",
  "356.451 Türk Lirası Soydun",
  "VURGUN!1.000.0000 Türk Lirası Soydun!",
];

exports.run = function(client, message) {
//Komutun Kodları
const soyguncu = prosoyguncu[Math.floor(Math.random() * prosoyguncu.length)];
  message.channel.send(
  
  "**Soyguna hazırlanılıyor..**"
  
  ).then(
  function(i){
    i.edit("**Soyguna gidiliyor..**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Soygun Yaptın!**')
    .setDescription('---------')
      .addField('**Soyulan Para: **',soyguncu)
    .setColor('Random')
    
    //Efe Tarafından Kodlanmıştır Lütfen Çalmayınız.
    )
  })
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ['soygun'],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'soygunyap',//Komutun adı (Komutu girerken lazım olucak)

  description: 'Soygun Yaparsınız',//Komutun Açıklaması
    kategori: 'eğlence',// Komutun olduğu kategori. kategoriler: bot-sunucu-yetkili-kullanıcı
  usage: 'soygunyap' //komutun kullanım şekli; ÖR: !ban @Kullanıcı
}