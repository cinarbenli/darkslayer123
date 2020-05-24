const Discord = require("discord.js");
const ms = require("ms");

exports.run = async(client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR"))  
if(!message.member.roles.has("664867235390554143")) return message.channel.send("Bu Komutu Kullanmak İçin Gerekli Yetkiye Sahip Değilsin")
  let member = message.mentions.members.first() || message.guild.members.get(args[0])
  let süre = args[1];
  let sebep = args.slice(2).join(' ') || `Belirtilmemiş`
  if(!member) return message.channel.send("Doğru Kullanım Şekli: !!sesmute <@etiket> süre sebep")
  if(!member.voiceChannel) return message.channel.send("Ses Mutesi Atmak İstediğin Kişi Sestli Kanalda Değil!")
  let log = message.guild.channels.find("name", "cezalı");
  let rol = message.guild.roles.find("name", "🤬|Seslide Mute")
   if(!rol) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Botta Gerekli Yetkiler Bulunmuyor`);
    try {
      rol = await message.guild.createRole({
        name: "🤬|Seslide Mute",
        color: "#cf2a2a",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(rol, {
          SPEAK: false
        });
      });
    } catch(e) { console.log(e) };
  };

if(süre) {
    await (member.addRole(rol))
    member.setMute(true)
    const embed1 = new Discord.RichEmbed()
    .setDescription(`${member} Adlı Kullanıcı **${ms(ms(süre))}** Süre **${sebep}** Sebebiyle Susturuldu.`)
    .setFooter(message.author.username)
    .setTimestamp()
    .setColor("RED")
    log.send(embed1);
  setTimeout(async() => {
   await (member.removeRole(rol))
    member.setMute(false)
    const embed2 = new Discord.RichEmbed()
    .setDescription(`${member} Adlı Kullanıcının **SesliMute** Süresi Doldu.`)
    .setFooter(message.author.username)
    .setTimestamp()
    .setColor("GREEN")
    log.send(embed2)
    
  }, ms(süre));  
  };
};

exports.conf = {
  enabled : true,
  guildOnly: true,
  permLevel: 0,
  aliases: ["vmute"]
}

exports.help = { 
name: "sesmute"
}