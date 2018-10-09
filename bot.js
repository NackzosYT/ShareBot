const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
• حياك الله ي عيني بـ سيرفرنا وشرفنا:hearts: ..
• تدخل 5  لك  10 الاف كريدت  :heartpulse: 
• فعاليات يوميه وبشكل مستمر :rose:

•『 https://discord.gg/cErWnMq 』•

 ...[ ${member} ]**
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
• حياك الله ي عيني بـ سيرفرنا وشرفنا:hearts: ..
• تدخل 5  لك  10 الاف كريدت  :heartpulse: 
• فعاليات يوميه وبشكل مستمر :rose:

•『 https://discord.gg/cErWnMq 』•

 ...[ ${member} ]**
`) 
}).catch(console.error)
})
client.login('Mzc4OTUzMzM0MjUxNDU0NDc1.Dp5pyQ.RTH8bv8qnFy0O12Zia2m8MwPGBA');
