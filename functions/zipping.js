const fs = require('fs')
const { greenConsole } = require('./consoleFunctions')

const zip = async (packname) => {
    greenConsole("[x] Zipping started.")

    var zipper = require('zip-local');
    
    zipper.sync.zip(`./FilesToPack`).compress().save(`./PackagedFiles/${packname}.zip`)

    setTimeout(() => {
        greenConsole(`[-] Zipping completed. - ZIPPED IN ./PackagedFiles/${packname}.zip DONT TOUCH IT!`)
    }, 1000); 
}

module.exports = { zip }