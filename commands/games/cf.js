const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'fight',
      aliases: ['ft', 'luta'],
      memberName: 'cock',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }
async run(message, client){
const { prefix } = require('../../config.json')
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
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


const rando_imgs = [
'Live',
'Die',
'Live',
'Die',
'Live',
'Die',
'Live',
'Die',
'Live',
'Die',
'Live',
'Die',
'Live',
'Die',
'Live',
'Die',
'Live',
'Die',
]
if(language === 1){


if(!args[1]){ 
return message.say('Coloque um valor de aposta!')
}
if(args[1].includes('a')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('b')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('c')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('d')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('e')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('f')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('g')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('h')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('i')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('j')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('k')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('l')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('m')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('n')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('o')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('p')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('q')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('r')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('s')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('t')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('u')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('v')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('w')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('x')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('y')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('z')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')

if(args[1].includes('A')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('B')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('C')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('D')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('E')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('F')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('G')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('H')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('I')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('J')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('K')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('L')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('M')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('N')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('O')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('P')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('Q')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('R')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('S')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('T')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('U')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('V')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('W')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('X')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('Y')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('Z')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(']')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('}')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('[')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('{')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('?')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(';')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(':')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('.')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(',')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('<')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('>')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('+')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('=')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('`')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('§')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('º')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('°')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('ª')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('~')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('^')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(`'`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('"')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('!')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('@')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('#')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('$')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('%')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('¨')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('&')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(`*`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('(')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(')')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(`-`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('_')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes(`°`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[1].includes('|')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
.catch(err => {
return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')})

const embederror = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não pode desafiar você mesmo!`)
.setColor('RED')
const embederror5 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não pode me desafiar!`)
.setColor('RED')
let married =   db.fetch(`marry4_${message.author.id}`)

const embederror4 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não tem esta quantia!`)
.setColor('RED')
let credits = db.fetch(`credits_${message.author.id}`)



if(args[1] > credits  ){
return message.channel.send(embederror4)
}
db.set(`cfresult_${message.author.id}`,  `${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`)
let cfresult = await db.fetch(`cfresult_${message.author.id}`)
if(cfresult === null) cfresult = `${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`
if(cfresult === `Die`){
const embeddie = new MessageEmbed()
.setTitle('<:RIP:743113655142449172> | Você perdeu')
.setColor('RED')
db.subtract(`credits_${message.author.id}`, args[1])
return message.say(embeddie)
}
if(cfresult === `Live`){
const embedlive = new MessageEmbed()
.setTitle(':medal: | Você ganhou ' + args[1] + ' créditos!')
.setColor('GREEN')
db.add(`credits_${message.author.id}`, args[1])
return message.say(embedlive)
}
}



if(!args[1]){ 
return message.say('Insert a value')
}
if(args[1].includes('a')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('b')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('c')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('d')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('e')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('f')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('g')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('h')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('i')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('j')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('k')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('l')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('m')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('n')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('o')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('p')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('q')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('r')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('s')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('t')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('u')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('v')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('w')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('x')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('y')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('z')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')

if(args[1].includes('A')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('B')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('C')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('D')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('E')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('F')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('G')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('H')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('I')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('J')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('K')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('L')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('M')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('N')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('O')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('P')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('Q')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('R')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('S')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('T')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('U')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('V')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('W')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('X')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('Y')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('Z')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(']')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('}')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('[')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('{')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('?')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(';')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(':')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('.')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(',')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('<')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('>')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('+')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('=')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('`')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('§')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('º')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('°')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('ª')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('~')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('^')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(`'`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('"')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('!')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('@')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('#')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('$')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('%')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('¨')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('&')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(`*`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('(')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(')')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(`-`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('_')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes(`°`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[1].includes('|')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')

let married =   db.fetch(`marry4_${message.author.id}`)

const embederror4 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You don't have this amount!`)
.setColor('RED')
let credits = db.fetch(`credits_${message.author.id}`)

if(args[2] > credits  ){
return message.channel.send(embederror4)
}
db.set(`cfresult_${message.author.id}`,  `${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`)
let cfresult = await db.fetch(`cfresult_${message.author.id}`)
if(cfresult === null) cfresult = `${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`
if(cfresult === `Die`){
const embeddie = new MessageEmbed()
.setTitle('<:RIP:743113655142449172> | You lost...')
.setColor('RED')
db.subtract(`credits_${message.author.id}`, args[1])
return message.say(embeddie)
}
if(cfresult === `Live`){
const embedlive = new MessageEmbed()
.setTitle(':medal: | You won ' + args[1] + ' credits!')
.setColor('GREEN')
db.add(`credits_${message.author.id}`, args[1])
return message.say(embedlive)
}
}



}

