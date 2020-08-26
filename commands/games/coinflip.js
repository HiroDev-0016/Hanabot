const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'coinflip',
      memberName: 'coinflip',  
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
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
'Face',
'Crown',
]
if(language === 1){

const rando_imgs = [
'Cara',
'Coroa',
'Cara',
'Coroa',
'Cara',
'Coroa',
'Cara',
'Coroa',
'Cara',
'Coroa',
'Cara',
'Coroa',
'Cara',
'Coroa',
'Cara',
'Coroa',
'Cara',
'Coroa',
]
if(!args[1]){ 
return message.say('<:CofiCoin:737365116118368366> **| '+ rando_imgs[Math.floor(Math.random() * rando_imgs.length)] + '!**')
}
if(args[2].includes('a')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('b')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('c')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('d')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('e')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('f')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('g')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('h')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('i')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('j')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('k')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('l')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('m')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('n')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('o')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('p')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('q')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('r')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('s')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('t')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('u')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('v')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('w')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('x')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('y')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('z')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')

if(args[2].includes('A')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('B')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('C')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('D')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('E')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('F')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('G')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('H')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('I')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('J')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('K')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('L')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('M')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('N')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('O')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('P')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('Q')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('R')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('S')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('T')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('U')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('V')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('W')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('X')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('Y')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('Z')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(']')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('}')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('[')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('{')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('?')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(';')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(':')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('.')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(',')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('<')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('>')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('+')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('=')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('`')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('§')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('º')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('°')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('ª')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('~')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('^')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(`'`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('"')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('!')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('@')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('#')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('$')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('%')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('¨')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('&')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(`*`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('(')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(')')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(`-`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('_')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes(`°`)) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')
if(args[2].includes('|')) return message.say('<a:erro:729089430685614092> ┃ Coloque um numéro válido!')


const user = message.mentions.users.first()
const embederror2 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Mencione alguém para desafiar!`)
.setColor('RED')
if(!user) return message.say(embederror2)
const embederror = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não pode desafiar você mesmo!`)
.setColor('RED')
const embederror5 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não pode me desafiar!`)
.setColor('RED')
if(user.id === message.client.user.id) return message.say(embederror5)
if(message.author.id === user.id) {
return message.say(embederror)
}
let married =   db.fetch(`marry4_${message.author.id}`)
let married3 = db.fetch(`marry4_${user.id}`)
const embederror3 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ ${user.username} não possuí essa quantia!`)
.setColor('RED')
const embederror4 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Você não tem esta quantia!`)
.setColor('RED')
let credits = db.fetch(`credits_${message.author.id}`)
let credits4 = db.fetch(`credits_${user.id}`)
if(credits4 < args[2]  ){
return message.channel.send(embederror3)
}
if(args[2] > credits  ){
return message.channel.send(embederror4)
}
return message.channel.send(`<@${user.id}>, <@${message.author.id}>  para um desafio no cara ou coroa! Se a moeda cair e der **Cara** <@${message.author.id}> ganhará **${args[2]}**, caso a moeda cair e der **Coroa** <@${user.id}> ganhará **${args[2]}**!

<@${user.id}>   Para confirmar reaja no botão ✅ abaixo.`).then(msg => {
msg.react('✅')

let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === user.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", async cp => {
db.set(`coinflip_${message.author.id}`, `${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`)
const coinflip = await db.fetch(`coinflip_${message.author.id}`)
db.subtract(`credits_${message.author.id}`, args[2])
db.subtract(`credits_${user.id}`, args[2])
    msg.delete()
    if(coinflip === `Coroa`) {
db.add(`credits_${user.id}`, args[2])
db.add(`credits_${user.id}`, args[2])
return message.say(`**<:CofiCoin:737365116118368366> | Coroa!
<a:hana_money:737365339104477365> | Parabéns <@${user.id}>! Você ganhou ${args[2]}!**`)

}
    if(coinflip === `Cara`) {
db.add(`credits_${message.author.id}`, args[2])
db.add(`credits_${message.author.id}`, args[2])
return message.say(`**<:CofiCoin:737365116118368366> | Cara!
<a:hana_money:737365339104477365> | Parabéns <@${message.author.id}>! Você ganhou ${args[2]}!**`)

}
})
})
}




if(!args[1]){ 
return message.say('<:coin:730807208778006618> **| '+ rando_imgs[Math.floor(Math.random() * rando_imgs.length)] + '!**')
}
if(args[2].includes('a')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('b')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('c')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('d')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('e')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('f')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('g')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('h')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('i')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('j')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('k')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('l')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('m')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('n')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('o')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('p')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('q')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('r')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('s')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('t')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('u')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('v')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('w')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('x')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('y')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('z')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')

if(args[2].includes('A')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('B')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('C')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('D')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('E')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('F')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('G')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('H')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('I')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('J')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('K')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('L')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('M')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('N')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('O')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('P')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('Q')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('R')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('S')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('T')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('U')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('V')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('W')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('X')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('Y')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('Z')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(']')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('}')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('[')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('{')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('?')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(';')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(':')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('.')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(',')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('<')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('>')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('+')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('=')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('`')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('§')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('º')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('°')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('ª')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('~')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('^')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(`'`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('"')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('!')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('@')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('#')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('$')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('%')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('¨')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('&')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(`*`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('(')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(')')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(`-`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('_')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('/')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes(`°`)) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')
if(args[2].includes('|')) return message.say('<a:erro:729089430685614092> ┃ Insert a valid number!')

const user = message.mentions.users.first()
const embederror2 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ Mention someone to make a bet!`)
.setColor('RED')
if(!user) return message.say(embederror2)
const embederror = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You cannot bet yourself!`)
.setColor('RED')
const embederror5 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You cannot bet me!`)
.setColor('RED')
if(user.id === message.client.user.id) return message.say(embederror5)
if(message.author.id === user.id) {
return message.say(embederror)
}
let married =   db.fetch(`marry4_${message.author.id}`)
let married3 = db.fetch(`marry4_${user.id}`)
const embederror3 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ ${user.username} doesn't have this amount!`)
.setColor('RED')
const embederror4 = new MessageEmbed()
.setTitle(`<a:erro:729089430685614092> ┃ You don't have this amount!`)
.setColor('RED')
let credits = db.fetch(`credits_${message.author.id}`)
let credits4 = db.fetch(`credits_${user.id}`)
if(credits4 < args[2]  ){
return message.channel.send(embederror3)
}
if(args[2] > credits  ){
return message.channel.send(embederror4)
}
message.channel.send(`<@${message.author.id}> made a coinflip challenge to you! Please <@${user.id}>, react on ✅ to join the bet, the bet is ${args[2]} credits.

If the coin fall and got face, <@${message.author.id}> won ${args[2]} credits, if the coin fall and got crown, <@${user.id}> won ${args[2]} credits`).then(msg => {
msg.react('✅')

let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === user.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", async cp => {
db.set(`coinflip_${message.author.id}`, `${rando_imgs[Math.floor(Math.random() * rando_imgs.length)]}`)
const coinflip = await db.fetch(`coinflip_${message.author.id}`)
db.subtract(`credits_${message.author.id}`, args[2])
db.subtract(`credits_${user.id}`, args[2])
    msg.delete()
    if(coinflip === `Crown`) {
db.add(`credits_${user.id}`, args[2])
db.add(`credits_${user.id}`, args[2])
return message.say(`<:CofiCoin:737365116118368366> **| Crown!
<a:hana_money:737365339104477365> | Congratulations <@${user.id}>! You won ${args[2]} credits!**`)

}
    if(coinflip === `Face`) {
db.add(`credits_${message.author.id}`, args[2])
db.add(`credits_${message.author.id}`, args[2])
return message.say(`<:CofiCoin:737365116118368366> **| Face!
<a:hana_money:737365339104477365> | Congratulations <@${message.author.id}>! You won ${args[2]} credits!**`)

}
})
})

}}
