const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
	let botisim = args[1]
  let sahip = args[0]
  let sebebp = args[2]
	let log = "540617786880163902" // bot eklendi / onaylandı / reddedildi kanalı
	
	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  message.delete()
		client.channels.get(log).send(`:x: <@${sahip}> adlı kişinin <@${botisim}> adlı botu atıldı.Sebep: **${sebebp}**. Atan yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: Botu onayladınız.`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 0
};

exports.help = {
  name: 'botat', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6