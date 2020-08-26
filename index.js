//UPTIME CALLBACK
const http = require('http');
const express = require('express');
const app = express();
var server = http.createServer(app);
const Discord = require('discord.js');
const db = require('quick.db')
const { prefix, token } = require('./config.json');





const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const path = require('path');


Structures.extend('Guild', Guild => {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});


const client = new CommandoClient({
    commandPrefix: prefix,
    owner: '700805591094001692',
    disableEveryone: true,
    unknownCommandResponse: false
});

client.registry
  .registerDefaultTypes()
  .registerGroups([['music', 'Music Command Group']])
  .registerGroups([['misc', 'Other commands']])
  .registerGroups([['hana', 'Hana Support Commands']])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: true,
    prefix: false,
    commandState: false,
    unknownCommand: false,
    help: false,
    ping: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));
const marry = 'No one'
const aboutme = 'Im using Hana!I'

client.once('ready', () => {
  console.log('Ready!');
  setInterval(async () => {
const promises = [
client.shard.fetchClientValues('guilds.cache.size'),
client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
];

Promise.all(promises)
	.then(results => {
		const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
    let textList = [
      `Shard: ${client.guilds.cache.size} guilds!`,
      `ht!help | ${totalGuilds} servers`,
    ];  

    var text = textList[Math.floor(Math.random() * textList.length)];
    client.user.setActivity(text, { 
 type: "WATCHING"});
})
  }, 15000); // milliseconds

});

const DBL = require('dblapi.js');
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMDEzNzc5MDg5NzA2MjA1OSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk2NDM0NDc1fQ.KT8Sr4rgOTdAdcomfhdnPkiwhLVxXrthIKcEeVqEI_k', client);

 

dbl.on('posted', () => {
  console.log('Server count posted!');
})
dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  // coamdno ping
  if(comando === "ping") {
const language = await db.fetch(`language_${message.guild.id}`)
if(language === 1){
const m = await message.channel.send("🏓 Ping?");
let days = Math.floor(client.uptime / 86400000); 
let hours = Math.floor(client.uptime / 3600000) % 24; 
let minutes = Math.floor(client.uptime / 60000) % 60; 
let seconds = Math.floor(client.uptime / 1000) % 60; 
const embed = new MessageEmbed()
.setTitle(`🏓 Ping-Pong!`) 
.setColor('RANDOM')
.addField(`⚡ Latência:`,  `${m.createdTimestamp - message.createdTimestamp}ms.`)
.addField(`📢 Latência (API):`, `${Math.round(client.ws.ping)}ms`)
.addField(`⌚ Uptime`, `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`)
return m.edit(`<@${message.author.id}>`, embed)

}
let days = Math.floor(client.uptime / 86400000); 
let hours = Math.floor(client.uptime / 3600000) % 24; 
let minutes = Math.floor(client.uptime / 60000) % 60; 
let seconds = Math.floor(client.uptime / 1000) % 60; 
const m = await message.channel.send("🏓 Ping?");
const embed = new MessageEmbed()
.setTitle(`🏓 Ping-Pong!`) 
.setColor('RANDOM')
.addField(`⚡ Lantecy:`,  `${m.createdTimestamp - message.createdTimestamp}ms.`)
.addField(`📢 Latency (API):`, `${Math.round(client.ws.ping)}ms`)
.addField(`⌚ Uptime`, `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`)
m.edit(`<@${message.author.id}>`, embed)
  }
})


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  // coamdno ping
const user = message.mentions.users.first()

  if(comando === "add-money") {
if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
if(!user){
return message.say('Please mention the user you want to add money')
}
message.channel.send(`Sucessfully added \`${args[1]}\` to <@${user.id}> balance!`)
db.add(`credits_${user.id}`, args[1])
  }
})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  // coamdno ping
const user = message.mentions.users.first()

  if(comando === "remove-money") {
if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
if(!user){
return message.say('Please mention the user you want to add money')
}
message.channel.send(`Sucessfully removed \`${args[1]}\` from <@${user.id}> balance!`)
db.subtract(`credits_${user.id}`, args[1])
  }
})

                                                       
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()

   if(comando === "stats") {
const promises = [
	client.shard.fetchClientValues('guilds.cache.size'),
	client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
];

Promise.all(promises)
	.then(results => {
		const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
		const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount , 0);
		const s1Guilds = results[0].reduce((acc, guildCount) => guildCount, 0);
		const s1Members = results[1].reduce((acc, memberCount) => memberCount , 0);
		const s2Guilds = results[0].reduce((acc) => acc, 0);
		const s2Members = results[1].reduce((acc) => acc );
		return message.channel.send(`\`\`\`js
Shard number | Shard guilds | Shard Members |
----------------------------------------------
Your Shard   |      ${message.client.guilds.cache.size}       |         ${message.client.users.cache.size}     |
----------------------------------------------
Shard 1      |       ${s1Guilds}      |      ${s1Members}      |
Shard 2      |       ${s2Guilds}      |       ${s2Members}       |
Total        |       ${totalGuilds}      |       ${totalMembers}     |\`\`\``);
	})
	.catch(console.error);
  }
})             
  
  



client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "bh") {

if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully added \`${user.username}\` has a **Bug Hunter** member!`)
db.set(`hanabh4_${user.id}`, '<:bughunter:721019880760934400>')

  }
})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "dev") {

if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
const { Canvas } = require("canvas-constructor")
const canvas = require('canvas');
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully added \`${user.username}\` has a **dev** member!`)
db.set(`vip_${user.id}`, 'Active') 
db.set(`hanavip5_${user.id}`, '<:hana_vip:729071381051998268>') 
db.set(`hanabh5_${user.id}`, '<:bughunter:729076247308664944>')
db.set(`hanastaff5_${user.id}`, '<:sstaff:729076201276178493>')
db.set(`hanadev5_${user.id}`, 1)
  }
})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "hp") {
if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully added \`${user.username}\` in **Hana Partner Program!**`)
db.set(`vip_${user.id}`, 'Active') 
db.set(`hanavip5_${user.id}`, '<:hana_vip:726275445313634314>') 
db.set(`hanap5_${user.id}`, '<:hana_partner:721021327061942272>') 
  }
})
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "staff") {
if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully added \`${user.username}\` has a **staff** member!`)
db.set(`vip_${user.id}`, 'Active') 
db.set(`hanavip5_${user.id}`, '<:hana_vip:729071381051998268>') 
db.set(`hanastaff5_${user.id}`, 1)
  }
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const user = message.mentions.users.first()
  // coamdno ping
  if(comando === "unvip") {

if(message.author.id != '700805591094001692'){
return message.say('You can\'t use this command!')
}
message.channel.send(`<:hypesquad:726258430360289330> Sucessfully removed \`${user.username}\` has a vip member!`)
db.set(`vip_${user.id}`, 'Not Active')
db.set(`hanavip5_${user.id}`, '')
}


})
    const voto = new Discord.WebhookClient('744364746467442848', 'rL0qiI3OQrMDrxUnSqvSyB12UIHtUabx3NRIodmYimxKm4IkJRaC6EVqqk5NHMa5R7OU'),

  // configuração (Já está com o necessário)
   bot_id = "550305758583980042", // BOT = Bots Para Discord
   channel_id = "537433191393525760" // Canal site_logs

client.on("message", async message => { 

        try {
          // Verifica se a mensssagem enviada é no canal especificado acima, e reparte toda a menssagem (caso seja)
          if (message.author.id === bot_id && message.channel.id === channel_id) {
            let separador = message.content.split(' '),
              parte_1 = message.content.substr(message.content.indexOf("#")),
              parte_2 = parte_1.substr(7),
              parte_3 = parte_2.substr(parte_2.indexOf(")", "."))
            parte_2.replace(parte_3, "")

            let bot_name_1 = parte_3.replace(") votou no bot **`", ''),
              bot_name_2 = bot_name_1.replace("`**.", ''),
              bot_name_3 = bot_name_2.replace(`https://botsparadiscord.com/bots/${message.client.user.id}`, ''),
              bot_name_4 = bot_name_3.replace("<>", ''),
              bot_name_final = bot_name_4.replace(/(\r\n|\n|\r)/gm, "")

            // Aqui verifica se a menssagem repartida tem a tag do seu bot
            if (bot_name_final === message.client.user.tag) { // Defina a tag do seu bot ex: 'ZabbiX#7853' ou 'bot.user.tag' || 'client.user.tag'

            // Pra pegar o ID do usuário
              let sep = separador[2],
               sep1 = sep.replace("(", ''),
               userID = sep1.replace(")", '')

        /* ATRIBUIÇÃO DE PRÊMIOS
        * Aqui você pode atribuir prêmiação a quem votar no seu bot
        * Moedas, Vips, Outras coisas . . .
        * O ID do usuário "userID"
        */
          db.add(`credits_${userID}`, 1200)    
              
              let userDiscord = await message.client.users.fetch(userID) // Pesquise o usuário pelo ID, e envie uma mensagem informando que ganhou algo, ou agradeça pelo voto

userDiscord.send(`Obrigado por votar
Por me apoiar e me ajudar a conhecer mais pessoas **você ganhará __1200 HanaCoins!__**  :partying_face: `) // Pode modificar e enviar uma embed
             
             // Configurção e Envio do WebHook //
              voto.send(`:tada: \`` + separador[1] + `\` votou no ${message.client.user.tag} e ganhou 1200 HanaCoins! :tada:
>>> \`Vote você também e ganhe prêmios, lembrando que você pode votar a cada 8 horas!\`
:link: https://botsparadiscord.com/bots/${message.client.user.id}/votar`, { // Recebeu 1 dia de \`VIP\`! :sunglasses:
                username: message.client.user.username, //Definição do nome do WebHook
                avatarURL: message.client.user.displayAvatarURL // Definição da imagem do WebHook
              }) 
            }
          }
        } catch (e) {
          console.log('Algo aconteceu :/\n' + e)
        }
})
client.login(token);
