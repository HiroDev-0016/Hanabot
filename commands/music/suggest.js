const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('../../config.json')
const { CommandoClient } = require('discord.js-commando')
module.exports = class PauseCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'suggest',
      aliases: ['sgt', 'sg'],
      memberName: 'suggest',
      group: 'hana',
      description: 'Send a suggestion to our support server',
      guildOnly: false
    });
  }

  run(message) {
const guild = client.guilds.cache.get('718618290989170778')
const embederror = new MessageEmbed()
.setTitle(`Error`)
.setDescription(`This command can only be used in [Hana Support](https://discord.gg/V6qNyxd)`)
.setColor('RED')
if(message.guild.id != '718618290989170778') {
return message.say(embederror)
}
const args = message.content.slice(prefix.length).trim().split(/ +/g);

const embedpause = new MessageEmbed()
.setColor('RANDOM')
.setTitle('Suggestion sent to Hana Support!')
.setDescription(`
From: ${message.author.tag}
Suggestion: ${args.slice(1).join(" ")}`)
const ownerid = '700805591094001692'


    message.say(embedpause)



const canal = client.channels.cache.get('668805316720197643');

const embedapprove = new MessageEmbed()
.setTitle('Suggestion Approved!')
.setDescription('Your suggestion has been approved by Hiro 🍀#0016')
.setColor('GREEN')

const embeddeny = new MessageEmbed()
.setTitle('Suggestion Denied...')
.setDescription('Your suggestion has been denied by Hiro 🍀#0016')
.setColor('RED')

const embedserver = new MessageEmbed()
.setTitle('New Suggestion!')
.setDescription(`
From: ${message.author.tag}
Suggestion: ${args.slice(1).join(" ")}`)
message.guild.channels.cache.get("718619399619215440").send(embedserver).then(msg => {
msg.react('✅')
msg.react('❌')

            let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.guild.owner.id;
            let coletor = msg.createReactionCollector(filtro, {max: 1})
            coletor.on("collect", cp => {
               message.channel.send(`Suggestion by ${message.author.tag} has been denied by Hiro 🍀#0016`)
               message.guild.channels.cache.get("718619399619215440").send(`Suggestion by <@${message.author.id}> has been denied by <@${message.guild.owner.id}>`)
            
                


                     
              
            })
            let filtro2 = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.guild.owner.id;
            let coletor2 = msg.createReactionCollector(filtro2, {max: 1})
            coletor2.on("collect", cp =>{
                            embedserver.setColor('#ff0000')
               message.channel.send(`Suggestion by ${message.author.tag} has been approved by Hiro 🍀#0016`)
               message.guild.channels.cache.get("718619399619215440").send(`Suggestion by <@${message.author.id}> has been approved by <@${message.guild.owner.id}>`)
            })
})
  

  }                          

}

