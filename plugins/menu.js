exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'جميع الاوامر',
         rowId: `${isPrefix}menutype 1`,
         description: `محمد بلا`
      }

]
      let text = 'BELLA MOHAMED 😇.\n\n'
      text += '◦ *instagram* : https://instagram.com/wox_bella *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
