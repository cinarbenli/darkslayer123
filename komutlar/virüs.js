const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kimi Hackleyeceğinizi Yazmadınız!**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor('RED')
    .setDescription(`** ${mesaj} ` + message.author.username + '**Adlı kişi sana virüs gönderdi. İntikam alıcak mısın?')
        .setImage(``)

    return message.channel.sendEmbed(embed);
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["v", "vg", "virüs"],
  permLevel: 0
};

exports.help = {
  name: 'virüs',
  description: 'İstedğiniz kişiye virüs gönderirsiniz.',
  usage: 'virüs-gönder',
  kategory: 'eğlence'
};