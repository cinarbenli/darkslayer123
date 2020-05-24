const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!** <a:sec:702496426961272832>', '**SÜPER!** <a:sec:702496426961272832>', '**NASIL YAPTIN BUNU?!** <a:sec:702496426961272832>', '**MÜKEMMEL!** <a:sec:702496426961272832>', '**SEVDİM BUNU!** <a:sec:702496426961272832>', '**ŞİMDİ OLDU!** <a:sec:702496426961272832>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:uyari:702107531602034718>', '**OLMADI BU!** <a:uyari:702107531602034718>', '**HAY AKSİ!** <a:uyari:702107531602034718>', '**HADİ ORADAN!** <a:uyari:702107531602034718>', '**OLMADI YA!** <a:uyari:702107531602034718>', '**BÖYLE OLMAZ?!** <a:uyari:702107531602034718>', '**HADİ YA!** <a:uyari:702107531602034718>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}ban-kanal** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
    if (!args[0]) return message.reply(`Sistemi kullanabilmek için, i.ban-kanal ayarla/sıfırla #kanal yazmalısın.\nDetaylı bilgi için: i.yardım ban-kanal`)
    if (args[0] == 'ayarla') {
 let kanal = message.mentions.channels.first() || message.guild.channels.get(args.join(' '))
  if (!kanal)     return message.channel.send(x2 + ` Bir kanal etiketle.`)
    db.set(`bankanal_${message.guild.id}`, kanal.id)
  let bankanal = await db.set(`bankanal_${message.guild.id}`, kanal.id)
  message.channel.send(x + `  Ban kanalı ${kanal} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    

    
    
    db.delete(`bankanal_${message.guild.id}`)

    message.channel.send(x + ` Ban kanalı başarıyla sıfırlandı.`)
  }
};
  
  
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['bankanal', 'banlog', 'ban-log'],
 permLevel: 0
};

exports.help = {
 name: 'ban-kanal',
 description: 'Birisi banulunca hangi kanala mesaj gideceğini ayarlarsınız.',
 usage: 'ban-kanal ayarla/sıfırla #kanal',
 kategori: '**AYARLAR**',
 permLvl: '**SUNUCUYU YÖNET**'
};