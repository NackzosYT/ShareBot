const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
_السلام عليكم لو ما هنت ابيك تنور استضافتنا بوجودك_

***Welcome To WingsCommunity©*** :heart_exclamation: 

‏خدمات الي نقدمهة
**
• قيف اواي بشكل يومي :tada: 
• تدخل15 لك  10 الاف كريدت :sunglasses:
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• شرفنا على الدسكورد 
https://discord.gg/d3B3ZRQ
**
                        **#WingsCommunity©**
**الدعوة لك انت يخوي و لو سمحت ادخل** ...[  ${member}  ]
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
_السلام عليكم لو ما هنت ابيك تنور استضافتنا بوجودك_

***Welcome To WingsCommunity©*** :heart_exclamation: 

‏خدمات الي نقدمهة
**
• قيف اواي بشكل يومي :tada: 
• تدخل15 لك  10 الاف كريدت :sunglasses:
• بيع احدث انواع الريجيديت :smiley: 
• اسعار جبارة !! :money_with_wings: 
• واخيرا حييييياكم واكيد وجودكم هو اللي بيدعمنا وراح نكون الافضل.
• شرفنا على الدسكورد 
https://discord.gg/d3B3ZRQ
**
                        **#WingsCommunity©**
**الدعوة لك انت يخوي و لو سمحت ادخل** ...[  ${member}  ]
`) 
}).catch(console.error)
})
client.login('NDg3NDE3NTA1Njc0MTY2Mjcy.Do1vLQ.DhYYxTIOFny2dwNHpFXpnVPu-Q4');
