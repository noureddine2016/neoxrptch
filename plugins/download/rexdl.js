const { decode } = require('html-entities')
exports.run = {
   usage: ['rx', 'rex'],
   async: async (m, {
      client,
      text,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'FB'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let jso = await Api.rxx(text)
         if (!jso.status) return client.reply(m.chat, Func.jsonFormat(jso), m)
         let dt = `乂  *R E X D L*\n\n`
         dt += '	◦  *Name* : ' + jso.data.name + '\n'
         dt += '	◦  *category* : ' + jso.data.category + '\n'
         dt += '	◦  *publish* : ' + jso.data.publish + '\n'
         dt += '	◦  *desc* : ' + jso.data.desc + '\n'
         dt += '	◦  *url* : ' + jso.data.url + '\n\n'
         dt += global.footer
       //  let chSize = Func.sizeLimit(json.data.size, global.max_upload)
         
        client.reply(m.chat, dt, m)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}
