
exports.run = {
   usage: ['maths'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [
         {
         title: 'LECON 1',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar`,
         description: ``
         },

         {
         title: 'lecon 2',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar`,
         description: ``
         }

]
      let text = 'MATHEMATIQUES ❤️😇\n\n'
      text += '◦ *💟DEVELOPER* : *MOHAMED BELLA*\n'
      text += '◦ *💟INSTAGRAM* : https://instagram.com/wox_bella *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'إضغط هنا!', [{
         rows
      }], m)
   },
   error: false
}
