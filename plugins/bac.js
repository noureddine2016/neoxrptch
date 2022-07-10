exports.run = {
   usage: ['bac'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'MATHEMATIQUES',
         rowId: `${isPrefix}maths`,
         description: `جميع دروس الرياضيات`
      }, {
         title: 'PHYSIQUES',
         rowId: `${isPrefix}pc`,
         description: `جميع دروس الفيزياء`
      }, {
         title: 'S.V.T',
         rowId: `${isPrefix}svt`,
         description: `جميع دروس علوم الحياة و الارض`
      }, {
         title: 'PHYLOSOPHIE',
         rowId: `${isPrefix}phylo`,
         description: `جميع دروس الفلسة`
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
