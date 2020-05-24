//BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "DarkSlayer"

exports.run = async (bot, msg, args) => {
  //BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
  //BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
  //BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
//BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
//BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
//BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
//BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
      //BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
        const uembed = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('Kullanıcı;')
        .addField(`Şu anda oynadığı oyun`, userinfo.od1, false)
        .addField(`Durum`, userinfo.status, false)
        .setColor('03f2df')
        .addField(`Katılım Tarihi (Discord)`, userinfo.dctarih, false)
        .addField(`Katılım Tarihi (Sunucu)`, userinfo.dctarihkatilma, false)
        .addField(`Kimlik:`, userinfo.id, true)
        .addField(`Bot mu?:`, userinfo.bot, true)
        .addField(`Roller:`, `${msg.guild.members.get(user.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') || "**Bu kullanıcıda hiçbir rol bulunmuyor**"}`, false)
        .addField(`Son gönderdiği mesaj:`, userinfo.sonmesaj, false)
        .setFooter(`${botadi} || Kullanıcı Bilgi Sistemi`)
        msg.channel.send(uembed)
    }
//BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
//BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!
exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı-bilgi'
};

//BU KOMUT CODARE SUNUCUSUNDAN YUSUF A AİTTİR!