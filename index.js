//UPTIME CALLBACK
const http = require('http');
const express = require('express');
const app = express();
var server = http.createServer(app);
const Discord = require('discord.js');
const bot = new Discord.Client();
app.get('/', (request, response) => {
  console.log(`Ping Received.`);
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Olá!');
});

const listener = server.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ` + listener.address().port);
});

const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');

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
    prefix: true,
    commandState: false,
    unknownCommand: false,
    help: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');
  setInterval(async () => {
    let textList = [
      `💠 ${client.guilds.cache.size} guilds!`,
      `📣 Pro Tip: Use ping, prefix and other commands in my dm!`,
      `👥 ${client.users.cache.size} users!`,
      '🕘 Running in 1.0.6 Beta!',
      `🎨 Profile picture made by NinguémEspecial78#0933!`
    ];  
    var text = textList[Math.floor(Math.random() * textList.length)];
    client.user.setActivity(text, { 
            name: 'Watching my guilds!',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"});
  }, 15000); // milliseconds
});


client.login(token);
