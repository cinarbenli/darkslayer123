const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();

exports.run = async (receivedMessage, msg, args) => {
     if (!msg.member.hasPermissions("KICK_MEMBERS")) return msg.channel.send("Bir yetkili değilsin bu yüzden komutu kullanamazsın!")
var mod = msg.author
    let reason = args.join("").slice(25);
let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if (!user) return msg.reply('Bir kullanıcı etiketlemelisin.')
  if (!reason) return msg.reply('Bir sebep belirtmelisin.')
  let mute = msg.guild.roles.find(r => r.name === "🤬| Yazılıda Muteli");
          
  let mutetime = args[1];
if(!mute){
      mute = await msg.guild.createRole({
        name: "🤬| Yazılıda Muteli",
        color: "#cf2a2a",
        permissions:[]
      })
      msg.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(mute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
  
    }
  
  
  await(user.addRole(mute.id));
  let mutezaman = args[1]
.replace(`d`," Gün")
.replace(`s`," Saniye")
.replace(`h`," Saat")
.replace(`m`," Dakika")
.replace(`w`," Hafta")
  

  const muteembed = new Discord.RichEmbed()
         .setTitle('DarkSalyer | Süreli Susturma:')
      .addField(`Yetkili` , ` ${mod} adlı moderatör susturma kullandı.**<@${user.id}>** adlı kullanıcı ${reason} sebebi ile ${mutezaman} susturuldu.`)
    msg.channel.send(muteembed);
  setTimeout(function(){
    // msg.channel.send(`<@${user.id}> Muten açıldı.`)
      const muteembed = new Discord.RichEmbed()
      .setDescription(`<@${user.id}> süren doldu, artık konuşabilirsin!`)
        msg.channel.send(muteembed)
    user.removeRole(mute.id);
  }, ms(mutetime));

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute",'smute'],
  permLevel: 0,
  kategori:'yetkili',
};

exports.help = {
  name: "sürelimute",
  description: "Belirttiğiniz kullanıcıyı belirttiğiniz zamana göre susturur.",
  usage: "sustur"
};
