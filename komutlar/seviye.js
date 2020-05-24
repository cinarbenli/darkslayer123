const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");

exports.run = async (client, msg, args) => {

  
  let u = msg.mentions.users.first() || msg.author;

        if(u.bot === true) {
                const embed = new Discord.RichEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
  
  
  var xp = db.fetch(`puancik_${u.id + msg.guild.id}`);
   var salam = db.fetch(`xpsira_${u.id + msg.guild.id}`);

  var lvl = db.fetch(`seviye_${u.id + msg.guild.id}`);  
  
        let sira = ''
        const sorted = msg.guild.members.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`xpsira_${b.user.id + msg.guild.id}`) - db.fetch(`xpsira_${a.user.id + msg.guild.id}`) });
        const top10 = sorted.splice(0, msg.guild.members.size)
        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < msg.guild.members.size; i++) {
                if(mappedID[i] === u.id) {
                        sira += `${i + 1}`
                }
        }

const newembed = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setTitle('DarkSlayer | Seviye Sistemi')
.setDescription(`Sıralama #${sira} \nSeviye: ${lvl || 0}\n${xp || 0} / 150 XP`)
.setColor('#49ff00')
.setFooter(msg.author.username + ` Tarafından İstendi`)
msg.channel.send(newembed)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["seviye","low"],
  permLevel: 0,
};

exports.help = {
  name: 'seviyem',
  description: 'Seviyenizi ve XP\'nizi gösterir.',
  usage: 'seviye [@kullanıcı/renk/resim] [renk kodu/resim URLsi/sıfırla]'
};