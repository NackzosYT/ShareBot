const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
clinet.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
هلا وسهلا ياقلبي :hear_no_evil: 

هذا سيرفر للالعاب والسوالف وغيرها :heart: 
حتا نوزع جوائز وفي فعاليات يوميه
لاتفوت كل هذا ادخل السيرفر
:boxing_glove: 
**
احنا ما ندعو الا الراقين مثلك :flower_playing_cards: 
[ ${member}  ] .......
***{ https://discord.gg/VTemcwg }***`) 
}).catch(console.error)
})








client.login(process.env.BOT_TOKEN);
