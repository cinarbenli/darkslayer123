exports.run = async (client, message, args, level) => {
  try {
    message.channel.fetchMessages({limit: 2}).then(async messages => {
      if (!Array.from(messages.keys())[1]) return message.reply('Bir mesaj göndermelisin ');
      let msg = messages.get(Array.from(messages.keys())[1]);
      msg.pin();
      message.channel.send('Mesaj sabitlendi.');
    });
  } catch (err) {
    message.channel.send('Bir hata oluştu!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 3,
};

exports.help = {
  name: 'sabitle',
  description: 'Mesajınızı sabitler',
  usage: 'sabitle'
};