require("colors");

const { mostrarMenu, pausa } = require("./helpers/mensajes");
const { Alumno } = require("./models/Alumno");

const main = async () => {

    let opcion = "";
    do {
        opcion = await mostrarMenu();

        switch (opcion) {
        case "1": {
            console.log("Hola Mundo!");
            break;
        }
        case "2": {
            let user = new Alumno("Anthony", "", "");
            user.saludo();
            user.obtenerCurso(4).value;
            break;
        }
        default:
            break;
        }

        await pausa();
    } while (opcion != "0");

};

main();
