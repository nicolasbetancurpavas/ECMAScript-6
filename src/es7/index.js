// metodo include

let number = [1,2,3,4,5,6,7,8,9]

if (number.includes(4,5)) console.log(`si se encuentra el valor 5`)
else console.log(`no se encuentra .`)


const buscandoNumero = (num,indice) => {
    if(number.includes(num,indice)) console.log(`El numero ${num} si se encuentra`)
    else console.log(`ese numero no existe`) 
}

buscandoNumero(5,4)
// elevar la potencia **

let base = 4 
let exponent = 3 
let result = base ** exponent

console.log(`${result}`)

// 
function Exponet (base,exponent){
    let resultado 
    resultado= base ** exponent
    return console.log(resultado)  
}

Exponet(10,2)

