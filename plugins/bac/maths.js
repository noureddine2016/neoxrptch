exports.run = {
   usage: ['maths'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'اسم الدرس',
         rowId: `${isPrefix}mediafire `,
         description: `insta : @wox_bella`
      }, {
         title: 'اسم الدرس',
         rowId: `${isPrefix}mediafire `,
         description: `insta : @wox_bella`
      }
      }]
      let text = '*DOROSS 2BAC* ❤️🥰.\n\n'
      text += '◦ *💟 DEVELOPER* : Mohamed BELLA 🥰\n'
      text += '◦ *🙊 Instagram* : https://Instagram.com/wox_bella\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'إضغط!', [{
         rows
      }], m)
   },
   error: false
}
