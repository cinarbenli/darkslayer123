const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db');
const ms = require('parse-ms')
const Canvas = require('canvas')
const instagram = require("user-instagram");
const moment = require('moment');
require('./util/eventLoader')(client);
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,Hoş Geldin! <a:kafasalla:702107540267204629> ^^');
  }
  
  });
  
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selam') {
    msg.reply('Sanada selam,Hoş Geldin! <a:kafasalla:702107540267204629> ^^');
  }
  });
  
  
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi akşamlar') {
    msg.reply('Sanada iyi akşamlar,Hoş Geldin! <a:kafasalla:702107540267204629> ^^');
   }
  
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi geceler') {
    msg.reply('Sanada iyi geceler,Tatlı Rüyalar Görüşürüz! <a:kafasalla:702107540267204629> ^^');
   }
  
});


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on("message", async message => {
    if (message.member.hasPermission('MANAGE_GUILD')) return;
    let links = message.content.match(/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi);
    if (!links) return;
    if (message.deletable) message.delete();
    message.channel.send(`Hey ${message.author}, sunucuda link paylaşamazsın!`)
})

client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
  client.channels.get('702888630011691079').send(new Discord.RichEmbed().setAuthor("Yeni Bir DM", client.user.avatarURL).setFooter(message.author.tag, message.author.avatarURL).setDescription(`**Gönderenin ID:** ${message.author.id}`).setTimestamp().addField("Mesaj", message.content).setColor("RANDOM"))
})

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send("Sunucu Zaten Ayarlanmış")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **kabul** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Sunucuyu Yönet` Yetkisi Olan Kullanabilir");
      message.channel.awaitMessages(response => response.content === 'kabul', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
        
         message.guild.owner.send('Hey!, Sunucun Kuruluyor... Bu Biraz Zaman Alabilir!')
       message.guild.channels.forEach(function(kan) {
       message.guild.roles.forEach(function(rol) {
                 kan.delete()
                 rol.delete()
       })}) 
        
        
   message.guild.createChannel('✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])


        
 message.guild.createChannel('【📃】кυяαℓℓαя', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
 message.guild.createChannel('【🚪】gelen-giden', 'text', [{
   id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
       message.guild.createChannel('【⌛️】sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
             message.guild.createChannel('【🎉】çєкιℓιş', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
            message.guild.createChannel('【📢】∂υуυяυℓαя', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
        
                    message.guild.createChannel('【🤝】ραятηєя', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Duyuru Kanalları▬  ▬ ✮")));
        

       }) 
       .then((collected) => {
        message.guild.createChannel('✮ ▬  ▬ Metin Kanalları▬  ▬ ✮', 'category', [{
       id: message.guild.id,
     }]);
             
      message.guild.createChannel(`【❗】şikayet-ve-öneriler`, 'text')
     .then(channel =>
            channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));
     message.guild.createChannel(`【📷】galeri-odası`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));
     message.guild.createChannel(`【🤖】bot-komut`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));
     message.guild.createChannel(`【💬】sohbet-odası`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Metin Kanalları▬  ▬ ✮")));

      message.guild.createChannel(`【👑】Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Ses Kanalları▬  ▬ ✮|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('✮ ▬  ▬ Ses Kanalları▬  ▬ ✮', 'category', [{
      id: message.guild.id,
    }]);

    
  message.guild.createChannel(`【💬】Sesli Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Ses Kanalları▬  ▬ ✮")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });

  })

message.guild.createChannel(`【👑】Sesli Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "✮ ▬  ▬ Ses Kanalları▬  ▬ ✮")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "Kurucu");
      let role3 = message.guild.roles.find("name", "Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,

      });
})



       message.guild.owner.send("Gerekli Herşey Kuruldu!**")
     
            })   
    
}
});

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})
client.on("guildMemberRemove", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("RED")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`📤 ${member.user.tag}, aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
  let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle('')
    .setDescription(``)
 .setColor("GREEN")
    .setFooter("", client.user.avatarURL);
 
  if (!giriscikis[member.guild.id].kanal) {
    return;
  }
 
  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`📥 ${member.user.tag}, aramıza katıldı **${sayac[member.guild.id].sayi}** kişi olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** kişi kaldı!` );
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }
 
});

client.on('guildMemberAdd', async member => {
  let rol = await db.fetch(`otoR_${member.guild.id}`);
  let kanal = await db.fetch(`otoK_${member.guild.id}`);
  let mesaj = await db.fetch(`otomesaj_${member.guild.id}`);
  let rol2 = await db.fetch(`botR_${member.guild.id}`);
  
  if (member.user.bot === true){
    
    if (!rol2) return
    
    member.addRole(member.guild.roles.get(rol2));
  } else {
  
  if (!rol) return
  member.addRole(member.guild.roles.get(rol))
  
  if (!kanal) return
  member.guild.channels.get(kanal).send(`${member} Kullanıcısına \`${member.guild.roles.get(rol).name}\` rolü verildi! **${member.guild.members.size}** Kişiyiz!`)
  }
})

client.on("guildCreate", guild => { // Birisi botu sunucuya attıgında bot özel mesaj atar.
const tesekkurler = new Discord.RichEmbed()
.setTitle(`DarkSlayer | Bilgilendirme`)
.setTimestamp()
.setColor("GREEN")
.setDescription(`Beni Sunucuna Eklediğin İçin Teşekkür Ederim \n Sana En İyi Şekilde Hizmet Edeceğim.\n Eğer Bir Sorunla Karşılaşırsan Destek Sunucuma Gel  https://discord.gg/ADNv9Va \n Komutlarımız için **!!yardım** komutunu kullanınız.`)
guild.owner.send(tesekkurler)


});

client.on("roleCreate", async (rolee, member, guild) => {
  let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);
  if (rolkoruma == "acik") {
    rolee.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir rol oluşturuludu! fakat geri silindi! (Rol Koruma Sistemi)"
      )
      .setColor("BLACK");
    rolee.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});


client.on("channelCreate", async (channel, member, guild) => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (kanal == "acik") {
    channel.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir kanal oluşturuludu! fakat geri silindi! (Kanal Koruma Sistemi) "
      )
      .setColor("BLACK");
    channel.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});

client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`) 
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                   
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('DarkSlayer -|-  Reklam engellendi.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("DarkSlayer Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)                       
                    return msg.channel.send(`${msg.author.tag}, **Bu Sunucuda Reklam Yapmak Yasaktır!**`).then(msg => msg.delete(25000));
                  }             
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
  });

client.on('message', async message => {
const ms = require('ms');
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let u = message.mentions.users.first() || message.author;
if (command === "rol-kur") {
if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
message.channel.send(`Bot Gerekli Rollerin kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 10000,
errors: ['time'],
})

message.guild.createRole({
name: '💎 | Sunucu Sahip',
color: 'ff0000',
permissions: [
"ADMINISTRATOR",
]
})


message.guild.createRole({
name: '🎩 | Genel Sorumlu',
color: '49ff00',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES",
"KICK_MEMBERS"
]
})

message.guild.createRole({
name: '🛠 | Yönetici',
color: 'ffb400',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES"
]
})

message.guild.createRole({
name: '💸 | Booster',
color: '#FF77FF',
})
  
message.guild.createRole({
name: '🏮 | Developer',
color: '#FFCC00',
})
  
message.guild.createRole({
name: '🎀 | Family',
color: '#FF8C69',
})
  
message.guild.createRole({
name: '🤝| Partner',
color: '#002FA7'
})
  
message.guild.createRole({
name: '🔫 | Tek Tabanca',
color: '#00CCCC',
})
  
message.guild.createRole({
name: '💖 | Sevgiler',
color: '#CD00CC',
})
  
message.guild.createRole({
name: '🌌 | Kız',
color: 'd300ff',
})

message.guild.createRole({
name: '🌠| Erkek',
color: '#0000FF',
})

message.guild.createRole({
name: '🤖 | Discord Bot',
color: 'fd7900',
})

message.channel.send(" Gerekli Roller Oluşturuldu!")


}
});


client.on('message', async message => {
    if (message.content === '!!fakegiriş') {
        client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});

client.on('message', async message => {
    if (message.content === '!!fakeçıkış') {
        client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
});

/// LEVEL BOT.JS //
client.on("message", async msg => {
  const db = require('quick.db');
  
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 1) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 2)//mesaj yazınca xp veriyor
    db.add(`xpsira_${msg.author.id + msg.guild.id}`, 2)//doğru bir sıralama sistemi için var

};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {//150 xp de 1 seviye veriyor
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)//seviye verildi
    

    
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)//xp silindi
    
  };
 
  if (db.has(`roll_${msg.guild.id}`) === true) {//rol 
  if (db.has(`rollss_${msg.guild.id}`) === true) {//rol seviye
    
 var r = db.fetch(`roll_${msg.guild.id}`)//rolü bul
 var s = db.fetch(`rollss_${msg.guild.id}`)//seviyeyi bul
  
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
    if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
    msg.channel.send(`**<@${msg.author.id}> başarıyla ${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0} seviyeyi geçtin!**`)
    msg.member.addRole(msg.guild.roles.get(r).id)
    }
  };

}};
  
});
const invites = {};
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});
client.on('guildMemberAdd', member => {
let davetlog = JSON.parse(fs.readFileSync('./ayarlar/davetlog.json', 'utf8'));
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
const embed = new Discord.RichEmbed()
.setDescription(`${member.user.username} Sunucuya katıldı! \n Davet Eden Kişi: \n<@${inviter.id}> \n Daveti Kullanan Kişi Sayısı:\n \`\`${invite.uses}\`\` \n Katıldığı Davet Kodu: \n**${invite.code}** \n Davet Linki: \n https://discord.gg/${invite.code}`)
.setColor("RED")
.setThumbnail(member.user.avatarURL)

  member.guild.channels.find("id", davetlog[member.guild.id]).send({
    embed
  });
  })
})



const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 9000000);



client.on('message', msg => {
  if (msg.content.toLowerCase() === '!!youtube') {
    msg.reply('https://www.youtube.com/channel/UC52n1HosuPbIx161bPjN9ng?view_as=subscriber'); 
  }
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.guild) return;
 if (message.content.includes(`${prefix}afk`)) return;
  if(await db.fetch(`afk_${message.author.id}`)) {
  let süre = await db.fetch(`afk_süre_${message.author.id}`);
  let timeObj = ms(Date.now() - süre);
  message.channel.send(`${message.author} <a:cigara:702107529852878849> Başarıyla AFK Modundan Çıktın. \`\`\`${timeObj.days} Gün ${timeObj.hours} Saat ${timeObj.minutes} Dakika\`\`\` Boyunca AFK'idin. <a:cigara:702107529852878849>`);
  message.member.setNickname();
  db.delete(`afk_süre_${message.author.id}`);
  db.delete(`afk_${message.author.id}`)
  }
  
  var kişi = message.mentions.users.first();
  if(!kişi) return;
  var sebep = await db.fetch(`afk_${kişi.id}`);
  
  if(sebep) {
  let süre = await db.fetch(`afk_süre_${kişi.id}`);
  let timeObj = ms(Date.now() - süre);
  message.channel.send(`<a:cigara:702107529852878849> ${kişi} Kullanıcısı **${sebep}** Sebebi İle \`\`\`${timeObj.days} Gün ${timeObj.hours} Saat ${timeObj.minutes} Dakikadır\`\`\` Afk. <a:cigara:702107529852878849>`);
 }
});

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() ===  '!!botpaneli') {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Bot Kullanımı', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT']
}])



        
 message.guild.createChannel(`Bellek Kullanımı: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, 'voice', [{
  id: message.guild.id,
  deny: ['CONNECT']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
 message.guild.createChannel(`Bot Sunucu Sayısı: ${client.guilds.size.toLocaleString()}`, 'voice', [{
  id: message.guild.id,
  deny: ['CONNECT']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
       message.guild.createChannel(`Kullanıcı: ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, 'voice', [{
        id: message.guild.id,
        deny: ['CONNECT']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
             message.guild.createChannel(`Ping: ${client.ping}`, 'voice', [{
              id: message.guild.id,
              deny: ['CONNECT']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
            message.guild.createChannel('Yapımcım: 𝕯𝖘 | Hakan', 'voice', [{
              id: message.guild.id,
              deny: ['CONNECT']
            }])
            .then(channel =>
              channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
             message.guild.createChannel(`Kütüphanesi: Discord.js`, 'voice')
            
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Bot Kullanımı")));
        message.channel.send('Bot Bilgi Panelini Oluşturdum');
                 })   
    
}
});




const botadi = "DarkSlayer"

client.on('messageDelete', message => {
let modlogs =  db.get(`modlogkanaly_${message.guild.id}`)
  const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
      modlogkanal.send({embed: {
    Color: "#080000",
    author: {
      name: `${message.author.tag} tarafından gönderilen bir mesaj silindi`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj 1024 karakterden fazla mesajı gösteremem`,
        value: `\`\`\`Bilinmiyor...\`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
    } else {
      modlogkanal.send({embed: {
Color: "#080000",
    author: {
      name: `${message.author.tag} kullanıcısının mesajı silindi\n`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj:`,
        value: `\`\`\` ${message.content} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
    }
  }
          );




client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("#080000")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
 let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("#080000")
    .setAuthor("Bir kişinin yasağı kaldırıldı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('channelCreate', async channel => {
 let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
      Color: "#080000",
      fields: [{
          name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
          value: `\`\`\` ${channel.name} \`\`\``
        },
        {
          name: `Oluşturulan Kanalin Türü`,
          value: `\`\`\` Metin Kanalı \`\`\``
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Oluşturulan Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('channelDelete', async channel => {
 let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
     Color: "#080000",
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
 Color: "#080000",
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('roleDelete', async role => {
 let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Rol Silindi. \nSilinen Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});

client.on('emojiDelete', async emoji => {
 let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Emoji Silindi. \nSilinen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  
  }
});


client.on('roleCreate', async role => {
let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
     modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Yeni Bir Rol Oluşturuldu. \nOluşturulan Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});


client.on('messageUpdate', async (oldMessage, newMessage) => {
 let modlogs = db.get(`modlogkanaly_${oldMessage.guild.id}`)
  const modlogkanal = oldMessage.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }
    modlogkanal.send({embed: {
      Color: "#080000",
      author: {
      name: `${oldMessage.author.tag} mesajını düzenledi:\n`,
      icon_url: oldMessage.author.DisplayAvatarURL
      },
      fields: [{
        name: `Eski mesaj:`,
        value: `\`\`\` ${oldMessage.content} \`\`\``
      },
      {
        name: `Yeni Mesaj:`,
        value: `\`\`\` ${newMessage.content} \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
      icon_url: oldMessage.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
      }
    }
    });
  }
});


client.on('emojiCreate', async emoji => {
 let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir emoji eklendi. \nEklenen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    } 
   } 
});
  }
});

client.on("guildCreate", guild => {
  const e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      "Beni sunucuna Eklediğin İçin Teşekkürler.\n!!yardım Yazarak Bilgi Alabilirsin.\nSorun Olursa Destek sunucusuna Gelerek Yardım Alabilirsin."
    )
        .addField(
      "» Linkler",
      `[Bot Davet Linki](https://dark-slayer-discord.glitch.me/)` +
        "**\n**" +
        `[Bota Oyver](yakında)` +
        "**\n**" +
        `[Destek Sunucusu](https://discord.gg/ADNv9Va)`,
      false
    )
    .setFooter("Sunucu kurucusu olduğunuzdan dolayı sadece size gönderildi.");

  guild.owner.send(e);
});
client.on("message", async msg => {
  db.add(`mesj_${msg.author.id}`, 1);
});


client.on('message', message => {
if (message.content === `@!DarkSlayer`) {
 message.reply('**Prefixim: ** +ayarlar.prefix')
}
});


client.on('guildCreate', guild => {
    let channel = client.channels.get("702888630011691079") //mesaj atacağı kanal
        const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`Sunucuya Eklendim`)
        .setThumbnail(guild.iconURL)
        .addField("Sunucu", guild.name)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });
client.on('guildDelete', guild => {
    let channel = client.channels.get("702888630011691079") // mesaj atacağı kanal
        const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`Sunucudan Atıldım`)
        .setThumbnail(guild.iconURL)
        .addField("Sunucu", guild.name)
        .addField("Kurucu", guild.owner)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
         channel.send(embed);
    });






module.exports = async message => {
  let client = message.client;
  let prefix = ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) { 
let veri = await db.fetch(`botbakım`)
if(veri) {
 if(message.author.id !== "710208300007817237") {
 
 let embed = new Discord.RichEmbed()
 .setTitle('Bakımdayız :x:')
 .setDescription('Bot,şu an kurucu tarafından bakıma alındı.')
 .addField('Bakım Sebebi:', veri)
 .setColor('RED')
message.channel.send(embed).then(m => m.delete(10000))
 return
 } 
  
}

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};


client.on('ready', () => {
  const moment = require("moment");
require("moment-duration-format");

 setInterval(() => {
const calismasure = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
let botdurum = client.channels.find(c => c.id === '704658902389620757')//Botun sürekli mesaj atacağı kanal.
const botistatistik = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setTitle('Bot İstatistikleri')
	
.addField(`RAM`,`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/512mb`)
.addField(`Çalışma Süresi`,`${calismasure}`)
.addField(`Ping`,`${client.ping}`)
.addField(`discord.js`,`v${Discord.version}`)
.addField(`Bilgi`,`${client.guilds.size.toLocaleString()} sunucu ve ${client.users.array().length} kullanıcıya hizmet veriyor.`)
.setTimestamp()
.setFooter('DarkSlayer')
//https://cnslink.cf
botdurum.send(botistatistik);

  }, 86400000); //Milisaniye cinsinden. 1 saniye =  1000 milisaniye. Örnek Olarak 1 saat = 3600000milisaniye
  //https://convertlive.com/tr/u/dönüştürmek/milisaniye/a/saniye Bu siteden hesaplamasını yapabilirsiniz.
});


function kanaladı1() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`704662667456938044`).setName(`Her şey sizler için...`);
            kanaladı2();
        }, 10000);
      });
}
function kanaladı2() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`704662667456938044`).setName(`Bot Sahibi: 𝕯𝖘 | Hakan`);
            kanaladı3();
        }, 10000);
      });
}
function kanaladı3() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`704662667456938044`).setName(`Geliştirici: Kiritowo`);
            kanaladı4();
        }, 10000);
      });
}
function kanaladı4() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`704662667456938044`).setName(`Sizin için en iyisi!`);
            kanaladı1();
        }, 10000); // kanal adının değişme hızı düşürmeyin kasma yaratır !
      });
}
client.on('ready', async message => {
   kanaladı1();
 });


client.on('message', msg => {
if(msg.content === '<@702477655370629261>'){
msg.reply("Efendim? \n**Verebileceğin Cevaplar:** *naber* , *yardım et*")
          }});

client.on('message', msg => {
if(msg.content === 'DarkSlayer'){
msg.reply("Efendim? \n**Verebileceğin Cevaplar:** *naber* , *yardım et*")
          }});

client.on('message', msg => {
if(msg.content === 'geveze'){
msg.reply("Efendim? \n**Verebileceğin Cevaplar:** *naber* , *yardım et*")
          }});

client.on('message', msg => {
if(msg.content === 'naber'){
msg.reply("İyi Sen? \n**Verebileceğin Cevaplar:** *iyi*,*kötü*")
          }});

client.on('message', msg => {
if(msg.content === 'yardım et'){
msg.reply("Komutları görmek için *!!yardım* yazabilirsin")
          }});

client.on('message', msg => {
if(msg.content === 'iyi'){
msg.reply("Allah Daha Çok İyilik Versin :)")
          }});

client.on('message', msg => {
if(msg.content === 'kötü'){
msg.reply("İyi Olursun İnşallah");
          }});


client.on('guildMemberAdd',async member => {
 const guild = member.guild
     
      const kanalcık =  db.fetch(`botPanel_${member.guild.id}`)
    if (kanalcık) {
      const kanal = guild.channels.find('id', kanalcık)
      if (!kanal) return db.delete(`botPanel_${guild.id}`)
      kanal.setName(`💎Üye Sayısı : ${guild.memberCount}💎`)
    }
})

client.on('guildMemberRemove',async member => {
 const guild = member.guild
    
 
      const kanalcık =  db.fetch(`botPanel_${member.guild.id}`)
    if (kanalcık) {
      const kanal = guild.channels.find('id', kanalcık)
      if (!kanal) return db.delete(`botPanel_${guild.id}`)
      kanal.setName(`💎Üye Sayısı : ${guild.memberCount}💎`)
    }
});


const antispam = require("discord-anti-spam-tr");
//istediğiniz yere ekleyin bot.js de
antispam(client, {
  uyarmaSınırı: 4, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 7, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 1000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  uyarmaMesajı: "Spamı Durdur Yoksa Mutelerim.", // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
  rolMesajı: "Spam için yasaklandı, başka biri var mı?", //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 8,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 12, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 7, // Spamdan sonraki zaman
  rolİsimi: "✘  | Cezalı" // Spam Atan Kullanıcılar Verilecek Röl
});

client.on(`userUpdate`, (oldUser, newUser) => {

  let kişi = client.users.get(oldUser.id)
  let avatar = kişi.avatarURL
  let kanal = client.channels.find(ch => ch.id === '705036063080579213')

  const emb = new Discord.RichEmbed()
  .setImage(avatar)
  .setFooter(`${kişi.tag}`)
  .setTimestamp()
  .setDescription(`Fotoğrafa gitmek için [Tıkla](${kişi.avatarURL})!`)
  kanal.send(emb)

});

client.on('message', async message => {
if (message.content === '!!fakekatıl') { // . yerine prefixi yaz
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});


client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`Bulunamadı!\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);
    return;
  } else {
    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs aramızdan ayrıldı.\nŞahsı davet eden:** \`\`${sa.tag}\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.removeRole(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.removeRole(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    const aa = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(
        `\`\`${member.user.tag}\`\` **adlı şahıs sunucuya katıldı.\nŞahsı davet eden:** \`\`${davetçi.tag}\`\`\n**Toplam \`\`${sayı2}\`\` daveti oldu!**`
      )
      .setFooter(client.user.username, client.user.avatarURL);
    client.channels.get(kanal).send(aa);
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.addRole(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.addRole(veri2);
        return;
      }
    }
  });
});


client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let zamans = 600000
let norman = await db.fetch(`gold_${msg.author.id}`);
let i = ayarlar.sahip
          if (msg.author.id == i) {
          if (norman !== null && zamans - (Date.now() - norman) > 0) {
          let time = ms(zamans - (Date.now() - norman));
          } else {
          if(msg.author.bot) return;   
          if (msg.content.length > 1) {
          db.set(`shp_${msg.author.id}`, Date.now());
                var nrmn = new Discord.RichEmbed()
                .setAuthor(`Sahibim ${msg.author.username}`,`${msg.author.avatarURL || msg.author.displayAvatarURL}`)
                .setDescription(`**Sahibim Geldi** <@${msg.author.id}>`)
                .setColor("RANDOM")
                .setFooter("Benim Sahibim <@!555721166069825541>!!")
                msg.channel.send(nrmn)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});


client.on('message', async msg => {

  if (msg.content.toLowerCase() === '<@!555721166069825541>') {

    msg.reply("`Lüten Sahibimi Etiketleme. Meşgul Olabilir. 😊 `")
  }  

});


client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`tagK_${member.guild.id}`)
  let kanal = await db.fetch(`kanalK_${member.guild.id}`)
  
 if (!tag) return
  if (!kanal) return
 member.setNickname(`${tag} | ${member.user.username}  `); 
  client.channels.get(kanal).send(`:inbox_tray: ${member} Sunucuya katıldı! **${tag}** Tagı Başarıyla verildi.`)
});


client.on('message', async msg => {

  if (msg.content.toLowerCase() === '<@!702477655370629261>') {

    msg.reply("`Prefixim !!`")
  }  

});
client.on("guildMemberAdd", async member => {

  let botrol = await db.fetch(`bototorol_${member.guild.id}`);
  let botrol2 = member.guild.roles.find('id', botrol);
  if (!botrol2) return;

   //dcs ekibi

  
    if (botrol) {
      if (member.user.bot) {
        member.addRole(botrol2)
      }
  
    }

});


client.on("guildMemberAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})

client.on("guildMemberRemove", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.
    find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
});

//DarkCode
client.on('guildMemberAdd', async member => {
//DarkCode
if(!member.user.bot) return
  member.guild.channels.get('702888187382464632').send('Sunucuda bir bot katıldı! '+member)
});

client.on('message', async msg => {

  if (msg.content.toLowerCase() === '<@!710208300007817237>') {

    msg.reply("`Geliştiricimi Etiketleme. Meşgul Olabilir. 😊 `")
  }  

});

//DCS EKİBİ
//●●●●●●●●●●●●●●●●●●●●//

setInterval(() => {
console.log(`Bot Yeniden Başlatıdı!`);
process.exit(0);

}, 300000); //Oto Reboot Atılacak Zaman Aralığıdır! 1000 = 1 Saniye 

//●●●●●●●●●●●●●●●●●●●●//
//DCS EKİBİ


  
client.on("guildMemberAdd", async member => {
let dcs = client.channels.get("705514555396325407"); 
dcs.setName(`💎 Son Üye : ${member.user.username} 💎`) //dcs ekibi
});

client.on('guildMemberAdd' , async member => {
    let j = await db.fetch(`jail.${member.id}`)
    if(j == 'var') {
        member.addRole('703216826540359771') //cezalı rol ıd
        member.removeRole('705361952431538179') //alıncak roller sırayla.
    let kanal = client.channels.get("702888630011691079") //log kanal ıd.
     kanal.send(`${member} adlı kullanıcı sunucuya katıldı jailde kayıtlı oldugu için yeniden jaile atım.`)
member.send(`Öncelikle sunucumuza hoşgeldiniz sen onceden jailde olduğun için seni yeniden jaile atmak zorunda kaldım.`)
}
});



client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 1200000//süresini dilediğiniz gibi kısaltabilirsiniz.
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = ayarlar.sahip
          if (msg.author.id == i) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
  var embed = new Discord.RichEmbed()
  .setDescription(`:gem: İşte benim **sahibim Burada Aç Yolu**! <@${msg.author.id}>`)
  .setColor("BLUE")
   msg.channel.send(embed)
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});

client.on('message', async msg => {
    if (msg.content.toLowerCase() === prefix + "rainbow") { //Tırnak İçindeki Yazı Komuttur
   if (msg.channel.type === "dm") return;
  const rol = ':gem: | Sunucu Sahip' // Rol ismi buraya
  setInterval(() => {
      msg.guild.roles.find(s => s.name === rol).setColor("RANDOM")
      },14000);//Hızıyla oynamayın
  }
});

client.on('message', message => {
  let p = '!!'
  const kanalMesajı = new Discord.RichEmbed()
    .setColor('#000064')
    .setDescription(`:postbox: <@${message.author.id}>, kullanımımı özel mesajlarında bulabilirsin! :wink:`)
  
  const özelMesaj = new Discord.RichEmbed()
    .setColor('#000064')
    .setThumbnail(client.user.avatarURL)
    .addField(`**${client.user.username} | Yardım Menüsü**`, `Merhaba ${message.author.username}!\n\n★ Eğer komutlarımı görmek istiyorsan \`${p}komutlar\` yazman yeterli!\n★ Eğer desteklediğim eklentileri görmek istiyorsan \`${p}eklentiler\` yazman yeterli!\n★ Eğer bot hakkında destek almak istiyorsan, [Destek Sunucusu](https://discord.gg/ADNv9Va)a gelebilirsin!\n\nDarkSlayer sana iyi günler diler!`)
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp()
  
  if (message.content === '!!yardım') {
    message.channel.send(kanalMesajı).then(message => message.delete(9000))
    message.author.send(özelMesaj).then(message => message.delete(1209600000))
  }
  
  if (message.content === '!!y') {
    message.channel.send(kanalMesajı).then(message => message.delete(9000))
    message.author.send(özelMesaj).then(message => message.delete(1209600000))
  }
  
  if (message.content === '!!yardımm') {
    message.channel.send(kanalMesajı).then(message => message.delete(9000))
    message.author.send(özelMesaj).then(message => message.delete(1209600000))
  }
  
  if (message.content === '!!help') {
    message.channel.send(kanalMesajı).then(message => message.delete(9000))
    message.author.send(özelMesaj).then(message => message.delete(1209600000))
  }
  
  if (message.content === '!!h') {
    message.channel.send(kanalMesajı).then(message => message.delete(9000))
    message.author.send(özelMesaj).then(message => message.delete(1209600000))
  }
  
  
  
})
// ===== \\ // ===== \\ // ===== \\ // ===== \\ // ===== \\ // ===== \\ // ===== \\ // ===== \\ // ===== \\ // ===== \\ // ===== \\ // ===== \\
client.on('message', message => {
    let p = '!!'
  const kanalMesajı = new Discord.RichEmbed()
    .setColor('#000064')
    .setDescription(`:postbox: <@${message.author.id}>, komutlarımın kategorilerini özel mesajlarında bulabilirsin! :wink:`)
  
  const özelMesaj = new Discord.RichEmbed()
    .setColor('#000064')
    .setThumbnail(client.user.avatarURL)
    .addField(`**${client.user.username} | Komut Kategorileri Listesi**`, `Merhaba ${message.author.username}!\n★ Eğer genel komutları görmek istiyorsan \`${p}genel\`,\n★ Eğer eğlence komutlarımı görmek istiyorsan \`${p}eğlence\`,\n★ Eğer yönetici komutlarını görmek istiyorsan \`${p}yetkili\` yazman yeterli!\n★ DarkSlayer sana iyi günler diler! :)`)
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp()
  
  if (message.content === '!!komutlar') {
    message.channel.send(kanalMesajı).then(message => message.delete(9000))
    message.author.send(özelMesaj).then(message => message.delete(1209600000))
  }
  
  if (message.content === '!!k') {
    message.channel.send(kanalMesajı).then(message => message.delete(9000))
    message.author.send(özelMesaj).then(message => message.delete(1209600000))
  }
});


const yourID = "637595942702546964"; //Instructions on how to get this: https://redd.it/40zgse //Kendi İD'nizi Yazın
const setupCMD = "!!emojirol" //İstediğiniz Komut Yapabilirsiniz örn : !kayıtol
let initialMessage = `Rol Almak için tıkla 💎`; //Dilediğiniz Şeyi Yazabilirsiniz
const roles = ["👤  | Kayıtlı Üye"]; //İstediğiniz Rolü Yazabilirsiniz
const reactions = ["💎"]; //İstediğiniz Emojiyi Ekleyebilirsiniz
const botToken = "NzAyNDc3NjU1MzcwNjI5MjYx.XsadsA.gXZ40H_nDev_OvAcGKr7mf3__sA";
                     
//Load up the bot...
const discord = require('discord.js');
const bot = new Discord.Client();
bot.login(botToken);
//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`Kayıt Olmak İçin **"${role}"** Emojisine Tıkla!`); //DONT CHANGE THIS
    return messages;
}
bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'bilmem') {
    msg.channel.sendMessage('Senin bilmediğini biz nasıl bilek');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hm') {
    msg.channel.sendMessage('Ne düşünüon acaba :thinking: ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsınız') {
    msg.channel.sendMessage('İyi knk Sen Nasılsın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'knk') {
    msg.channel.sendMessage('Efendim knk');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.channel.sendMessage('Küfür Etme Lan  :thinking: ');
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'of') {
    msg.channel.sendMessage('Sıkıldınmı :thinking: ');
  }
});

   
client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`));
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = require("moment-duration-format");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "STARKs-güvenlik.png"
  );
  chan.send(attachment);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;


if (message.content.toLowerCase().startsWith(prefix + `destek-aç`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "🔨| Destek Ekibi")) return message.channel.send(`Sunucu  \`Destek Ekibi\` rolüne sahip değil, bu yüzden yardım talebiniz oluşturulamıyor.`);
    if (message.guild.channels.exists("name", "destek-" + message.author.id)) return message.channel.send(`Bir yardım talebine zaten sahipsin.`);
  if (!message.guild.channels.filter(c => c.type === 'category').find(c => c.name === 'Destek Bölümü')) {
    let knl = message.guild.createChannel('Destek Bölümü', 'category').then(ds => {
        message.guild.createChannel(`destek-${message.author.id}`, "text").then(c => {
          let role = message.guild.roles.find("name", "🔨| Destek Ekibi");
 
          c.overwritePermissions(role, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          c.overwritePermissions(message.author, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          message.channel.send(`:white_check_mark: Yardım talebiniz oluşturuldu, #${c.name}.`);
          const embed = new Discord.RichEmbed()
          .setColor(0xCF40FA)
          .addField(`Hey ${message.author.username}!`, `Yardım talebini neden açtığınızı açıkca anlatın. Destek ekibi en kısa zamanda cevap verecektir <@&703223833552879666>`)
          .setTimestamp();
          c.send({ embed: embed });
        c.setParent(ds)
      }).catch(console.error);
    })
    }
  let kanal = message.guild.channels.filter(c => c.type === 'category').find(c => c.name === 'Destek Bölümü');
  if (kanal) {
    message.guild.createChannel(`destek-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "🔨| Destek Ekibi");
   
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Yardım talebiniz oluşturuldu, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Yardım talebini neden açtığınızı açıkca anlatın. Destek ekibi en kısa zamanda cevap verecektir <@&703223833552879666>`)
        .setTimestamp();
        c.send({ embed: embed });
      c.setParent(kanal)
    }).catch(console.error);
  }
    }

if (message.content.toLowerCase().startsWith(prefix + `destek-kapat`)) {
    if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Yardım talebinizi yardım talebi kanalınızın dışındaki kanallarda kapatamazsınız.`);

    message.channel.send(`Emin misin? Onayladıktan sonra geri alınamaz!\nOnaylamak için,\`!!onayla\`. Yazmak için 10 saniyen var yoksa kendiliğinden iptal olur.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '!!onayla', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Kapatma talebinin zamanı geçti yardım talebin kapatılmadı.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});

client.on("guildMemberAdd", async member => {
  const kisi = member.id;
  const e = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setImage('https://i.hizliresim.com/iQsHCs.gif')
    .addField(` DarSlayer Gaming Ailemize Hoşgeldiniz. İyi Günler Dileriz.`)
    .setFooter(`𝕯𝖘 |  Hakan`)
  client.users.get(kisi).send(e);
});

client.on("message", msg => {
if (msg.content === "!!renkkodları") {
msg.channel.send('https://cdn.discordapp.com/attachments/663835718686081041/713857989966299187/image_search_1588050086004-1.jpg')
}})


                
