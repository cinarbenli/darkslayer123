const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
var sunucupanel = message.guild.createChannel("Sunucu Panel", "category").then(sp => {
var toplamkullanıcı = message.guild.createChannel(` Toplam Üye • ${message.guild.memberCount}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`toplamkullanıcı_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@Everyone");
ss.overwritePermissions(role, {
CONNECT: false,
});
})
var toplamkişi = message.guild.createChannel(` Kişi Sayısı • ${message.guild.members.filter(m => !m.user.bot).size}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`toplamkişi_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@Everyone");
ss.overwritePermissions(role, {
CONNECT: false,
});
})
var bots = message.guild.createChannel(` Bot Sunucu Sayısı • ${client.guilds.size}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`bots_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@Everyone");
ss.overwritePermissions(role, {
CONNECT: false,
});
})
var users = message.guild.createChannel(` Bot Kullanıcısı • ${client.users.size}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`users_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@Everyone");
ss.overwritePermissions(role, {
CONNECT: false,
});
})
var toplambot = message.guild.createChannel(` Bot Sayısı • ${message.guild.members.filter(m => m.user.bot).size}`, "voice").then(ss => {
ss.setParent(sp)
db.set(`toplambot_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@Everyone");
ss.overwritePermissions(role, {
CONNECT: false,
});
})
var banlı = message.guild.fetchBans().then(bans => message.guild.createChannel(` Banlı Kişi • ${bans.size}`, "voice")).then(ss => {
ss.setParent(sp)
db.set(`banlı_${message.guild.id}` , ss.id)
let role = message.guild.roles.find(a => a.name === "@Everyone");
ss.overwritePermissions(role, {
CONNECT: false,
});
})
})
message.channel.send(`Panel kuruldu.`);
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['panelkur'],
permLevel: 3
};

exports.help = {
name: 'panel-kur',
description: 'Sunucudaki üye sayısını kanallarda gösterecek bir sistem kurar.',
usage: 'panel-kur'
};