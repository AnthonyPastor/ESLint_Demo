require("colors");

const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async () => {
    console.log("Hola Mundo");

    let opcion = "";
    do{
        opcion = await mostrarMenu();

        switch (opcion) {
        case "1":{
            console.log("Hola Mundo!");
            break;
        }
        case "2":{
            console.log("Hola Mundo!");
            break;
        }   
        default:
            break;
        }

        await pausa();
    }while(opcion != "0");
 
};

main();
