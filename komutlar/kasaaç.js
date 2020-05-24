exports.run = async (client, message, level) => {
    
    let items = [
    
      "Ak-47",
      "P90",
      "Deagle",
      "Tec-9",
      "M4A4",
      "Five-SeveN",
      "Awp",
      "M4A1-S",
      "Glock-18",
      "SSG 08",
      "P250",
      "Cz75",
      "Famas",
      "Mac-10",
      "Mag-7",
      "Mp7",
      "Mp9",
      "P2000",
      "R8 Revolver",
      "Ump-45",
      "Usp-S",
      "Çift Baretta",
      "Negev",
      "M249"
    
    ];
  
    let item = items[Math.floor(Math.random() * items.length )];

    message.channel.send(`**${message.author}** Kasa Açılıyor...`).then(async msg => {
        setTimeout(() => {
            msg.edit('🔪🔫🔫|🔫|🔫🔫🔪');
        }, 1000);
        setTimeout(() => {
            msg.edit('🔫🔫🔫|🔫|🔫🔪🔪');
        }, 1500);
        setTimeout(() => {
            msg.edit('🔫🔫🔫|🔫|🔪🔪🔫');
        }, 2000);
        setTimeout(() => {
            msg.edit('🔫🔫🔫|🔪|🔪🔫🔫');
        }, 2000);
        setTimeout(() => {
            msg.edit('🔫🔫🔪|🔪|🔫🔫🔫');
        }, 2500);
        setTimeout(() => {
            msg.edit('🔫🔪🔪|🔫|🔫🔫🔫');
        }, 3000);
        setTimeout(() => {
            msg.edit('🔪🔪🔫|🔫|🔫🔫🔫');
        }, 3500);
        setTimeout(() => {
            msg.edit('🔪🔫🔫|🔫|🔫🔫🔪');
        }, 4000);
       setTimeout(() => {
            msg.edit(`😯 ${item} Çıktı!`).then(m =>{
            m.delete(5000)});
        }, 5000);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["csgo-kasa"],
    permLevel: 0
};

exports.help = {
    name: "kasa",
    description: "CS:GO kasası açar",
    usage: "kasaaç"
};