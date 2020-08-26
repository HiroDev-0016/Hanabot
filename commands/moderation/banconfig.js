const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
module.exports = class SkipAllCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'banconfig',
      memberName: 'banconfig',  
      group: 'music',
      description: 'Clear **all** musics from the queue',
      guildOnly: true
    });
  }
async run(message, client){
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
const main2 = db.fetch(`mainmod_${message.client.user.id}`)
if(main2 === 1){
return message.say(`**<a:erro:729089430685614092> | Sorry for the incovenience, the module \`MODERATION\` is in maintence!**`)}
const del = await db.fetch(`del_${message.guild.id}`)
if(language === 1){
if(del === 1) {
message.delete()
.catch(err => {
console.log('Can\'t delete this command...')})}

const { prefix } = require('../../config.json')
    let args = message.content.substring(prefix.length).split(" ");

if(!args[1]) return message.say('<a:erro:729089430685614092> **| Provide an GIF URL!**')
if(args[1].includes('.gif')||args[1].includes('.jpg') || args[1].includes('.png') || args[1].includes('.jpeg') || args[0].includes('.jpg') || args[0].includes('.png')){
db.set(`configban_${message.author.id}`, 1)
db.set(`urlban_${message.author.id}`, args[1])
db.set(`banconf_${message.author.id}`, 1)
return message.say(`<a:notify:737371231606800464> ** | <@${message.author.id}>
<a:hana_certo:699014500594090115> | Imagem setada com sucesso!**
${args[1]}`).then(msg => {
msg.delete({timeout: 10000})
})

} else {
return message.say('Um URL inválido foi colocado, lembre de que o url deve ter o final .png, .jpg ou .jpeg')
}
 

}

if(del === 1) {
message.delete()
.catch(err => {
console.log('Can\'t delete this command...')})}
const { prefix } = require('../../config.json')
    let args = message.content.substring(prefix.length).split(" ");

if(!args[1]) return message.say('<a:erro:729089430685614092> **| Provide an GIF URL!**')
if(args[1].includes('.gif')||args[1].includes('.jpg') || args[1].includes('.png') || args[1].includes('.jpeg') || args[0].includes('.jpg') || args[0].includes('.png')){
message.say(`<a:notify:737371231606800464> ** | <@${message.author.id}>
<a:hana_certo:699014500594090115> **|** Image set with success! ${args[1]}`).then(msg => {
msg.delete({timeout: 10000})
})
db.set(`configban_${message.author.id}`, 1)
db.set(`urlban_${message.author.id}`, args[1])
db.set(`banconf_${message.author.id}`, 1)
}
}}