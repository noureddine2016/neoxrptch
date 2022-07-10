exports.run = {
   usage: ['limit'],
   async: async (m, {
      client,
      isPrefix,
   }) => {
      let user = global.db.users[m.sender]
      if (user.limit < 1) return client.reply(m.chat, `🚩 لقد وصلت للعدد الاقصى من الرسائل التي يمكنكم إرسالها لي ، يمكنكم إعادة إستعمال البوت بعد 24 ساعة*`, m)
      client.reply(m.chat, `🍟 Your limit : [ *${Func.formatNumber(user.limit)}* ]${!user.premium ? `\n\nTo get more limits, upgrade to a premium plan send *${isPrefix}premium*` : ''}`, m)
   },
   error: false
}
