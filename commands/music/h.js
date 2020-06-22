const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { prefix } = require('../../config.json')
const Discord = require('discord.js')
const client = new Discord.Client()
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['h', 'h'],
      memberName: 'help',
      group: 'misc',
      description: 'Alternative help command',
      guildOnly: false
    });
  }

  run(message) {
  const { prefix } = require('../../config.json')
const dmembed = new MessageEmbed()
.setTitle('All commands!')
.setColor('RANDOM')
.setDescription('All my commands, including music, fun and misc commands you can find below:')
.addField(`Music:`, `<:hana_arrow:723930278783090709> play - Play a command using an url or a song name, remember to use a number after the bot search 5 results.
<:hana_arrow:723930278783090709> pause - Pause the current song.
<:hana_arrow:723930278783090709> resume - Resume the current song.
<:hana_arrow:723930278783090709> leave - Make the bot leave the current voice channel and stop all songs (clearing the queue).
<:hana_arrow:723930278783090709> loop - Repeat the current song.
<:hana_arrow:723930278783090709> lyrics - Get the lyrics of any song.
<:hana_arrow:723930278783090709> panel - Display a simple panel with pause, resume, leave and skip command, you can use the commands just reacting.
<:hana_arrow:723930278783090709>np - Shows some informations of the current song.
<:hana_arrow:723930278783090709> queue - Shows the next songs in a embed.
<:hana_arrow:723930278783090709> skip - Skip the current song.
<:hana_arrow:723930278783090709> volume - Change the current volume.
<:hana_arrow:723930278783090709> clear - Clear the queue and leave the current voice channel.
<:hana_arrow:723930278783090709> shuffle - Shuffle the queue.
<:hana_arrow:723930278783090709> remove - Remove a song from the queue.`)
.addField(`Miscellaneous:`,`<:hana_arrow:723930278783090709> prefix - With no args given you can see what is the current prefix in **${message.guild.name}**, with args given you can change the prefix.
<:hana_arrow:723930278783090709> help - Help Command`)
const embedget = new MessageEmbed()
.setTitle('Getting Started')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`
<:hana_set:723934055824883752> **Lets get started playing a music**

<:hana_arrow:723930278783090709> The common prefix is ht!, but you can change using ht!prefix <new prefix>

<:hana_arrow:723930278783090709> **First use (prefix)play and provide an url or a song name, after the bot search, will appear 5 results, use only the number to select a music**
<:hana_arrow:723930278783090709> To add another music you can do the same process.
<:hana_arrow:723930278783090709> To add a playlist to the queue you can put the playlist url (Max songs: 30)

<:hana_arrow:723930278783090709> To skip, pause, resume and leave you can use the panel or the commands leave, resume, pause and skip.

<:hana_arrow:723930278783090709> Hana has miscellaneous commands, like hug or prefix

<:hana_arrow:723930278783090709> Enjoy playing songs with me!`)

const embedfun = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Fun Commands (Miscellaneous Module)')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`
<:hana_arrow:723930278783090709> hug - Hug someone!
<:hana_arrow:723930278783090709> kiss - Kiss someone!
<:hana_arrow:723930278783090709> pat - Cuddle someone!`)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724396071920337007/20200621_195114_0000.png')
.setFooter(`Command executed by ${message.author.username} ◾ ${message.author.id}`, message.client.user.displayAvatarURL)
const embedmisc = new MessageEmbed()
.setTitle('Miscellaneous Commands')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`
<:hana_arrow:723930278783090709> prefix - With no args given you can see what is the current prefix in **${message.guild.name}**, with args given you can change the prefix.
<:hana_arrow:723930278783090709> help - Help Command`)
.setColor('RANDOM')
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724396071920337007/20200621_195114_0000.png')

const dmsend = new MessageEmbed()
.setTitle('Dm sucessfully Sent!')
.setColor('RANDOM')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`<a:hana_sucess:724447546235158628> My commands has successfully sent to your dm. If you didn't receive nothing, maybe your dm is disabled...`)
.setFooter(`Command executed by ${message.author.username} ◾ ${message.author.id}`, message.client.user.displayAvatarURL)
const embedmusic = new MessageEmbed()
 .setTitle('Music Commands')
.setColor('RANDOM')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`
<:hana_arrow:723930278783090709> play - Play a command using an url or a song name, remember to use a number after the bot search 5 results.
<:hana_arrow:723930278783090709> pause - Pause the current song.
<:hana_arrow:723930278783090709> resume - Resume the current song.
<:hana_arrow:723930278783090709> leave - Make the bot leave the current voice channel and stop all songs (clearing the queue).
<:hana_arrow:723930278783090709> loop - Repeat the current song.
<:hana_arrow:723930278783090709> lyrics - Get the lyrics of any song.
<:hana_arrow:723930278783090709> panel - Display a simple panel with pause, resume, leave and skip command, you can use the commands just reacting.
<:hana_arrow:723930278783090709>np - Shows some informations of the current song.
<:hana_arrow:723930278783090709> queue - Shows the next songs in a embed.
<:hana_arrow:723930278783090709> skip - Skip the current song.
<:hana_arrow:723930278783090709> volume - Change the current volume.
<:hana_arrow:723930278783090709> clear - Clear the queue and leave the current voice channel.
<:hana_arrow:723930278783090709> shuffle - Shuffle the queue.
<:hana_arrow:723930278783090709> remove - Remove a song from the queue.`)
.setFooter(`Command executed by ${message.author.username} ◾ ${message.author.id}`, message.client.user.displayAvatarURL)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724398621549920306/20200621_200119_0000.png')
  const path = require('path') 
const embedpause = new MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:mutem:703987260139241572> Commands')
.setThumbnail(`${message.member.user.displayAvatarURL()}`)
.setDescription(`<a:hana_disco:700554191625650190> Hana music Commands (Help Interface)
<:hana_set:723934055824883752> Miscellaneous Commands (Help Interface)
<a:hana_wave:723927662485307474> Get Started (Help Interface)
<:hana_send:723927142001278996> Send a dm with **all** commands
<:Cafun:723928039318225001> Fun commands! (Help Interface)

<a:hana_love:724449381306335283> Upvote me! 

<:hana_arrow:723930278783090709> If you like my commands and want to help me, you can vote using the following sites:

<:hana_bpd:724458241458962545> [Bots para Discord](https://botsparadiscord.com/bots/710137790897062059/votar)
<a:hana_dbl:724459044001022022> **Currently not working** [Discord Bot List](https://top.gg/bot/710137790897062059/vote)
`)
.setFooter(`Command executed by ${message.author.username} ◾ ${message.author.id}`, message.client.user.displayAvatarURL)
.setImage('https://cdn.discordapp.com/attachments/707254966334521364/724405766022365244/20200621_202941_0000.png')
    message.say(embedpause).then(msg => {
msg.react('723934055824883752')
msg.react('723928039318225001')
msg.react('700554191625650190')
msg.react('723927662485307474')
msg.react('723927142001278996')
msg.react('723935536154280026')

        let filtro = (reaction, usuario) => reaction.emoji.name === "hana_set" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 9999})

coletor.on("collect", cp => {
     msg.edit(embedmisc)

})
   let filtro2 = (reaction, usuario) => reaction.emoji.name === "hana_disco" && usuario.id === message.author.id
   let coletor2 = msg.createReactionCollector(filtro2, {max: 9999})

coletor2.on("collect", cp => {
  msg.edit(embedmusic)
})

   let filtro3 = (reaction, usuario) => reaction.emoji.name === "hana_wave" && usuario.id === message.author.id
   let coletor3 = msg.createReactionCollector(filtro3, {max: 9999})

coletor3.on("collect", cp => {
  msg.edit(embedget)
})
   let filtro5 = (reaction, usuario) => reaction.emoji.name === "Cafun" && usuario.id === message.author.id
   let coletor5 = msg.createReactionCollector(filtro5, {max: 9999})

coletor5.on("collect", cp => {
  msg.edit(embedfun)
})

   let filtro6 = (reaction, usuario) => reaction.emoji.name === "hana_back" && usuario.id === message.author.id
   let coletor6 = msg.createReactionCollector(filtro6, {max: 9999})

coletor6.on("collect", cp => {
  msg.edit(embedpause)
})
   let filtro4 = (reaction, usuario) => reaction.emoji.name === "hana_send" && usuario.id === message.author.id
   let coletor4 = msg.createReactionCollector(filtro4, {max: 9999})

coletor4.on("collect", cp => {
 message.guild.members.cache.get(`${message.author.id}`).send(embedmisc)
 message.guild.members.cache.get(`${message.author.id}`).send(embedmusic)
 message.guild.members.cache.get(`${message.author.id}`).send(embedfun)
msg.edit(dmsend)
})
    })
  }
                                
};
