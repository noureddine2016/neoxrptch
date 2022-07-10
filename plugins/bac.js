exports.run = {
   usage: ['bac'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'MATHEMATIQUES',
         rowId: `${isPrefix}lang 1`,
         description: ``
      }, {
         title: 'PHYSIQUES',
         rowId: `${isPrefix}lang 2`,
         description: ``
      }, {
         title: 'S.V.T',
         rowId: `${isPrefix}lang 3`,
         description: ``
      }, {
         title: 'PHYLOSOPHIE',
         rowId: `${isPrefix}lang 4`,
         description: ``
      }]
      let text = '*DOROSS 2BAC* ❤️🥰.\n\n'
      text += '◦ *Database* : PostgreSQL\n'
      text += '◦ *Library* : Baileys v4.3.0\n'
      text += '◦ *DEVELOPER* : MOHAMED BELLA\n'
      text += '◦ *Source* : https://Instagram.com/wox_bella\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
