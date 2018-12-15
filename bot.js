const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**نضام انفايت خطير :leaves: 
- 7 iNvite
- 30k  :credit_card: 
- 10 iNvite
- 70k  :credit_card: 
- 20 iNvite
- 100k  :credit_card: 
https://discord.gg/BWpZppJ
 [ ${member}  ] :rose: ...
**`) 
}).catch(console.error)
})















A7MD.login('NDk5NTUzNDQ0MTgxMzExNDk4.DvZ-pw.Ula78O1tturaG0zsHpWdOfvaRnU');
