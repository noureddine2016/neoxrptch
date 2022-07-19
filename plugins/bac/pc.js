exports.run = {
   usage: ['pc'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [
         {
         title: 'Ondes mécaniques progressives',
         rowId: `https://www.youtube.com/watch?v=RrCM2o1dgC4&ab_channel=Comprendrelaphysique-maria-`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Ondes mécaniques progressives périodiques',
         rowId: `https://www.youtube.com/watch?v=luXhKb9rJGc`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Propagation des ondes lumineuses',
         rowId: `https://www.youtube.com/watch?v=_BjhWJtibrc`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Décroissance radioactive 1',
         rowId: `https://www.youtube.com/watch?v=XlwZ1KKE74o&ab_channel=ZakariaTAOUSSE-%D8%B2%D9%83%D8%B1%D9%8A%D8%A7%D8%A1%D8%A7%D9%84%D8%B7%D9%88%D8%B3`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Décroissance radioactive 2',
         rowId: `https://www.youtube.com/watch?v=MK-fKRXL03o&ab_channel=ZakariaTAOUSSE-%D8%B2%D9%83%D8%B1%D9%8A%D8%A7%D8%A1%D8%A7%D9%84%D8%B7%D9%88%D8%B3`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Noyaux, masse et énergie',
         rowId: `https://www.youtube.com/watch?v=TJBhiTxMyPs&ab_channel=NoureddinePhysique`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Dipôle RC 1',
         rowId: `https://www.youtube.com/watch?v=67fcnqyLJ1o`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Dipôle RC 2',
         rowId: `https://www.youtube.com/watch?v=DSyh4CC_GTU&ab_channel=NoureddinePhysique`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Dipôle RL',
         rowId: `https://www.youtube.com/watch?v=toQhGoMQdE8&ab_channel=NoureddinePhysique`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Oscillations libres dun circuit RLC série',
         rowId: ``,
         description: `insta : @wox_bella`
         },
        {
         title: 'Ondes électromagnétiques',
         rowId: `https://www.youtube.com/watch?v=CLw7K5SC_nM&ab_channel=Comprendrelaphysique-maria-`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Modulation d amplitude',
         rowId: `https://www.youtube.com/watch?v=w4s5n-4rkp4`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Transformations lentes et transformations rapides',
         rowId: `https://www.youtube.com/watch?v=g3NetsrAWYs&ab_channel=Comprendrelaphysique-maria-`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Suivi temporel d une transformation chimique - Vitesse de réaction',
         rowId: `https://www.youtube.com/watch?v=aD-6g17Pp_w`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Transformations chimiques s effectuant dans les 2 sens',
         rowId: `https://www.youtube.com/watch?v=dfzMG-pzxSs&ab_channel=TOPPHYSIQUECHIMIE`,
         description: `insta : @wox_bella`
         },
        {
         title: 'État d équilibre d un système chimique',
         rowId: `https://www.youtube.com/watch?v=um3garpu1MI`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Transformations liées à des réactions acide-base',
         rowId: `https://www.youtube.com/watch?v=dW-dhVsk5cg&ab_channel=AMINELAAOUANI%C2%AB%D8%A3%D9%85%D9%8A%D9%86%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D9%86%D9%8A%C2%BB`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Dosage acido-basique',
         rowId: `https://www.youtube.com/watch?v=KayVdD3Ow_s`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Lois de Newton',
         rowId: `https://www.youtube.com/watch?v=imWN3Riq8k4`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Chute libre verticale d’un solide',
         rowId: `https://www.youtube.com/watch?v=6tBIzfVJNm0&ab_channel=TOPPHYSIQUECHIMIE`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Mouvements plans 1',
         rowId: `https://www.youtube.com/watch?v=Y5uXSChKU14&ab_channel=TOPPHYSIQUECHIMIE`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Mouvements plans 2',
         rowId: `https://www.youtube.com/watch?v=4dYF5zSThoI&ab_channel=TOPPHYSIQUECHIMIE`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Mouvement des satellites et des planètes',
         rowId: `https://www.youtube.com/watch?v=PP2KLoABNXQ&ab_channel=TOPPHYSIQUECHIMIE`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Mouvement de rotation d’un solide autour d’un axe fixe',
         rowId: `https://www.youtube.com/watch?v=qjALwv02RSI&ab_channel=NoureddinePhysique`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Systèmes mécaniques oscillants',
         rowId: `https://www.youtube.com/watch?v=BvfWWEdXv3c&ab_channel=Mr.LAKRIM`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Aspects énergétiques des oscillations mécaniques',
         rowId: `https://www.youtube.com/watch?v=65Eme1s3nK4`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Atome et mécanique de Newton',
         rowId: `https://www.youtube.com/watch?v=9T2ji5jsxlM&ab_channel=Comprendrelaphysique-maria-`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Évolution spontanée d un système chimique',
         rowId: `https://www.youtube.com/watch?v=6LYwKrbm69s&ab_channel=Comprendrelaphysique-maria-`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Transformations spontanées dans les piles et production d énergie',
         rowId: `https://www.youtube.com/watch?v=cgx4Q7DZwkE&ab_channel=Comprendrelaphysique-maria-`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Transformations forcées (Électrolyse)',
         rowId: `https://www.youtube.com/watch?v=tRAK0lE_3Xo`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Réactions d estérification et d hydrolyse',
         rowId: `https://www.youtube.com/watch?v=nKyZI8TplMQ&ab_channel=Comprendrelaphysique-maria-`,
         description: `insta : @wox_bella`
         },
        {
         title: 'Contrôle de l évolution d un système chimique',
         rowId: `https://www.youtube.com/watch?v=duwaUBra_Z4&ab_channel=TOPPHYSIQUECHIMIE`,
         description: `insta : @wox_bella`
         }

]
      let text = '💟 *PHYSIQUES* ❤️😇\n\n'
      text += '◦ *💟DEVELOPER* : *MOHAMED BELLA*\n'
      text += '◦ *هده الدروس فقط للمراجعة القبلية او للاسئناس لانها قد تتضمن معلومات خاطئة او غير كافية*\n'
      text += '◦ *💟INSTAGRAM* : https://instagram.com/wox_bella *(v2.2.0)*\n\n'
      text += 'If you find an error or want to upgrade premium plan contact the owner.'
      await client.sendList(m.chat, '', text, '', 'إضغط هنا!', [{
         rows
      }], m)
   },
   error: false
}
