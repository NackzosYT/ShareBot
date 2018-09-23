const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
_السلام عليكم لو ما هنت ابيك تنور استضافتنا بوجودك_

***Welcome To WingsCenter©*** :heart_exclamation: 

‏خدمات الي نقدمهة
**
• قيف اواي بشكل يومي :tada: 
• تدخل15 لك  10 الاف كريدت :sunglasses:
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• شرفنا على الدسكورد https://discord.gg/t3ReEWh
**
                        **#WingsCenter**
**الدعوة لك انت يخوي و لو سمحت ادخل** ...[  ${member}  ]
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
_السلام عليكم لو ما هنت ابيك تنور استضافتنا بوجودك_

***Welcome To WingsCenter©*** :heart_exclamation: 

‏خدمات الي نقدمهة
**
• قيف اواي بشكل يومي :tada: 
• تدخل15 لك  10 الاف كريدت :sunglasses:
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• شرفنا على الدسكورد https://discord.gg/t3ReEWh
**
                        **#WingsCenter**
**الدعوة لك انت يخوي و لو سمحت ادخل** ...[  ${member}  ]
`) 
}).catch(console.error)
})
client.login('NDkzMDEzMDE5NDU5MzIxODc4.DofTuA.6m5JGZpa8DvPUDHdiCsLF8o-ad0');
