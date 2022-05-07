class Usuario{
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    saludo() {
        console.log(`Hola soy ${this,this.nombre}`);
    }

    login(email, password){
return this.emial === email && this.password === password;
    }

}


module.exports = {
    Usuario
};