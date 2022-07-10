exports.run = {
   usage: ['phylo'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'اسم الدرس',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar`,
         description: `insta : @wox_bella`
      }, {
         title: 'اسم الدرس',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar`,
         description: `insta : @wox_bella`
      }
      }]
      let text = '*PHYLOSOPHIE* ❤️🥰.\n\n'
      text += '◦ *💟 DEVELOPER* : Mohamed BELLA 🥰\n'
      text += '◦ *🙊 Instagram* : https://Instagram.com/wox_bella\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'إضغط!', [{
         rows
      }], m)
   },
   error: false
}
