const { Usuario } = require("./Usuario");

class Alumno extends Usuario{
    constructor(nombre, email, password){
        // super(nombre, email, password);
        this.cursos = [];
    }

    agregarCurso(curso = ""){
        this.cursos = [this.cursos, curso];
    }
    mostrarCursos() {
        this.cursos.forEach(curso => console.log(curso));
    }
}

module.exports = {
    Alumno
};