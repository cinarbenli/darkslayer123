const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');

const reset = ['sıfırla', 'reset']

exports.run = async (client, msg, args) => {

  
  if (args[0]) {
    
    if (!msg.member.hasPermission("MANAGE_ROLES")) {
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription("Bu komutu kullanabilmek için **Rolleri Yönet** iznine sahip olmalısın!")
      msg.channel.send({embed})
      return
    }

    if(reset.includes(args[0])) {
                        if(!db.has(`roll_${msg.guild.id}`)) {
        if (!db.has(`rollss_${msg.guild.id}`)) {
                                const embed = new Discord.RichEmbed()
                                        .setDescription("Rol ödülleri sistemi sıfırlanamıyor çünkü bu sistem aktif edilmemiş!")
                                        .setColor("RANDOM")
                                msg.channel.send({embed})
                                return
                        }}
                        db.delete(`roll_${msg.guild.id}`)
      db.delete(`rollss_${msg.guild.id}`)
                        const embed = new Discord.RichEmbed()
                                .setDescription("Rol ödülleri sistemi başarıyla sıfırlandı!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
    
    let r = msg.mentions.roles.first();
    
    if (!r) {
      const embed = new Discord.RichEmbed()
                                .setDescription("Bir rolü etiketleyiniz veya `sıfırla` yazınız!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
    }
    
    if (!args[0]) {
      const embed = new Discord.RichEmbed()
                                .setDescription(`Lütfen **${r.name}** rolünü almak için kaçıncı seviyede olmak gerektiğini yazınız!`)
        .setFooter("Sayı biçiminde yazınız.")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
    }
    
    if (isNaN(args[0])) {
      const embed = new Discord.RichEmbed()
                                .setDescription(`Lütfen **${r.name}** rolünü almak için kaçıncı seviyede olmak gerektiğini sayı biçiminde yazınız!`)
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
    }
    
  db.set(`roll_${msg.guild.id}`, r.id)
  db.set(`rollss_${msg.guild.id}`, args[0])
  
    const embed = new Discord.RichEmbed()
                                .setDescription("Rol ödülleri sistemi başarıyla aktif edildi!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
  }

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'rolödül',
  description: 'Seviyenizi ve XP\'nizi gösterir.',
  usage: 'rolödül'
};