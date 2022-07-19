exports.run = {
   usage: ['bac','lbac','bella'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: '🩸 MATHEMATIQUES ',
         rowId: `${isPrefix}maths`,
         description: ``
      }, {
         title: '🩸 PHYSIQUES',
         rowId: `${isPrefix}pc`,
         description: ``
      }, {
         title: '🩸 SVT',
         rowId: `${isPrefix}svt`,
         description: ``
      }, 
         {
         title: '🩸 kotob',
         rowId: `${isPrefix}book`,
         description: `kotob pdf`
      },
        {
         title: '🩸 PHYLOSOPHIE',
         rowId: `${isPrefix}phylo`,
         description: ``
      }]
      let text = 'لي يتم إنشاء هذا البوت لاية اغراض تجارية ، بل لمساعدة الطلاب في دراستهم و إيصال المعلومة اليهم\n\n'
      text += '◦ *DEVELOPER* : محمد بلا\n'
      text += '◦ *🟣FACEBOOK* : https://www.facebook.com/Bella.lewox\n'
      text += '◦ *🟣INSTAGRAM* : https://www.instagram.com/wox_bella *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'Tap!', [{
         rows
      }], m)
   },
   error: false
}
