var clc = require("cli-color");

const makeSpa = async (packname) => {
    const { zip } = require('./zipping')
    const { changeToSpa } = require('./spa-yfing')

    var zipped = await zip(packname);

    setTimeout(() => {
        changeToSpa(packname)

        setTimeout(() => {
            console.log(`Files from ` + clc.bgCyan(`./FilesToPack`) + ` have been packed into ` + clc.bgCyan(`${packname}.spa`) + ' in ' + clc.bgCyan('./PackagedFiles'))
            console.log("   ")
            console.log(clc.green("Thank you for using spa-packer, dont forget to star it on GitHub!"))
            var readline = require('readline-sync');
            var quit = readline.question("Quit? [y/n] : ");
        }, 3000);
    }, 2000);
}

module.exports = { makeSpa }