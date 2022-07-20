exports.run = {
   usage: ['menu'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
      
     
     
     
     // ________________________________________________
     
     
     if (command == 'menu') {
       
       client.reply(m.chat, `bot dyl s7ab bac sf  .bac`, m)
       
      }
     
     
     // ________________________________________________
     
     
   },
   error: false,
   private: false,
   limit: true,
   group: false,
   cache: true,
   location: __filename
}
