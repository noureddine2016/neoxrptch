exports.run = {
   usage: ['menutype'],
   async: async (m, {
      client,
      args,
      isPrefix
   }) => {
      const option = args[0] || 1
      if (option == 1) return client.reply(m.chat, maths(isPrefix), m)
      if (option == 2) return client.reply(m.chat, pc(isPrefix), m)
      if (option == 3) return client.reply(m.chat, svt(isPrefix), m)
      if (option == 4) return client.reply(m.chat, phylo(isPrefix), m)
   },
   error: false
}

const maths = prefix => {
   return ` 
  🔗 http://www.mediafire.com/file/4hq1nadce9yq6lz/examens_bac_PC_SC.PHYS_2008_-_2016_avec_corr.rar
  `
}

const pc = prefix => {
   return `
    🔗 
   `
}

const svt = prefix => {
   return `
 🔗 

   `
}

const phylo = prefix => {
   return `◦ 
◦  `
}
