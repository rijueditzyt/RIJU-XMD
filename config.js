const apiKeys = require('./settings/api-keys');
const apis = require('./settings/apis');
const messages = require('./settings/messages');
const social = require('./settings/social');
const templates = require('./settings/templates');

module.exports = {
  ownerNumber: ["919332446037"],
  ownerName: ["RIJU"],
  ownerJids: [],
  sudoNumbers: [],
  sudoJids: [],

  botName: "𝗥𝗜𝗝𝗨-𝗠𝗗 𝗕𝗢𝗧",
  version: "3.0.42",
  prefix: ".",
  sessionName: "session",
  sessionID: process.env.SESSION_ID || '',
  newsletterJid: "120363424623123135@newsletter",
  cidJsonUrl: "https://proboy.vercel.app/bot/cid.json",
  updateZipUrl: "https://github.com/proboy315/ProBoy-MD/archive/refs/heads/main.zip",

  packname: "RIJU-MD",
  author: "INSTA: midnight.riju",

  selfMode: false,
  autoRead: false,
  autoTyping: true,
  autoBio: false,
  autoSticker: false,
  autoReact: false,
  autoReactMode: 'bot',
  autoDownload: false,

  defaultGroupSettings: {
    antilink: false,
    antilinkAction: 'delete',
    antilinkWhitelist: [],
    antitag: false,
    antitagAction: 'delete',
    antiall: false,
    antiviewonce: false,
    antibot: false,
    anticall: false,
    antigroupmention: false,
    antigroupmentionAction: 'delete',
    welcome: false,
    welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗥𝗜𝗝𝗨-𝗠𝗗 𝗕𝗢𝗧*',
    goodbye: false,
    goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
    antiSpam: false,
    antiSpamAction: 'warn',
    antiSpamLimit: 6,
    antiSpamWindowSec: 8,
    antidelete: true,
    antifake: false,
    antifakeAllowedCodes: [],
    antibadword: false,
    antibadwordAction: 'warn',
    badwords: [],
    nsfw: false,
    detect: false,
    chatbot: false,
    autosticker: false
  },

  antideleteSettings: {
    enabled: true,
    dest: 'chat',
    statusDest: 'owner',
    bannerImageUrl: 'https://files.catbox.moe/964gzk.png'
  },

  statusSettings: {
    autoView: false,
    autoLike: false,
    likeEmoji: '💚'
  },

  apiKeys,
  apis,
  templates,
  messages,
  social,

  timezone: 'Asia/Karachi',
  maxWarnings: 3
};
