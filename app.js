const { cyanConsole, newScreen, redConsole } = require('./functions/consoleFunctions')
const { makeSpa } = require('./functions/makespa')

newScreen()

function title(){
	cyanConsole("$$$$$$/                            $$$$$$$/                     $$/                            ")
	cyanConsole("$$  __$$/                           $$  __$$/                    $$ |                          ")
	cyanConsole("$$ /  /__| $$$$$$/   $$$$$$/        $$ |  $$ |$$$$$$/   $$$$$$$/ $$ |  $$/  $$$$$$/   $$$$$$/  ")
	cyanConsole("/$$$$$$/  $$  __$$/  /____$$/       $$$$$$$  |/____$$/ $$  _____|$$ | $$  |$$  __$$/ $$  __$$/ ")
	cyanConsole(" /____$$/ $$ /  $$ | $$$$$$$ |      $$  ____/ $$$$$$$ |$$ /      $$$$$$  / $$$$$$$$ |$$ |  /__|")
	cyanConsole("$$/   $$ |$$ |  $$ |$$  __$$ |      $$ |     $$  __$$ |$$ |      $$  _$$<  $$   ____|$$ |      ")
	cyanConsole("/$$$$$$  |$$$$$$$  |/$$$$$$$ |      $$ |     /$$$$$$$ |/$$$$$$$/ $$ | /$$/ /$$$$$$$/ $$ |      ")
	cyanConsole(" /______/ $$  ____/  /_______|      /__|      /_______| /_______|/__|  /__| /_______|/__|      ")
	cyanConsole("          $$ |                                                                                 ")
	cyanConsole("          $$ |                                                                                 ")
	cyanConsole("          /__|                                                                                 ")
	console.log("   ")
	console.log("   ")
	console.log("   ")
	console.log("   ")
}

title()

cyanConsole("Welcome to Spotify packaging system manager made by thejimi on GitHub.")
cyanConsole(">> Choose an option number:")
cyanConsole("     * [1] = Pack files into .spa")
cyanConsole("     * [2] = Unpack .spa")
console.log("   ")

var readline = require('readline-sync');
var option = readline.question("Enter it here : ");

if(option === '1'){
	newScreen()
	title()

	cyanConsole(">> Packing into .spa")
	cyanConsole("     * Upload files that you want to pack, into ./FilesToPack")
	console.log("   ")
	var packname = readline.question("Enter your pack's name : ");

	makeSpa(packname)
} else if(option === '2'){
	console.log("   ")
	redConsole("We are sorry, but unpacking .spa files is not avalaible yet. Please consider the fact that you are running the first version of the program.")

	var packname = readline.question("Quit? [y/n] : ");
} else {
	console.log("   ")
	redConsole("Invalid number - you have to choose beetween 1 and 2")
	var packname = readline.question("Quit? [y/n] : ");
}