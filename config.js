const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '255734980103'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'lazaromtaju@gmail.com'
global.github = 'https://github.com/Lazack28/Lazack-md'
global.location = 'Dodoma Tanzania'
global.gurl = 'https://instagram.com/Lazack_28/' // add your username
global.sudo = process.env.SUDO || "18762306464"
global.devs = '18762306464'
global.website = 'https://github.com/Lazack28/Lazack-md' //wa.me/+255734980103
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/2cbb7abbf988bf9e7a088.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0V1KzVkUGpoU09LbDJ6ek5qVDRQSUtycWZnS3lXb2MxM2pYMys2eElWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNThxTFJSTVVtcXduWDd2NHdkSnprUE1ybGJEM0hoTG92QUtsYnl4NkJ6VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T2JiSmlWN3dKaTVFenlOR082dzl0eDUrdUNhYUlaMDN1S1NhcmJqdEUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0dFBVTm9ubmg1QUJ3TTJzUHJRSHo4WWU2WE9URGMrWjVESXJTcDRGL1VBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDQ0pvNFdXOFY5dW5yOFZiTk9VSjdRU1IrZGpweFdLOVpLM3FvWHExbVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGWjk3TW55bzB6WUdPcmN1aURGVUFIdEZzaERXZ3c0VlNrSnJ1N2R6WG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxTUDVQa3FsbFUxMU5ZQm80SndCdEJFb0hYYm1iS3ZXdUd3QnhuUGgwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzN6K0FmVGlvSFBhaXlZaGRVVlp2bng0Nm51dVBZeTdkVDYrclo0SUhDWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVNUlZCbEJVT1lMZlpyUXZnYkVUeFpmOVp3Z25SdDJhbkZ1dFc1US94M3MzSkpBSGpUVWM3UGFmT05XajdMQWtITlJ5MnJ4UnVuTTBtV1RZYmxocEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJSY01VYVFPVi9DOGprTTVoNTMvY2dBVTI4YU8yUnlhR1lyVmZMclNWb2xNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJub3I3MVBzRlRMS3YtUzFUU01yRHZRIiwicGhvbmVJZCI6ImNkYjFlOWRjLWU1NzMtNGYyMS05NjQ5LTBmYmUzZjNlODU0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5bC94SVJ2dmtNOVVrZk5xWVhBT2NkdVFQaTg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpzQjBib2R1cmc2cmNkV251MkhuTXljQXBFST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xXL3o5d0ZFUERxMnJRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJvTUdORVFJNFc2aTBqUG5rT1V2REUwcE9OZTZENTRrNC9ENTN4bVNsaWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhkR2plSUNVdEc4TVBrem9GVk1WOG1hWjJpcll2TVBOSlF5YkZaMUhtcFNqN3ppRkMwT1pWc3Q0VVQ5RFdrTnhTbndMQWdTOTlheS9pYis0NDdUMUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTQXVtb1ZLZW9vUDFoZ3BiTGtjNlUxVm90bGRUaDdqNWJscGtqV0E5dC91Z3V3Z0lsZ2FkWEFiNTViSEx6QjlGMVFUcG9QV0hFRXhDbGowY1NmMlBEUT09In0sIm1lIjp7ImlkIjoiMTg3NjIzMDY0NjQ6MTBAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTg3NjIzMDY0NjQ6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWFEQmpSRUNPRnVvdEl6NTVEbEx3eE5LVGpYdWcrZUpPUHcrZDhaa3BZbyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTE1Mjg5NH0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'LAZACK BOT',
  packname:  process.env.PACK_NAME || 'CREDIT TO LAZACK',
  
  botname:   process.env.BOT_NAME === undefined ? "Patrickbot" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Shaun' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '-' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? true : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•credit to Lazack28•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'LAZACK',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
