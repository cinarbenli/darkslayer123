const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`); 

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guvenlik${message.guild.id}`)
  if(!args[0]) {
const mbed = new Discord.RichEmbed()     
.setAuthor("DarkSlayer", client.user.avatarURL)
.setTitle("DarkSlayer")
.setDescription("Tek Yapman Gereken !!güvenlik **#güvenlik** Yazmak!")
.addField("Ne İşe Yarar?", `Bu Sizin Sunucunuzda Reklam Yapacak Veya Zararlı Üyeleri Tespit Etmeye Yarar. 
Bu Üyeler Genelde Zararlı Üyelerdir.
Açtıktan Sonra Otomatik Aktif Olur. Başka Birşey Yazmanıza Gerek Yok
Kapatmak için !!güvenlik sıfırla
`)
.setColor("BLUE")
.setTimestamp()
.setFooter("© DarkSlayer")
message.channel.send(mbed)
    }
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(` Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`!!güvenlik #kanal\``);
    
   db.delete(`guvenlik${message.guild.id}`)
   message.channel.send(`Güvenlik başarıyla kapatıldı.`);
  
    return
  }
  
  
 

   db.set(`guvenlik${message.guild.id}`, logk.id)

message.channel.send(`Güvenlik başarıyla ${logk} olarak ayarlandı`);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gks','güvenlikseviyesi','güvenlik','guvenlik'],
  kategori: "ayarlar",
  permLevel: 0

};

module.exports.help = {
  name: 'güvenlik-seviyesi',
  description: 'güvenlik sistemi',
  usage: 'güvenlik'
};