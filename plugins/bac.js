exports.run = {
   usage: ['bac'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'MATHEMATIQUES',
         rowId: `${isPrefix}maths`,
         description: `  `
      }, {
         title: 'PHYSIQUES',
         rowId: `${isPrefix}menutype 1`,
         description: `  `
      }, {
         title: 'S.V.T',
         rowId: `${isPrefix}menutype 2`,
         description: `  `
      }, {
         title: 'PHYLOSOPHIE',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }]
      let text = '*DOROSS 2BAC* ❤️🥰.\n\n'
      text += '◦ *DEVELOPER 💟* : MOHAMED BELLA\n'
      text += '◦ *FOLLOW ME 🌚* : https://Instagram.com/wox_bella\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
