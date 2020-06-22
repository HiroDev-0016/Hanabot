const { Command } = require('discord.js-commando');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
//MADE BY CTK
module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pat',
      group: 'misc',
      memberName: 'pat',
      guildOnly: true,
      description: 'Cuddle someone!'
    });
  }

  run(message) {

const rando_imgs = [
'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif',
'https://i.imgur.com/4ssddEQ.gif',
'https://66.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gif',
'https://i.imgur.com/UWbKpx8.gif',
'https://giffiles.alphacoders.com/187/187369.gif',
'https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif',
'https://data.whicdn.com/images/295195659/original.gif',
'https://66.media.tumblr.com/6f791348bd5e79847586821761dbaea1/tumblr_migh1bc0Av1rikjd2o1_500.gif',
'https://i.pinimg.com/originals/c2/23/2a/c2232aec426d8b5e85e026cbca410463.gif',
'https://i.makeagif.com/media/6-04-2014/1m4gQJ.gif',
'https://i.pinimg.com/originals/a7/50/46/a750464c6f52465f3101de076f117e19.gif',
'https://i.imgur.com/wz8ilbW.gif',
'https://media1.tenor.com/images/fb3e0b0f18188450bfded4a585de2b90/tenor.gif',
'https://66.media.tumblr.com/540bd810149ef1408cd56efbe7ecce90/tumblr_ph864nT3VP1tx45yjo1_400.gif',
]

const user = message.mentions.users.first()
  const embedhug = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Pat')
  .setDescription(`<:Cafun:723928039318225001> <@${message.author.id}> patted the head of <@${user.id}> <:Cafun:723928039318225001>`)
  .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
  .setFooter('Return the pat clicking on 🔃!')
  

  const embedhug2 = new MessageEmbed()
  .setColor('RANDOM')
  .setTitle('Hug')
  .setDescription(`<@${user.id}> patted the head of <@${message.author.id}>`)
  .setImage(rando_imgs[Math.floor(Math.random() * rando_imgs.length)])
  .setFooter(`Return the pat clicking on 🔃!`)
message.channel.send(`<@${message.author.id}>`, embedhug).then(msg =>{
msg.react('🔃')

let filtro = (reaction, usuario) => reaction.emoji.name === "🔃" && usuario.id === user.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})

coletor.on("collect", cp => {
    msg.edit(embedhug2)
    return;
});
})
}
}