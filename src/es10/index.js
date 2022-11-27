//aplanamiento de arrays 
let array = [1,2,3, [1,2,3, [1,2,3]]]
console.log(array.flat(2))

// metodo flatMap 
let Array = [1,2,3,4,5]
console.log(Array.flatMap( value => [value, value * 2]))

// trim
let hello = '     hello world'

console.log(hello)
console.log(hello.trimStart());

let Hello = 'hello world      '
console.log(Hello)
console.log(Hello.trimEnd())

// parametro opcional de catch

try {

}catch{
  error  
}

// tranformacion de array de arrays a objectos


let entries =  [
    ['name','nicolas'],
    ['apell','Betancur'],
    ['age',22],
]

let objecto = Object.fromEntries(entries)

console.log(objecto)

let arraY = Object.entries(objecto)

console.log(arraY)

// propiedad description de los symbol

let mySymbl = 'My Symbol'
let symbol = Symbol(mySymbl)

console.log(symbol.description)

