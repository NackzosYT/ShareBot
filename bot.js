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















A7MD.login('NTAyOTE4NTg2NTI4OTU2NDE2.DvZ4Xg.ctWiApCtXbQAeZe_rqWsCv3MxK8');
