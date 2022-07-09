exports.run = {
   usage: ['bac'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'MATHEMATIQUES',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'PHYSIQUES',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'S.V.T',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'PHYLOSOPHIE',
         rowId: `${isPrefix}menutype 4`,
         description: ``
      }]
      let text = 'An autonomous program on the internet or another network that can interact with systems or users.\n\n'
      text += '◦ *Database* : PostgreSQL\n'
      text += '◦ *Library* : Baileys v4.3.0\n'
      text += '◦ *Rest API* : https://api.nxr.my.id\n'
      text += '◦ *Source* : https://github.com/neoxr/neoxr-bot *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
