const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');

exports.run = async (client, msg, args) => {
    
        const sorted = msg.guild.members.filter(u => !u.bot).array().sort((a, b) => { return (db.fetch(`xpsira_${b.user.id + msg.guild.id}`) ? db.fetch(`xpsira_${b.user.id + msg.guild.id}`) : 0) - (db.fetch(`xpsira_${a.user.id + msg.guild.id}`) ? db.fetch(`xpsira_${a.user.id + msg.guild.id}`) : 0) });
        const top10 = sorted.splice(0, 3)
        const mappedLevel = top10.filter(o => !o.bot).map(s => db.fetch(`seviye_${s.user.id + msg.guild.id}`) || 0)
        const mappedName = top10.filter(o => !o.bot).map(s => s.user.tag);
        const mappedID = top10.filter(o => !o.bot).map(s => s.user.id);
        var str = ''
        for(var i = 0; i < 3; i++) {
            var lvl = mappedLevel[i]
      
            if(msg.author.id === mappedID[i]) {
                str += `[${i + 1}] > ${mappedName[i]}\n  Level: ${lvl} \n\n`
            }

            if(msg.author.id !== mappedID[i]) {
                str += `[${i + 1}] > ${mappedName[i]}\n  Level: ${lvl} \n\n`
            }
        }
        let wEmbed = new Discord.RichEmbed()
        .setTitle(`DarkSlayer | Seviye Sistemi`)
        .setDescription(`${str}`)
        msg.channel.send(wEmbed)
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sıralama"],
  permLevel: 0,
    kategori: "lvl"
};

exports.help = {
  name: 'liderliktablosu',
  description: 'Seviye sisteminin sunucudaki liderlik tablosunu gĂ¶sterir.',
  usage: 'liderlik'
};