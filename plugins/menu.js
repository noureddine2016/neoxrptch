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
      text += 'Ela konto talib/tilmid, Sift Lya *#bac*'
      await client.sendList(m.chat, '', text, '', 'click!', [{
         rows
      }], m)
   },
   error: false
}
