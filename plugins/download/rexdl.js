const { decode } = require('html-entities')
exports.run = {
   usage: ['rx', 'rex'],
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://www.mediafire.com/file/1fqjqg7e8e2v3ao/YOWA.v8.87_By.SamMods.apk/file'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.rexdl(args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let text = `乂  *R E X D L*\n\n`
         text += '	◦  *Name* : ' + unescape(decode(json.data.name)) + '\n'
         text += '	◦  *category* : ' + json.data.category + '\n'
         text += '	◦  *publish* : ' + json.data.publish + '\n'
         text += '	◦  *desc* : ' + json.data.desc + '\n'
         text += '	◦  *url* : ' + json.data.url + '\n\n'
         text += global.footer
       //  let chSize = Func.sizeLimit(json.data.size, global.max_upload)
         
        client.reply(m.chat, text, m)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}
