const Discord = require('discord.js');
const { delay, randomRange, verify } = require('../util/Util');
const words = ['çikolata', 'baklava', 'odun', 'bomba', 'süt', 'şimşek', 'yıldırım', 'patlat', 'savaş', 'kelime', 'yok et', 'bilmem', 'öldür', 'sonsuzluk', 'gerçek','discord','kirmizi Dawn','votka','bot','sanal','salak','ekmek almaya git','çorba','uzay','haç','umre','pubg','dünya','evren','anne','bebek','kral','vezir','sex','youtube','facebook','ınstgram','hygna','hygnabot'];

exports.run = async (client, msg, args) => {
  
  this.fighting = new Set();
  
  let opponent = msg.mentions.users.first()
    if (!opponent) return msg.reply("Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (opponent.bot) return msg.reply('Botlar ile oynayamazsın!');
        if (opponent.id === msg.author.id) return msg.reply('Kendin ile kapışamassın!');
        if (this.fighting.has(msg.channel.id)) return msg.reply('Kanal başına sadece bir meydan okuma gelebilir!');
        this.fighting.add(msg.channel.id);
        try {
            await msg.channel.send(`${opponent}, bu meydan okumayı kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
            const verification = await verify(msg.channel, opponent);
            if (!verification) {
                this.fighting.delete(msg.channel.id);
                return msg.reply('Meydan okuman reddedildi...');
            }
            await msg.channel.send('Hazırlanın kelime geliyor...').then(m => {m.delete(3000)});
            const word = words[Math.floor(Math.random() * words.length)];
            await msg.channel.send(`ŞİMDİ \`${word.toUpperCase()}\` YAZ!`);
            await msg.channel.send(`_Kelimeyi tamamen küçük harfle yazınız._`);
            const filter = res => [opponent.id, msg.author.id].includes(res.author.id) && res.content.toLowerCase() === word;
            const winner = await msg.channel.awaitMessages(filter, {
                max: 1,
                time: 30000
            });
            this.fighting.delete(msg.channel.id);
            if (!winner.size) return msg.channel.send('Kimse kazanmadı, berabere bitti!');
            return msg.channel.send(`Hızlıymışsın! Tebrikler ${winner.first().author} Kazandın!`);
        } catch (err) {
            this.fighting.delete(msg.channel.id);
            throw err;
        }
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-yarışı', 'ilk-yazan-kazanır','yk'],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'yazan-kazanır',
  description: 'Botun verdiği kelimeyi ilk yazan kazanır oyunu!',
  usage: 'yazan-kazanır [@kullanıcı]'
};