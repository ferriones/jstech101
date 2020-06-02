class Miembro {

    constructor(nombre, edad, genero, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.profesion = profesion;
    
    }
    getEdad() {
        return `Hola soy ${this.nombre} mi edad es ${this.edad}` ;


    }
    
}
const Magdaleno = new Miembro ("Magdaleno", 26, "Masculino" , "programador");
console.log(Magdaleno.getEdad());

