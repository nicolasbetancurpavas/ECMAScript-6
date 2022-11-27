// funciones antes
function newFuction(name, age, country) {
    var name = name || "oscar"
    var age = age || 32;
    var country = country || "MX"
    console.log(name, age, country)
}

//es6

function newFuction2(name = "oscar", age = 32, country = "MX") {
    console.log(name, age, country)
}

newFuction()
newFuction2("Nicolas", "22", "co")

// template literal 
let hello = "hello"
let world = "World"
let epicPhrase = hello + " " + world
console.log(epicPhrase)
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//Multilinea

let lorem = "hola soy nicolas betancur disenador y programador web soy el mejor programador del mundo \n" + "otra frase"

let lorem2 = `otra frace epica que necesitamos
ahora es otra frase epicas
soy el mejor no se equivoquen
papiii`

console.log(lorem2)

// Destructuracion

let person = {
    'name': 'Nicolas',
    'age': 22,
    'country': 'colombia'
}

let { name, age } = person;

console.log(name, age)

function saludar({ name, age, country }) {
    return console.log(`hola mi nombre es ${name} tengo ${age} anos de edad y vivo en ${country}`)
}

console.log(saludar(person))

console.log(`${person.name} betancur pavas, edad ${person.age} pais ${person.country}`)

//spread operator
let team1 = ['nicolas', 'julian', 'ricardo']
let team2 = ['camila', 'stiven', 'juan']

let educacion = ['david', ...team1, ...team2]

console.log(educacion)

// variables nuevas

// var si ejecuta en consola ya que es una variable de alcanze global 
{
    var globlal = "global var "
}


{
    let globaLET = "global let"
}

// no ejecuta let ya que let funciona de manera local (dentro del bloque de codigo)
console.log(global)
var global
console.log(globaLET)

// ECMAScript propiedad de objecto mejorada
let Name = "nicolas"
let Age = 22

let obj = { Name: Name, Age: Age }

Obj = { Name, Age }

console.log(Obj)

// funciones en flecha fuction arrow

const names = [
    { name: "nicolas", age: 22 },
    { name: "juan", age: 24 }
]

let listOFnames = names.map(function(elemento) {
    return elemento.name
})

console.log(listOFnames)

const squared = num => num * num

console.log(squared(6)) //36

//Promesas manejo asincronismo

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("!HEY")
        } else {
            reject("ups!!")
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

// clases 

class calculador {
    constructor() {
        this.valorA = 0
        this.valorB = 0
    }

    sum(valorA, valorB) {
        this.valorA = valorA
        this.valorB = valorB
        return this.valorA + this.valorB
    }
}

const objecto1 = new calculador()

console.log(objecto1.sum(10, 20))

// modulo 


import { hello } from "./module.js"
hello()
    // generator

function* helloworld() {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'world';
    }
    if (true) {
        yield 'nepe';
    }
    if (true) {
        yield "jeje";
    }
}

const genetorhello = helloworld()


console.log(genetorhello.next().value)
console.log(genetorhello.next().value)
console.log(genetorhello.next().value)
console.log(genetorhello.next().value)

for (let y of genetorhello) {
    console.log(y)
}

const arr = [...helloworld()]
console.log(arr)

// muestra de sincronismo en javascript
function hola() {
    if (true) {
        return "hola"
    }
    if (true) {
        return "hola mundo"
    }
}

console.log(hola())
console.log(hola())

function* iterable() {

}


// funciona como los objectos guarda funciones y variables que se pueden ejecutar desde su funcion padre(exterior)

//clousures
let a = "hola"

function global() {
    function local() {
        let b = " mundo"
        return a + b
    }
    return local
}

console.log(global())
const clousure = global()()
console.log(clousure)

//sirve igual al patron de los objectos


function conteoregresivo(a) {
    if (a <= 5) {
        return console.log(`debe ser mayor a 5`)
    } else {
        return console.log(conteoregresivo(a * 2))
    }
}

conteoregresivo(6)

let array = [1, 2, 3, 4, 5, 6, 7, 8]

const sumaArray = array.reduce(
    (contador, elemento) => {
        return contador += elemento
    }
)


console.log(sumaArray / array.length)

function par(list) {
    if (list.length % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(par(array))


const mediana = (lista) => {
    let mitad = parseInt(lista.length / 2)

    let prom
    if (par(lista)) {
        let promedio = lista[mitad - 1] + lista[mitad]
        prom = promedio / 2
    } else {
        prom = lista[mitad]
    }

    return prom

}

console.log(mediana(array))


// callback 

function one(call) {
    setTimeout(() => {
        console.log(`hola mundo`)
    }, 1000)
    call()
}

function two() {
    console.log(`soy nico`);
}

one(two)

// callback

async function Cuadradocallback(value, callback) {
    console.log(`inicia callback`)
    await setTimeout(() => {
        callback(value, value * value)
    }, 0 | Math.random() * 1000)

}

Cuadradocallback(10, (value, result) => {
    console.log(`callback: ${value} : ${result}`)
})

console.log('hablalo mi H')

setTimeout(() => {
    console.log(`estoy aprendiendo asincronia y callbacks`)
}, 2000)

console.log(`primero yo`)

//clases

class myName {
    constructor() {
        this.name = "no tiene asignacion"
        this.Apell = "no tiene asignacion"
    }
    mostrarNombre(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        return console.log(`Tu nombre es ${this.nombre} ${this.apellido}`)
    }

}

let object = new myName()

object.Name = `nicolas`
console.log(`ya asignaste tu atributo nombre ${object.Name}`)
object.mostrarNombre(object.Name, `Betancur`)


const SumPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(`hey`)
        } else {
            reject(`ups`)
        }
    })
}

SumPromise()
    .then(response => console.log(response))
    .then(() => console.log(`hola`))
    .catch(error => console.log(error))

// includes

let variablesitas = [1, 3, 4, 5, 6, 7, 8]

let bolean = variablesitas.includes(5, 0)

console.log(bolean)


function promises() {
    return new Promise((resolve, reaject) => {
        if (true) {
            console.log("hola promesa")
        } else {
            console.log("none")
        }
    })
}


promises()
    .then(response => console.log(response))
    .catch(error => console.log(error))

// 20 num negativos y positivos

const ARREGLO = new Array()

ARREGLO.push(1)
ARREGLO.push(2)
ARREGLO.push(3, 4, 5, 6, 7)

//vamos a recorrerlos para mostrarlos 

ARREGLO.forEach(
        function(elemento) {
            console.log(elemento)
        }
    )
    //luego con push agregas elemento

class Persona {
    constructor(altura, edad, nom) { // en los parametros debes poner los atributos
            this.altura = altura;
            this.edad = edad;
            this.nom = nom;
        } // el constructor te permite crear atributos y toda objecto que tu crees hereda esos atributos

    //crearemos un metodo para esta clase que saludo al objecto
    saludar(nom) { // en la clases no necesitamos el function para crear el metodo
        return console.log(`hola mi nombre es ${nom}`)
    }
}

const Nicolas = new Persona(176, 22, "nicolas") //entiendes?  //un contructor a la hora de crear objectos es una funcion que permite que lo objectos hereden estas variables
const Juan = new Persona(176, 55, "juan")
console.log(Nicolas.nom)
console.log(Juan.nom)
console.log(Juan.edad)


const aarray = [1, 2, 3, 4, 5]
let nuevo = aarray.splice(0, 1)
console.log(nuevo)