exports.run = {
   usage: ['mo3jam', 'mo3jam' , 'mo3jam' ]
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         
         
         if (command == 'short') {
            if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
            let json = await scrap.mo3jam(text)
            command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
         }
         
          if (command == 'short') {
            if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
            let json = await scrap.mo3jam(text)
            command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
         }
         
          if (command == 'mo3jam') {
            if (!text) return client.reply(m.chat, Func.example(isPrefix, command, command != 'artinama' ? 'yntkts' : 'wildan'), m)
            let json = await scrap.mo3jam(text)
            command != 'artinama' ? client.reply(m.chat, `${json.data.content}`, m) : client.reply(m.chat, `${json.data.content}`, m)
         }
         
         
         
         
         
      } catch {
         client.reply(m.chat, global.status.error, m)
      }
   },
   error: false
   
   
   
   
   
   
   
}
