const fs = require('fs')
const { greenConsole } = require('./consoleFunctions')

const changeToSpa = async (packname) => {
    greenConsole(`[x] Changing ${packname}.zip to .spa`)

    fs.rename(`./PackagedFiles/${packname}.zip`, `./PackagedFiles/${packname}.spa`, () => {
        setTimeout(() => {
            greenConsole(`[-] Changing to .spa marked as completed.`)
        }, 2000);
    });
}

module.exports = { changeToSpa }