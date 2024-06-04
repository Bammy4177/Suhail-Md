const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="blockstroye123@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+2348098676994" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,+2348055886938";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348055886938";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_45_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NixcbiAgICAgICAgNDEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgODksXG4gICAgICAgIDk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDgzLFxuICAgICAgICA4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0LFxuICAgICAgICA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaDF5a2N5VzdMbmlhVmEvVkpLa1I1aG0xN085NFppSjN4SWx2MTBOWmxhaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDU1ODg2OTM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUY3NjUyODMzNDA4NjY1MjI5MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc0NTgyODVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTkFNYWdEMUhTOS01RU50dmZZVUpHUVwiLFxuICBcInBob25lSWRcIjogXCI4MWFlNDhlYi02ZjkwLTQ4MTYtOGRiYi0xZDZmYWU5MDRhMzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgOTcsXG4gICAgICAxNTgsXG4gICAgICAxMTQsXG4gICAgICA4MCxcbiAgICAgIDI0MSxcbiAgICAgIDY5LFxuICAgICAgMTU5LFxuICAgICAgNjcsXG4gICAgICA0MCxcbiAgICAgIDIsXG4gICAgICAyNDcsXG4gICAgICAyMixcbiAgICAgIDIxLFxuICAgICAgODMsXG4gICAgICAxOTIsXG4gICAgICAyMyxcbiAgICAgIDYyLFxuICAgICAgMjUwLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDE3NCxcbiAgICAgIDQ1LFxuICAgICAgMjM3LFxuICAgICAgMTE0LFxuICAgICAgMCxcbiAgICAgIDc1LFxuICAgICAgMjI0LFxuICAgICAgMjUzLFxuICAgICAgMjAwLFxuICAgICAgMTk2LFxuICAgICAgMjEwLFxuICAgICAgMTk3LFxuICAgICAgMTkwLFxuICAgICAgMTI4LFxuICAgICAgNjgsXG4gICAgICAxOTYsXG4gICAgICAyMDksXG4gICAgICAyNTEsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyVFk1RjVNTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA1NTg4NjkzODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjQzNjA5NDU4NTI1NDQ6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCYW1teSBDcnlwdG9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcUU0c2dJRU9HcStiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm1ZSVZTK1Z3Q1psNHJ0TnBidks5NEZWVndmNUtYUnE3dTVnRWs4RHNtVDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUGFTek9jSnRnMEtYd1RXeUZnU2xaQSt6SHhaYk1PWHpaR20vK2YzR0FHNktOMG1nSlc1a3BvRUJNUUdKdEdqVUJsbHJQRG5HNkE0bTE1bzRhTGpqZ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFlhZDJWaWFublhkRkZ4QmdEMFFFbkpET3Ivcys5RklCeXlNVzJnMkUvdTlrQysxUks1c0dpLzl0MFNwNjJMZDFEbU9JbHJRaFdSbGtHNUhkbTVIREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA1NTg4NjkzODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0NTgyNzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNeHlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU14eS5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || ".", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "bammy tech",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "bammy tech",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
