var clc = require("cli-color");

/**
 * @param {cyanConsole} text - Text you want to print
*/

const cyanConsole = (text) => {
    console.log(clc.cyan(text))
    return;
}

const greenConsole = (text) => {
    console.log(clc.green(text))
    return;
}

const redConsole = (text) => {
    console.log(clc.red(text))
    return;
}

const newScreen = () => {
    console.log("console will be cleared in a short amount of time")
    console.clear()
    return;
}

module.exports = { cyanConsole, newScreen, greenConsole, redConsole }