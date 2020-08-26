 const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
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
      name: 'slowmode',
      aliases: ['sm', 'cooldown'],
      memberName: 'sm',
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

if(language === 1){
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
   if(!message.member.hasPermission(['ADMINISTRATOR', 'MANAGE_CHANNELS'])) return message.say('Você não tem as permissões necessárias para usar esse comando! Você precisa das permissões `GERENCIAR CANAIS` ou `ADMINISTRADOR` para executar esse comando')
    if (!args[1])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode too!`
      );
    if (isNaN(args[1])) return message.channel.send(`Isso não é um número!`);
    let reason = args.slice(2).join(" ")
   let reason2 = args.slice(2).join(" ")
    if (!reason) {
      reason2 = 'Motivo não inserido'
      reason = 'Motivo não inserido'
    }
    message.channel.setRateLimitPerUser(args[1], 'Moderador responsável: ' + message.author.tag + '\n' + reason);
    return message.channel.send(
      `Slowmode do canal ${message.channel.id} setadao para **${args[1]}**s com o motivo: **${reason2}**`
    );
}

 const args = message.content.slice(prefix.length).trim().split(/ +/g);
if(!args[1]) return message.say('Please provide a message!')
if(args.slice(1).join(" ").length < 80) db.set(`about_${message.author.id}`, args.slice(1).join(" "))
if(args.slice(1).join(" ").length < 80) {
 return message.channel.send(`Sucessfully changed your about me to \`${args.slice(1).join(" ")}\``)}
message.channel.send(`:x: Your about me contains more than 80 caracthers!`)
}
}