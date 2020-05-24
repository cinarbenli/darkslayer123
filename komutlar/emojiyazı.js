const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

var prefix = ayarlar.prefix;

const mapping = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    'İ': '🇮',
    'Ö': '🇴',
    'ö': '🇴',
    'Ş': '🇸',
    'Ü': '🇺',
    'Ç': '🇨', 
    'ı': '🇮', 
    'o': '🇴',
    'ş': '🇸',
    'ğ': '🇬',
    'Ğ': '🇬',
    'ü': '🇺',
    'ç': '🇨', 
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

exports.run = (bot, msg, args) => {
    if (args.length < 1) {
        throw '**Bir mesaj belirt**';
    }

          if (args.length > 50) return msg.channel.send(`${this.client.emojis.get('509395840821886986')} En fazla 50 Harf Kullanabilirsiniz.`);
  
    msg.channel.send(
        args.join(' ')
            .split('')
            .map(c => mapping[c] || c)
            .join('')
    );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emojiyazısı', 'emojiyaz', 'emoji-yazı'],
  permLevel: 0
};

exports.help = {
  name: 'emojiyazı',
  description: 'Mesajınızı emojiye çevirir.',
  usage: 'emojiyazı <mesaj>'
};