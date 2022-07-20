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
         title: 'Zakareyae Chriki (S2_Cours+Exercices) PC ',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/msplsvv1pn2r6q7/Cours+de+soir+chriki-S2.pdf/file?fbclid=IwAR3kTDIYMKLbKhigWQ1ELr9xld79llO7XtDBm2ypduO0fJyIe1UuPPNW0Jc`,
         description: `insta : @wox_bella`
         },
         {
         title: 'Zakareyae Chriki (S1_Cours+Exercices) PC',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/eq6pe0oalrt69sz/Cours+de+soir+chriki-S1.pdf/file?fbclid=IwAR3NLW9q6fHut40Y2J2w7g1m6dr_7HMrMAq2Bf8jbWOn5fIo5r719ONscic`,
         description: `insta : @wox_bella`
         },
         {
         title: ' 2BAC-Exercices :',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/itar5x8i8n452zc/S%C3%A9ries+d'exercices+2BAC-Fr.pdf/file?fbclid=IwAR256wKW-ZGzvLVcF5LJ4uLwvwhhGDjoOh_5vbnBaMQy2lOC4fAWDymMdfA`,
         description: `insta : @wox_bella`
         },
         {
         title: 'امتحانات وحدة الجيولوجيا للثانية بكالوريا علوم الحياة والأرض وعلوم فيزيائية بالعربية والفرنسية جاهزة للطبع',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/ps7v984xcupzj40/Examen+G%C3%A9ologie+SVT-PC-Ar.pdf/file?fbclid=IwAR3X_dSQkRBkvU21NVIQEO-Di9vkcG0z9c8EPGxXUT1MCPkw9OowKNrC7XI`,
         description: `insta : @wox_bella`
         },
         {
         title: 'تجميع امتحانات وطنية  2008-2021:',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/02q321cab1by6du/Exams+SVT-BIOF+2008-2021.pdf/file?fbclid=IwAR1PasWamPvSm5vB7QIuYVbcTPwd1r9xkFiXVd37x1QE4RZ0Y5X5b5XD_qc`,
         description: `*مسلك علوم الحياة والارض خيار فرنسية :`
         },
         {
         title: 'تجميع امتحانات وطنية  2008-2021:',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/2dg0n18vfwzwwmj/exams_pc_biof_2008-2021.pdf/file?fbclid=IwAR1tx86fFJbNzdlquX_WBNZYL_Y0wSP539uXrwIbOv6q_b8W1q7Dwin-Xrc`,
         description: `*مسلك العلوم الفيزيائية خيار فرنسية : `
         },
          {
         title: 'تجميع امتحانات وطنية  2008-2021:',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/zje8ag8er5vzeau/exam+arab+pc+2008-2021.pdf/file?fbclid=IwAR33GWiXng3Xq6Zu3Alk-2izVcn2P-oMeXUeJ1j3YHImO8kTCvc9Q1BY6dA`,
         description: `*مسلك العلوم الفيزيائية خيار عربية : `
         },
          {
         title: 'تجميع امتحانات وطنية  2008-2021:',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/s0jfgo6lgkjus57/exam_nat_SVT_arab_2008-2021.pdf/file?fbclid=IwAR2Nn_CmbA67U4ksPzPHfkeMA0mMcvmsBm1gThxFEdwZlqZMzdlqAUFp554`,
         description: `*مسلك علوم الحياة والارض خيار عربية :
( استدراكية 21 غير متوفرة)`
         },
          {
         title: '🔸 Baccalauréat français avec corrigés 2003 à 2012 :',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/4isyibg5hgiyifb/Baccalaureat+francais+de+Physique+Chimie+avec+corrig%C3%A9s-2003+%C3%A0+2012.pdf/file?fbclid=IwAR18OJRdAgpUx9Q9nuxFQlPfElPV0jRQsfmz8EUo6Ndjy6lit4TM_U8ua3A`,
         description: `insta : @wox_bella`
         },
          {
         title: '🔸 Examens français 1998 à 2012 :',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/4isyibg5hgiyifb/Baccalaureat+francais+de+Physique+Chimie+avec+corrig%C3%A9s-2003+%C3%A0+2012.pdf/file?fbclid=IwAR18OJRdAgpUx9Q9nuxFQlPfElPV0jRQsfmz8EUo6Ndjy6lit4TM_U8ua3A`,
         description: `insta : @wox_bella`
         },
          {
         title: '✅ كتاب مبارايات المدارس مع التصحيح (طبعة 2019)',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/h0g8l9qw49aah6v/%D9%83%D8%AA%D8%A7%D8%A8+%D9%85%D8%A8%D8%A7%D8%B1%D8%A7%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AF%D8%A7%D8%B1%D8%B3+%D9%85%D8%B9+%D8%A7%D9%84%D8%AA%D8%B5%D8%AD%D9%8A%D8%AD+2019.pdf/file?fbclid=IwAR3oDG0RRhxpsgKXxFN2tR-pLMmtcycNoIPyiOm2ETLJ887J8NaiZbid3vs`,
         description: `insta : @wox_bella`
         },
          {
         title: 'BABA EL HOUSSINE (Cours) ',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/rbon683qtffp6qz/COURS-2BAC-PC.pdf/file?fbclid=IwAR0HUCPIaerzq4Py2qOXe9BYa0N5rviB9FnP5Dd2KoXZxBdwyo2CMtQPyAg`,
         description: `insta : @wox_bella`
         },
          {
         title: 'REGRAGUI Ahmed (Cartes mentales)',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/ngm2g47blf8exbs/Cartes+mentales-REGRAGUI+Ahmed.rar/file?fbclid=IwAR0o4zokyiSdxLd96Y-19UNnhdzyOEBh6bDXDtnjgNu9fCw4u-Tc1Qzli1w`,
         description: `insta : @wox_bella`
         },
          {
         title: '🔸 EL AAMRANI Abdelaziz (Cours et exercices-Semestre 1)',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/5ikjsf34nc93ic0/Cours+Physique-Chimie+2BAC+(v%C3%A9rifi%C3%A9).pdf/file?fbclid=IwAR2HHiIpygs3CwH4TWXOogYaUccl_GwKxN_vlOPCHo01pSGPw1kDbNyeI8I`,
         description: `insta : @wox_bella`
         },
          {
         title: '🔸 Marwane Chargui (Exercices)',
         rowId: `${isPrefix}mediafire http://www.mediafire.com/file/itar5x8i8n452zc/S%C3%A9ries+d'exercices+2BAC-Fr.pdf/file?fbclid=IwAR2wT3k5QQHQxklI-IhH0YMVTcnmtHVpWmfdTpk6c7CE7KXFmAZxoo_3Efg`,
         description: `insta : @wox_bella`
         },
        {
         title: 'poly YASSER TARFAOUI préparation médecine 2021',
         rowId: `${isPrefix}mediafire https://www.mediafire.com/file/hsknc9prucery85/poly_YASSER_TARFAOUI_pr%25C3%25A9paration_m%25C3%25A9decine_2021.pdf/file`,
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
