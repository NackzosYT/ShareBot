const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
_السلام عليكم لو ما هنت ابيك تنور سيرفرنا الجميل بوجودك_

***Welcome To ! Night,Server*** :heart_exclamation: 

‏خدمات الي نقدمهة
**
• قيف اواي بشكل يومي :tada: 
• تدخل15 لك  10 الاف كريدت :sunglasses:
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• شرفنا على الدسكورد 
https://discord.gg/cErWnMq
**
                        **! Night,Server**
**الدعوة لك انت يخوي و لو سمحت ادخل** ...[  ${member}  ]
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
_السلام عليكم لو ما هنت ابيك تنور سيرفرنا الجميل بوجودك_

***Welcome To ! Night,Server*** :heart_exclamation: 

‏خدمات الي نقدمهة
**
• قيف اواي بشكل يومي :tada: 
• تدخل15 لك  10 الاف كريدت :sunglasses:
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• شرفنا على الدسكورد 
https://discord.gg/cErWnMq
** 
                        **! Night,Server**
**الدعوة لك انت يخوي و لو سمحت ادخل** ...[  ${member}  ]
`) 
}).catch(console.error)
})
client.login('Mzc4OTUzMzM0MjUxNDU0NDc1.DpZvMg.DG5oMqMZXpmn_xEb-jz_G6aQcKo');
