const yts = require('youtube-yts');

module.exports = {
    name: "youtubesearch",
    alias: ["yts"],
    desc: "To search a video on YouTube",
    category: "Search",
    usage: `yts <search term>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a search term !` },
          { quoted: m }
        );
        let search = await yts(text);
          let num =0;
          let sections = [] 
        for (let i of search.all) {
          //console.log(i)
          const list = {title: `Reseult: ${num++}`,
          rows: [
          
                  {
                   title: `${i.title}`, 
                   rowId: `${prefix}play ${i.title}`,
                   description: `${i.timestamp}`
                  }
                  ]
               }
                  sections.push(list)
              }
              var txt = `     *『  YouTube Search Engine  』*\n\n\n_Search Term:_ *${args.join(" ")}*\n\nChoose a song to play\n`

              let buttonMessage = {
                //image: { url: randomimage },
                text: txt,
                footer: `*${botName}*`,
                buttonText: "Choose Song",
                sections,
              };
          
              Miku.sendMessage(m.from, buttonMessage, { quoted: m });


    }}