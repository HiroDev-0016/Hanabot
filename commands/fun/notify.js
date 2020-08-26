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
      name: 'notify',
      memberName: 'notify',
      group: 'misc',
      description: 'Pause the current playing song',
      guildOnly: true,
     hidden: true
    });
  }

async run(message, client) {
const nomny = await db.fetch(`nomny_${message.author.id}`)
const roler = await db.fetch(`roler_${message.author.id}`)
const laguage = await db.fetch(`language_${message.guild.id}`)
if(message.guild.id != '718618290989170778') { 
if(laguage === 1){
return message.say('Você não pode usar esse comando aqui!')}
return message.say('You cant use this command here!')
}
if(roler === 1) {
db.set(`roler_${message.author.id}`, 0)
message.guild.members.cache.get(`${message.author.id}`).roles.remove('734186141753802832')
return message.say('<:blob_ping:740592087283662959> **| Cargo removido! Você não será mais notificado de minhas updates**')
}
if(nomny === 1){
message.guild.members.cache.get(`${message.author.id}`).roles.add('734186141753802832')
db.set(`roler_${message.author.id}`, 1)
return message.say('<:blob_ping:740592087283662959> **| Cargo adicionado! Agora você será notificado de minhas updates**')
}

message.say('<:blob_ping:740592087283662959> **| Cargo adicionado! Agora você será notificado de minhas updates \n<a:hana_money:737365339104477365> | Você ganhou 5000 créditos!**')
db.add(`credits_${message.author.id}`, 5000)
message.guild.members.cache.get(`${message.author.id}`).roles.add('734186141753802832')
db.set(`nomny_${message.author.id}`, 1)
db.set(`roler_${message.author.id}`, 1)
}
}