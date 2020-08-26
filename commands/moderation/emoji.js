 const { Command } = require('discord.js-commando');
const { MessageEmbed, Util } = require('discord.js');
var emblemaserver = '❎'
var marry = "Alone :("
var emblemapartner = '<:hana_partner:721021327061942272>'
var emblemadev = '<:hana_staff:721018953266364547>'
var apelido = 'Not Set'
const emblemaowner = '<:hana_developer:721019012091346945>';
const Discord = require('discord.js')
const client = new Discord.Client()
const bughunter = '<:bughunter:721019880760934400>'
const verified = '<:hana_verifieduser:721019468515377246>'
const db = require('quick.db')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'emoji',
      memberName: 'emoji',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message) {
const language = await db.fetch(`language_${message.guild.id}`)
let bl3 = await db.fetch(`blist_${message.author.id}`)
let blreasom = await db.fetch(`blreason_${message.author.id}`)
if(bl3 === '<:enabled:730821706347708437>')
if(language === 1) {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , Você está banido!**
:notepad_spiral: **| Motivo:** \`${blreasom}\``)
} else {
return message.say(`
<:blacklisted:729074968104534116> **| <@${message.author.id}> , You are banned!!**
:notepad_spiral: **| Reason:** \`${blreasom}\``)
}
const main = db.fetch(`main_${message.client.user.id}`)
if(main === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, all my commands is in maintence!**`)}
const main2 = db.fetch(`mainfun_${message.client.user.id}`)
if(main2 === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, the module \`FUN\` is in maintence!**`)}

db.add(`cu_${message.author.id}`, 1)
const { prefix } = require('../../config.json')


 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const emoji = args[1]
if(!emoji) return message.say('Coloque um emoji!')

let custom = Util.parseEmoji(emoji)
if(custom.id) {
let link = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`
return message.channel.send({files: [link]});
}
}
}