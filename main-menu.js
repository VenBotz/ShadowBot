/**
* create by hyzer official
* g usah di hapus anjg, gw cape sumpah
* sc free, bayar pake subs aja udh good
* jika ada bug/mau request fitur
* chat me on wa https://wa.me/6287892711054
* follow my instagram @zexyds_
**/

//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')

//━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before:`Hai, %name!
 ⬣ ❯━━━━━━━━━━━━━━━━━❮ ⬣
 ╿                *${global.namebot}* 
 │    
 ┝╾⬣ USER          
⫹⫺ Nama %name 
⫹⫺ Tersisa *%limit Limit*
⫹⫺ Role *%role*
⫹⫺ Level *%level (%exp / %maxexp)*
⫹⫺ %totalexp XP Secara Total
 ┝╾⬣ TIME
⫹⫺ Tanggal: *%week %weton, %date*
⫹⫺ Islam: *%dateIslamic*
⫹⫺ Waktu: *%time*
 ┝╾⬣ SPEC
⫹⫺ Uptime: *%uptime (%muptime)*
⫹⫺ Database: %rtotalreg dari %totalreg
⫹⫺ Ram : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
%readmore`.trimStart(), 
  header: '╭═══[ %category ]════···',
  body: '┢⎔ %cmd %islimit %isPremium',
  footer: '┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╾•\n', 
  after: `\n        ▌│█║▌║▌║║▌║▌║█│▌█ ▌\n               %week, %date.
     %me
`,
}

//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'asupan', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'info', 'internet', 'islam', 'kerang', 'maker', 'owner', 'suara', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'tools', 'text', 'nsfw', 'asupan', 'random', 'textpro', 'photooxy']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'MENU UTAMA',
  'advanced': 'ADVANCED',
  'asupan': 'ASUPAN',
  'absen': 'MENU ABSEN',
  'anime': 'MENU ANIME',
  'sticker': 'MENU CONVERT',
  'downloader': 'MENU DOWNLOADER',
  'xp': 'MENU EXP',
  'fun': 'MENU FUN',
  'game': 'MENU GAME',
  'github': 'MENU GITHUB',
  'group': 'MENU GROUP',
  'image': 'MENU IMAGE',
  'info': 'MENU INFO',
  'internet': 'INTERNET',
  'islam' : 'MENU ISLAMI',
  'kerang': 'MENU KERANG',
  'maker': 'MENU MAKER',
  'owner': 'MENU OWNER',
  'Pengubah Suara': 'PENGUBAH SUARA',
  'premium': 'PREMIUM MENU',
  'quotes' : 'MENU QUOTES',
  'rpg': 'MENU RPG',
  'stalk': 'MENU STALK',
  'shortlink': 'SHORT LINK',
  'tools': 'MENU TOOLS',
  'vote': 'MENU VOTING',
  'nsfw': 'NSFW MENU', 
  'asupan': 'ASUPAN MENU', 
  'random': 'RANDOM MENU', 
  'textpro': 'TEXT PRO MENU', 
  'photooxy': 'PHOTO OXY MENU', 
  }
  if (teks == 'absen') tags = {
    'absen': 'MENU ABSEN',
    'vote': 'MENU VOTING',
  }
  if (teks == 'anime') tags = {
  'anime': 'MENU ANIME',
  }
  if (teks == 'asupan') tags = {
  'asupan': 'MENU ASUPAN',
  }
  if (teks == 'sticker') tags = {
  'sticker': 'MENU CONVERT',
  }
  if (teks == 'downloader') tags = {
  'downloader': 'MENU DOWNLOADER',
  }
  if (teks == 'xp') tags = {
  'xp': 'MENU EXP',
  }
  if (teks == 'fun') tags = {
  'fun': 'MENU FUN',
  }
  if (teks == 'game') tags = {
  'game': 'MENU GAME',
  }
  if (teks == 'github') tags = {
  'github': 'MENU GITHUB',
  }
  if (teks == 'group') tags = {
  'group': 'MENU GROUP',
  }
  if (teks == 'image') tags = {
  'image': 'MENU IMAGE',
  }
  if (teks == 'info') tags = {
  'info': 'MENU INFO',
  }
  if (teks == 'internet') tags = {
  'internet': 'INTERNET',
  }
  if (teks == 'islam') tags = {
  'islam' : 'MENU ISLAMI',
  }
  if (teks == 'kerang') tags = {
  'kerang': 'MENU KERANG',
  }
  if (teks == 'maker') tags = {
  'maker': 'MENU MAKER',
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
  if (teks == 'suara') tags = {
  'Pengubah Suara': 'PENGUBAH SUARA',
  }
  if (teks == 'text') tags = {
  'text': 'MAKER TEXT',
  }
  if (teks == 'premium') tags = {
  'premium': 'PREMIUM MENU',
  }
  if (teks == 'quotes') tags = {
  'quotes' : 'MENU QUOTES',
  }
  if (teks == 'rpg') tags = {
  'rpg': 'MENU RPG',
  }
  if (teks == 'stalk') tags = {
  'stalk': 'MENU STALK',
  }
  if (teks == 'shortlink') tags = {
  'shortlink': 'SHORT LINK',
  }
  if (teks == 'tools') tags = {
  'tools': 'MENU TOOLS',
  }
  if (teks == 'nsfw') tags = {
  'nsfw': 'NSFW MENU', 
  }
  if (teks == 'asupan') tags = {
  'asupan': 'ASUPAN MENU', 
  }
  if (teks == 'random') tags = {
  'random': 'RANDOM MENU', 
  }
  if (teks == 'textpro') tags = {
  'textpro': 'TEXT PRO MENU', 
  }
  if (teks == 'photooxy') tags = {
  'photooxy': 'PHOTO OXY MENU', 
  }

//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `wa.me/${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "0-1625305606@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "Mengter", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('./media/siang.jpg')
		}
	}
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
if (teks == '404') {
let menuu = `\n╭━━━━┈⎔ *INFO BOT*
├❏ *Bot Name* : *${namebot}*
├❏ *Owner* : Reza
├❏ *Version* : 5.0
├❏ *Perfix* : Multi
├❏ *Lib* : Baileys-Md@4.0.0
├❏ *Pengguna* : ${Object.keys(global.db.data.users).length}
├❏ *Chat Terbanned* : ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
├❏ *Penggunaan Terbanned* : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
├❏ *Ram* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
╰┬───┈⎔ *INFO USER*
┌┤ *Name* : ${name}
││ *Api* : ${tag}
││ *Limit* : ${limit}
││ *Role* : ${role}
││ *Level* : ${level}
││ *Premium* : ${global.prem ? 'Yes' : 'No'}
│╰────────────┈⎔
│ *Time* : ${wib}
│ *Date* : ${week} ${date}
│ *Runtime* : ${uptime}
╰━━━━━━━━━━━━┈⎔

ICON INFO
Ⓛ = Fitur Memakai Limit
Ⓟ = Fitur Khusu Premium User   
`
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `${ucapan()} ${name}`,
            description: menuu,
            buttonText: 'LIST MENU',
            listType: 1,
            footerText: "©Best Whatsapp Bot",
            mtype: 'listMessage',
            sections: [
                {
                "rows": [{
                  "title": `"↳📚┃ALL COMMAND"`,
                  "description": "Menampilkan Semua Perintah Bot",
                  "rowId": '.? all'
                  }, {
                  "title": "↳📝┃ABSEN & VOTING",
                  "description": "Absen Dan Vote Untuk Di Grup",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "↳🇯🇵┃ANIME",
                  "description": "Menu Khusus Pencinta Anime",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "↳♀️┃ASUPAN",
                  "description": "Asupan Cecan Di Berbagai Negara",
                  "rowId": `${_p}? asupan`
                }, {
                  "title": "↳🎇┃STICKER & CONVERTER",
                  "description": "Membuat Sticker Dengan Kreativitas",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "↳⏬┃DOWNLOADER",
                  "description": "Mendownload File Lewat Bot",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "↳✨┃EXP & LIMIT",
                  "description": "Pasangan Menu RPG",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "↳🎡┃FUN",
                  "description": "Bersenang Senang Melalui Bot",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "↳🎮┃GAME",
                  "description": "Permainan Tim Maupun Solol",
                  "rowId": `${_p}? game`
                }, {
                  "title": "↳🧰┃GITHUB",
                  "description": "Unduh / Search Github Lewat Bot",
                  "rowId": `${_p}? github`
                }, {
                  "title": "↳👥┃GROUP",
                  "description": "Menu Yang Hanya Bisa Dipakai Di Grup",
                  "rowId": `${_p}? group`
                }, {
                  "title": "↳🖼┃IMAGE",
                  "description": "Mendapatkan Image Random Dari Bot",
                  "rowId": `${_p}? image`
                }, {
                  "title": "↳🌐┃INTERNET",
                  "description": "Menjelajahi Dunia Maya",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "↳🕋┃ISLAMIC",
                  "description": "Menu Tentang Islam",
                  "rowId": `${_p}? islam`
                }, {
                  "title": "↳🐚┃KERANG",
                  "description": "Bermain Dengan Kerang",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "↳✒️┃MAKER",
                  "description": "Membuat Karya Seni",
                  "rowId": `${_p}? maker`
                }, {
                  "title": "↳👑┃OWNER",
                  "description": "Hanya Owner Yang Bisa Meng-Akses",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "↳🎙┃PENGUBAH SUARA",
                  "description": "Ubah Suaramu",
                  "rowId": `${_p}? suara`
                }, {
                  "title": "↳ ⭐┃PREMIUM",
                  "description": "Untuk Dia Yang Mendapatkan Gelar Premium",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "↳📑┃QUOTES",
                  "description": "Motivasi?",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "↳🌱┃RPG",
                  "description": "Game Bot WhatsApp Yang Populer",
                  "rowId": `${_p}? rpg`
                }, {
                  "title": "↳🔭┃STALKER",
                  "description": "Menguntit Mantan Ya?",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "↳🖇️┃SHORT LINK",
                  "description": "Short Link Melalui Bot",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "↳🛠│TOOLS MENU",
                  "description": "Alat Canggih Yang Berguna",
                  "rowId": `${_p}? tools`
                }, {
                  "title": "↳📃┃TEXT MAKER",
                  "description": "Membuat Text Menjadi Indah",
                  "rowId": `${_p}? text`
                }, {
                  "title": "↳🔞┃HENTAI",
                  "description": "Tidak Untuk Anak Anak",
                  "rowId": `${_p}? nsfw`
                }, {
                  "title": "↳🎰┃RANDOM",
                  "description": "Kurang Kerjaan Mampir Saja Kesini",
                  "rowId": `${_p}? random`
                }, {
                  "title": "↳⛄┃TEXT PRO",
                  "description": "Membuat Text Menjadi Indah V Image",
                  "rowId": `${_p}? textpro`
                }, {
                  "title": "↳🤳┃PHOTO OXY",
                  "description": "Photo Oxt Melalui Bot",
                  "rowId": `${_p}? textpro`
                }
                  ],
                "title": "LEXA BOT MENU LIST"
              },               {
                "rows": [{
                  "title": `↳🤴┃OWNER BOT`,
                  "description": "Save Kontak bot",
                  "rowId": `.owner`
                },{
                  "title": "↳🤖┃BOT",
                  "description": "Informasi Bot Ini",
                  "rowId": `${_p}? info`
                }],
                "title": "LEXA BOT INFORMATION"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: fkontak });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
//━━━━━━━━[ SETTINGS MENU ]━━━━━━━━//
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage, 
            hydratedContentText: text, 
            hydratedFooterText: wm2, 
            hydratedButtons: [{
            urlButton: {
               displayText: 'Web',
               url: web
             }

           },
             {
             urlButton: {
               displayText: 'Group Bot Shadow', 
               url: gc
             }

           },
               {
             quickReplyButton: {
               displayText: '👑Owner',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: '💰Donasi',
               id: '.donasi',
             }

           },
           {
             quickReplyButton: {
               displayText: '🏷️Credits',
               id: '.tqto',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
     //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}
