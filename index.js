const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDY1OTQyNDI3NDA1MTIzNjE1.DiU3Kw.CAs6aavXwHqCQJ56lDe22PnK-4A');

bot.on('message',message => {
	if(message.content.startsWith('NANI!?')){
		message.channel.send('NANI OQ FILHO DA PUTA');
	}
});

bot.on('message',message => {
	if(message.content.startsWith('Meu filho funciona')){
		message.channel.send('Claro que funciona, voce e um genio');
	}
});
