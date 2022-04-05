const Discord = require('discord.js')
const { Database } = require("wio.db")
const db = new Database("Database");
const ms = require('parse-ms');
const delay = require('delay');
const config = require('../ayarlar.json')
exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send(
    new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}))
      .setDescription(`**| Botu Kullanmadan Önce Lütfen \`Yönetici\` Yetkisi Veriniz**`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()//❌ | Sunucuda sistem aktif değil.
      .setFooter(client.user.username, client.user.avatarURL())
      .setColor(message.guild.me.displayColor)).then(m => m.delete({timeout: 10000}));
//----------------------------------------------------------------------
  message.delete({timeout: 5000})


  let Athena = args[0];

  if(!Athena) {
       const embed = new Discord.MessageEmbed()
      .setColor(message.guild.me.displayColor)
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setDescription(`**| Hata! Lütfen Argüman Belirtin.**\n\n**Argümanlar**\n\`( ana-sunucu, altyapı-sunucu, log-kanal )\``)

      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL());
    return message.channel.send(embed);
  
  }
  if (Athena == `ana-sunucu`) {
let Athenaarg = args.slice(1).join(' ');
if(!Athenaarg) return message.reply(`**Lütfen Ayarlamak İstediğiniz Ana Sunucu İDsini Yazın!**`)
db.set(`anasunucu.${message.guild.id}`, Athenaarg)
    return message.channel.send(`Ana Sunucusu Olarak ${Athenaarg} IDli Sunucuyu Ayarladınız`);
} else if (Athena == `altyapı-sunucu`) {

let Athenaarg2 = args.slice(1).join(' ');
if(!Athenaarg2) return message.reply(`**Lütfen Ayarlamak İstediğiniz Altyapı Sunucu İDsini Yazın!**`)
db.set(`altyapisunucu.${message.guild.id}`, Athenaarg2)
    return message.channel.send(`Altyapı Sunucusu Olarak ${Athenaarg2} IDli Sunucuyu Ayarladınız`);


} else if (Athena == `log-kanal`) {

let Athenaarg3 = args.slice(1).join(' ');
if(!Athenaarg3) return message.reply(`**Lütfen Ayarlamak İstediğiniz Log Kanalı İDsini Yazın!**`)
db.set(`logkanal.${message.guild.id}`, Athenaarg3)
    return message.channel.send(`Log Kanalı Olarak <#${Athenaarg3}> Kanalını Ayarladınız!`);
}
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ayarla",
  desciption: "Athena Bot List Sistemi",
  usage: "Athena Bot List Sistemi"
};
