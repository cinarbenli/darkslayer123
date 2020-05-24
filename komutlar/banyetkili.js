const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
    var başarılı = ['**İŞTE BU!** <a:sec:702496426961272832>', '**SÜPER!** <a:sec:702496426961272832>', '**NASIL YAPTIN BUNU?!** <a:sec:702496426961272832>', '**MÜKEMMEL!** <a:sec:702496426961272832>', '**SEVDİM BUNU!** <a:sec:702496426961272832>', '**ŞİMDİ OLDU!** <a:sec:702496426961272832>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

      var başarısız = ['**TÜH!** <a:uyari:702107531602034718>', '**OLMADI BU!** <a:uyari:702107531602034718>', '**HAY AKSİ!** <a:uyari:702107531602034718>', '**HADİ ORADAN!** <a:uyari:702107531602034718>', '**OLMADI YA!** <a:uyari:702107531602034718>', '**BÖYLE OLMAZ?!** <a:uyari:702107531602034718>', '**HADİ YA!** <a:uyari:702107531602034718>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}ban-yetkilisi** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
    if (!args[0]) return message.reply(`Sistemi kullanabilmek için, .ban-rol ayarla/sıfırla @rol yazmalısın.\nDetaylı bilgi için: .yardım ban-yetkilisi`)
    if (args[0] == 'ayarla') {
 let rol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
  let newRole;
  let tworole;
  if (!rol)     return message.channel.send(x2 + ` Bir rol etiketle.`)
  else newRole = message.mentions.roles.first().id
  let id = message.mentions.roles.first().id  
    db.set(`banyetkilisi_${message.guild.id}`, id)
  let banrol = await db.set(`banyetkilisi_${message.guild.id}`, newRole)
  if (!message.guild.roles.get(newRole)) return message.channel.send(x2 + ` Etiketlediğin rolü bulamadım. Silinmiş olabilir, bi' kontrol et.`)
    message.channel.send(x + ` Ban yetkilisi <@&${newRole}> olarak ayarlandı.`)
  } 

  if (args[0] == 'sıfırla') {
    
    
    db.delete(`banyetkilisi_${message.guild.id}`)

    message.channel.send(x + ` Ban yetkilisi başarıyla sıfırlandı.`)
  }
};
  
  
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['banyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'ban-yetkilisi',
 description: '+ban komutunu hangi role sahip olanların kullanacağını ayarlarsınız.',
 usage: 'ban-yetkilisi ayarla @rol',
 kategori: '**AYARLAR**',
 permLvl: '**SUNUCUYU YÖNET**'
};