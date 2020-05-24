const Discord = require("discord.js");

exports.run = async (client, message, args, color, prefix) => {
    if(message.author.id !== "637595942702546964") return message.reply(`Komut denendi. İzin verilmiyor.`);
    try {
        let codein = args.join(" ");
        let code = eval(codein);

      if (codein.length < 1) return message.reply(`deneyebilmek için bir kod girmelisin!`)
      
        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('» :inbox_tray: Giriş;', `\`\`\`js\n${codein}\`\`\``)
        .addField('» :outbox_tray: Çıkış;', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
      let embed2 = new Discord.RichEmbed()
      .setColor('RANDOM')
      .addField('» Hata', "\`\`\`js\n"+e+"\n\`\`\`")
        message.channel.send(embed2);
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kod'],
    permLevel: `4`
  };
  
  exports.help = {
    name: 'eval',
    description: '',
    usage: 'eval'
  };