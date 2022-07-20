exports.run = {
   usage: ['mo3jam'],
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
         let json = await scrap.mo3jam(text)
         command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false
}
