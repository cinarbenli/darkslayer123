exports.run = async (client, msg, args) => {
  let kufur=[
    "anan bana sakso çekiyor cnm 5 dk bekle",
    "amına kodumun keltoşu seni",
    "babanın annesinin amına koyayım orul orul orospu evladı",
    "ebenin amı gibi kaşları da kara",
    "seni anasının amında olimpiyat meşalesi yakıp 10 km koştuğumun çocuğu ",
    "senin ananın amına mancınıkla patates atayım",
    "senin dalağını öyle bi sikerim ki ömür boyu hıçkırırsın",
    "ananın amına bilardo topuyla rövaşata çekerim am dolması yarrak kafalı çin orospusu seni amına kodumun çin aslanı bilyesini siktiğimin am düdüğü",
    "senin ananı düdüklü tencerenin arasına alıp öttüre öttüre sikerim ulan ben",
    "ananın amını keserim cebime koyarım sıkıldıkça sikerim",
    "ananın amına sınav yapar 2 milyon kişiyi sokarım",
    "amına barut döker sürtünmeyle yakarım orospu evladı",
    "seni bi sikerim bluetooh un hata verir kapsama alanın genişler.",
    "o tuşlara basan ufacık parmaklarının arasına sokar felç edene kadar siker o felç olan parmaklarını kesip organ mafyasına satarım elde ettigim gelirin bi kısmını görme engelliler vakfına bağışlar kalan kısmıda annenle çarçur eder babanın delirmesini sağlar ocağına incir ağacı diker ağacın gölgesinde teyzeni dallı budaklı sikerim senin",
    "küfür etmek günah olum sen ne yaptıysan artık sana kızmış birisi affettir kendini beni de günaha sokçak orospu kertenkelesi",
    "küfür ederdim ama anan çok yordu",
    "Ananın amına çam ağacı diker gölgesinde sülalesini sikerim",
    "senin ben anana andımızı tersten okuturum amk evladı",
    "Ananı istanbul boğaz köprüsünde sikeyim 2 kıta Seyretsin",
    "öyle yan durup şekilli mekilli tişört giyme ananı götünden siker Erol Taş gibi kiraz ağacından kamçı yapar döverim",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "637595942702546964")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Sen Kimsin Sahibime Sövüyon Amına Kodumun Keli.')
}})
  if(member.id === "637595942702546964")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Birşeyler ters gitti @Adorra#2181  etiketlemişsin yarram!`)
}})
  if(member.id === "637595942702546964")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Hoop! Orda durucan Yapımcım @Adorra#2181'e sövemezsin amını sikerim.`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Beni mi kandırcan orospu çocuğu ?`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
  }})
  }
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };
 
exports.help = {
  name: 'söv',
  description: 'Birine Söver. Destek Sunucusunda Kullanmak Yasak!',
  usage: 'söv'
 }