const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
  ***.#WeeeelcomeTo__Blood__.*** :heart_exclamation: 
 **__خدماتنا في السيرفر___** :heart_eyes: 
**
- لدينا نضام دعوات اسطوري :wine_glass: 
**
.#5Invites,15k :beers: 
.#10Invites,23k :beers: 
.#15Invites,30k :beers: 
.#20Invites,45k :beers: 
**
- ويوجد ليدنا متاجر :shopping_cart: 
بيع توكنات ديسكورد
وماينكرافت واشياء اخرى

- وفعاليات وقيفاوايات يوميا :gift: 
**
:honey_pot:  ...واخيرا تنورنا ياعسل ${member}
https://discord.gg/2kc5CPD
`)
}).catch(console.error)

})
 







client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
  ***.#WeeeelcomeTo__Blood__.*** :heart_exclamation: 
 **__خدماتنا في السيرفر___** :heart_eyes: 
**
- لدينا نضام دعوات اسطوري :wine_glass: 
**
.#5Invites,15k :beers: 
.#10Invites,23k :beers: 
.#15Invites,30k :beers: 
.#20Invites,45k :beers: 
**
- ويوجد ليدنا متاجر :shopping_cart: 
بيع توكنات ديسكورد
وماينكرافت واشياء اخرى

- وفعاليات وقيفاوايات يوميا :gift: 
**
:honey_pot:  ...واخيرا تنورنا ياعسل ${member}
https://discord.gg/2kc5CPD
`) 
}).catch(console.error)
})






client.login('NTAyODQwODA3MzM4OTM0Mjc2.DtCz5Q.faKYb8yw2tARioQwV0q5pvqlGhk');
