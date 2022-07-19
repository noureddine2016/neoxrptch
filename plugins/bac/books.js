exports.run = {
   usage: ['book'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [
         {
         title: '1300 Math Formulas ( PDFDrive.com )',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/77f3i1vmmj4yjft/1300_Math_Formulas_%2528_PDFDrive.com_%2529.pdf/file`,
         description: `insta : @wox_bella`
         },
        {
         title: '1èrePartieMathRédian',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/drgz49nx1avz9uv/1%C3%A8rePartieMathR%C3%A9dian.pdf/file`,
        description: `insta : @wox_bella`
         },
        {
         title: '2èmePartieMathRédian',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/xonlx82siju3atb/2mePartieMathRdian.pdf/file`,
         description: `insta : @wox_bella`
         },
        {
         title: '3èmePartieMathRédian',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/fb63aspe6zibtp9/3mePartieMathRdian.pdf/file`,
         description: `insta : @wox_bella`
         },
        {
         title: 'DIMa DIMa MaTH',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/kmnoqj3yvuf4q61/Dima-math-Dima-www.3elmo.info.pdf/file`,
         description: `insta : @wox_bella`
         },
        {
         title: 'MathTle.pdf',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/6c7at4xwz0nxmmq/MathTle.pdf/file`,
         description: `insta : @wox_bella`
         },
        {
         title: 'كتاب ديما ديما',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/bmd7daw4b4d2nt8/%25D9%2583%25D8%25AA%25D8%25A7%25D8%25A8_%25D8%25AF%25D9%258A%25D9%2585%25D8%25A7_%25D8%25AF%25D9%258A%25D9%2585%25D8%25A7.pdf/file`,
         description: `insta : @wox_bella`
         },
        {
         title: 'ملخص الرياضيات',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/awgy2bmfvq9asla/%25D9%2585%25D9%2584%25D8%25AE%25D8%25B5_%25D8%25A7%25D9%2584%25D8%25B1%25D9%258A%25D8%25A7%25D8%25B6%25D9%258A%25D8%25A7%25D8%25AA.pdf/file`,
         description: `insta : @wox_bella`
         },
        {
         title: 'سلسلة 20 على 20 ـ مادة الرياضيات (موقع مول التلاخيص',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/kmnoqj3yvuf4q61/Dima-math-Dima-www.3elmo.info.pdf/file`,
         description: `insta : @wox_bella`
         },
        
         {
         title: 'سلسلة ديما ديما _ الرياضيات www.3elmo.blogspot.com',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/yesa8m4ohwc4vhe/%25D8%25B3%25D9%2584%25D8%25B3%25D9%2584%25D8%25A9_%25D8%25AF%25D9%258A%25D9%2585%25D8%25A7_%25D8%25AF%25D9%258A%25D9%2585%25D8%25A7_%25D8%25A7%25D9%2584%25D8%25B1%25D9%258A%25D8%25A7%25D8%25B6%25D9%258A%25D8%25A7%25D8%25AA_www.3elmo.blogspot.com.pdf/file`,
         description: `insta : @wox_bella`
         }

]
      let text = '💟 *BBOOKK* ❤️😇\n\n'
      text += '◦ *💟DEVELOPER* : *MOHAMED BELLA*\n'
      text += '◦ *💟INSTAGRAM* : https://instagram.com/wox_bella *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'إضغط هنا!', [{
         rows
      }], m)
   },
   error: false
}
