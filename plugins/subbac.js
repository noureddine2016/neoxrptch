exports.run = {
   usage: ['lang'],
   async: async (m, {
      client,
      args,
      isPrefix
   }) => {
      const option = args[0] || 1
      if (option == 1) return client.reply(m.chat, maths(isPrefix), m)
      if (option == 2) return client.reply(m.chat, pc(isPrefix), m)
      if (option == 3) return client.reply(m.chat, svt(isPrefix), m)
      if (option == 4) return client.reply(m.chat, phylo(isPrefix), m)
   },
   error: false
}

const maths = prefix => {
   return `
أختر رايطاً و اعد إرساله لى 
 🔗
 🔗
 🔗
 🔗
 🔗 http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar
  ` 




/*let rows = [{
         title: 'DOWNLOADER',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'GROUP TOOLS',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'UTILITIES',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'OWNER TOOLS',
         rowId: `${isPrefix}menutype 4`,
         description: ``
      }]
      let text = 'An autonomous program on the internet or another network that can interact with systems or users.\n\n'
      text += '◦ *Database* : PostgreSQL\n'
      text += '◦ *Library* : Baileys v4.3.0\n'
      text += '◦ *Rest API* : https://instagram.com/wox_bella\n'
      text += '◦ *Source* : https://instagram.com/wox_bella *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m) */








} 

const pc = prefix => {
   return `
أختر رايطاً و اعد إرساله لى 
 🔗
 🔗
 🔗
 🔗
 🔗 http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar
  `
}

const svt = prefix => {
   
   return `
أختر رايطاً و اعد إرساله لى 
 🔗
 🔗
 🔗
 🔗
 🔗 http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar
  `
}

const phylo = prefix => {

return `
أختر رايطاً و اعد إرساله لى 
 🔗
 🔗
 🔗
 🔗
 🔗 http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar
  `


   }
