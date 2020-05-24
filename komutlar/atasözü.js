const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Acele ile menzil alınmaz.**',
'**Acı söz insanı dininden çıkarır, tatlı söz yılanı deliğinden çıkarır.**',
'**Akıllı sır saklar; aptal sır verir.**', '**Baba oğluna bir bağ bağışlamış, oğul babaya bir salkım üzüm vermemiş.**',
'**Bağ dua değil, çapa dua ister.**',
'**Aleme cellat lazım; senin olman ne lazım?**',
'**At ölür meydan kalır, yiğit ölür şan kalır..**',
'**Ateş olmayan yerden duman çıkmaz..**',
'**Az kazanan çok kazanır, çok kazanan hiç kazanır..**',
'**Aç koyma hırsız olur, çok söyleme yüzsüz olur, çok değme arsız olur.**',
'**Bebeler birbirinden huy kapar, ayranlarına su katar.**',
'**Bu dünya iki kapılı handır, gelen bilmez giden bilmez.**',
'**Darlıkta dirlik olmaz.**',
'**Dağ dumansız insan hatasız olmaz.**',
  '**Abanın kadri yağmurda bilinir.**',
  'Dağ ne kadar yüce olsa da üstünden yol aşar.',
'Davetsiz gelen döşeksiz oturur.',
'Darı  unundan baklava, incir ağacından oklava olmaz',
'Damlaya damlaya göl olur.',
'Deliye her gün bayram.',
'Demir tavında dövülür.',
'Eğilen baş kesilmez.',
'Eğri otur , doğru konuş.',

'Elden gelen övün olmaz , o da vaktinde gelmez.',

'El  el için ağlamaz, başına kara bağlamaz.',

'El elin eşeğini türkü çağırarak arar.',
'Elin ağzı torba değil ki büzesin',
'Erinenin oğlu kızı olmamış.',

'Eskisi olamayanın yenisi olmaz.',

'Eşeğe altın semer vursalar yine eşektir.',

'Eşeğe “cilve yap” demişler tekme atmış.',

'Eşeğe semer yük değil.',

'Eşeği düğüne çağırmışlar, “ ya odun eksik, ya su”demiş',

'Eşek hoşaftan ne anlar.',

'Ev alma,  komşu al.',

'Evdeki hesap çarşıya uymaz.',

'Fazla mal göz çıkarmaz.',

'Felek kimine kavun yedirir, kimine kelek.',

'Garip kuşun yuvasını Allah yapar.',

'Gelen geçer , konan göçer.',

'Gelen gideni aratır.',

'Geline “oyna “ demişler “yerim dar” demiş.',
'Gelini ata bindirmişler “ ya nasip” demiş.'
,
'Gemisini kurtaran kaptandır.',
'Gönül ferman dinlemez.',

'Gönül kimi severse güzel odur.',

'Gön yufka yerinden delinir.'
,
'Gören gözün hakkı vardır.'
,
'Görünen köy kılavuz istemez.'
,
'Göze yasak olmaz.'
,
'Göz var izan var.'
,
'Gurkun cücüğü güzün sayılır.',

'Gülme komşuna gelir başına.',

'Gülü seven dikenine katlanır.',
,
'Gün doğmadan neler doğar.'
,
'Güneş girmeyen eve doktor girer'
,
'Güzel bürünür, çirkin görünür.'
,
'Güzele ne yakışmaz.'
,
'Gönülsüz yenen aş ya karın ağrıtır ya baş.',

'Hamama giren terler.',

'Harman döven öküzün ağzı bağlanmaz.',

'Harman yel ile , düğün el ile.',

'Hasta yatan ölmez, eceli yeten ölür.',

'Hatasız kul olmaz.',

'Hazıra dağlar dayanmaz.',
,

'Her deliğe elini sokma , ya yılan çıkar ya çıyan.'
,
'Her horoz kendi çöplüğünde öter.'
,
'Her inişin bir yokşu vardır'
,
'Her işte bir hayır vardır.'
,
'Her kuşun eti yenmez.'
,
'Her yiğidin bir yoğurt yiyişi vardır.'
,
'Horozu çok olan köyün sabahı geç olur.'
,
'Isıracak it dişini göstermez.'
,
'İki cambaz bir ipte oynamaz'
,
'İki dinle bir söyle'
,
'İki el bir baş içindir.'
,
'İki karpuz bir kotuğa sığmaz.'
,
  'İlk vuran okçu.'
,
'İnsan ayaktan at tırnaktan kapar.'
,
'İnsan beşer bazen şaşar.'
,
'İnsanı gam duvarı nem yıkar.'
,
'İnsanın adı çıkacağına canı çıksın.',
'İnsanın canı acıyan yerindedir.',

'İnsanın vatanı doğduğu yer değil doyduğu yerdir.',
'İnsanoğlu çiğ süt emmiş.',

'İnsan yedisinde ne ise yetmişinde de odur.',

'İp inceldiği yerden kopar.',

'İşin yoksa şahit ol, paran çoksa kefil ol.',

'İşleyen demir pas tutmaz.',

'İşten artmaz dişten artar.',

'İt derisinden post olmaz.',

'İtle dalaşmaktansa çalıyı dolaşmak iyidir.',

'İti an, çomağı eline al.',

'İti öldürene sürütürler.',

'İt ite buyurur, it de kuyruğuna.',

'İt iti ısırmaz.',

'İt ürür, kervan yürür.',

'İyi dost kara günde belli olur.',

'İyi evlat  babayı vezir, kötü evlat rezil eder.',

'İyi adam lafının üstüne gelir.',
'İyilik eden iyilik bulur.',

'İyilik et denize at, balık bilmezse Halik bilir.',

'İyi olacak hastanın doktor ayağına gelir.',

'Kabul olunmayacak duaya amin denilmez.',

'Kaçan balık büyük olur.',

'Kalkacağın yere oturma.',

'Kanı kanla yumazlar, kanı su ile yurlar.',

'Kan kus “ kızılcık şerbeti içtim” de.',
'Kara haber tez duyulur',

'Kardeş kardeşi atmış yar başında tutmuş.',

  
'Karnı tok it gölgede yatar.',

'Katıra “baban kim” demişler; “dayım at” demiş.',

'Kaza, geliyorum demez.',

'Kazanırsan dost kazan,düşmanı anan da doğurur',

'Kaz gelen yerden tavuk esirgenmez.',

'Kedi uzanamadığı ciğere murdar der.',

'Kefilin ya saçı ya sakalı.',

'Kelin ilacı olsa başına sürer.',

'Kel kız teyzesinin saçı ile övünür.',

'Kel ölür, sırma saçlı olur; kör ölür, badem gözlü olur.',

'Kendi düşen ağlamaz.',

'Keskin sirke küpüne zarardır.',

'Kılavuzu karga olanın burnu boktan ayrılmaz.',
  
'Kısmetinde ne varsa kaşığında o çıkar.',

'Kız evi naz evi.',

'Kızını dövmeyen dizini döver.',

'Kızın var, sızın var.',

'Kimsenin ettiği yanına kalmaz.',

'Kimse ayranım ekşi demez.',

'Kol kırılır yen içinde kalır.',

'Komşuda pişer, bize de düşer.',

'Komşu komşunun külüne muhtaçtır.',

'Komşunun tavuğu komşuya kaz görünür.',

'Kork Allah’tan korkmayandan.'

];
var atasozuver = Math.floor(Math.random()*Random.length);
const atasozu= new Discord.RichEmbed()
.setDescription(`${Random[atasozuver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(atasozu)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'atasözü',
description: 'Bot Tarafından Rasgele Atasözleri Gönderilir',
usage: 'atasözü'
};