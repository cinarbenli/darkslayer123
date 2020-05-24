const ayarlar = require('../ayarlar.json');
exports.run = function(client, message, args) { 
  
if ( message.author.id != ayarlar.sahip ){
   message.channel.send("Bu komutu yanlızca **kurucum** kullanabilir.") // Ayarlar.json daki İD'ye kayıtlıdır.
  }else{

message.channel.send(`**Bu sunucu artık , benim Özel güçlerimi ve Sihirlerimden yararlanabilecek.!**`);
  }  
  };

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pre","gold"],
  permLevel: 0
};

module.exports.help = {
  name: 'premium',
  usage:'fakep'
};