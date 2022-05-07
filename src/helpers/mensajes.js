require('colors');

const mostrarMenu = () => {

  return new Promise( resolve => {
    console.clear();
    console.log("========================".green);
    console.log(" Seleccione una opción".green);
     console.log("========================\n".green);
  
    console.log(`${"1.".green} Mostrar Hola Mundo.`);
    console.log(`${"2.".green} Mostrar Persona`);
    console.log(`${"0.".green} Salir \n`);
  
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  
  });
  
};

const pausa = () => {

  return new Promise(resolve => {

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar\n`, () => {
      readline.close();
      resolve();
    });
  });
 
};

module.exports = {
  mostrarMenu,
  pausa
};
