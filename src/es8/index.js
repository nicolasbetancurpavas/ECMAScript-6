const data = {
    fronted: `oscar`,
    backend: `isabel`,
    desig: `ana`,
}
// convertir un objecto en un arreglo

const convert = Object.entries(data)

console.log(convert);
console.log(convert.length);
console.log(convert[0][1])

const datica = {
    fronted: `oscar`,
    backend: `isabel`,
    desig: `ana`
}

// los valores de los atributos

console.log(Object.values(datica))

//padding

const string = `hello`
console.log(string.padStart(7, `hi`))
console.log(string.padEnd(7, `hi`))

// evitar problemas para agregar atributos al objecto
const obj = {
    name: 'oscar',
}

// ASYNC AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve(`hello world`), 3000)
            : reject(new Error('test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync()


const anothorfuction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    }
    catch (error) {
        console.log(error)
    }
}

anothorfuction();


//PROMESAS 

const datos = [
    {
        id: 1,
        title: 'iron man',
        year: 2008
    },
    {
        id: 2,
        title: 'spiderman homecoming',
        year: 2017
    },
    {
        id: 3,
        title: 'avamger endGame',
        year: 2019
    },
]

/*const getDatos = () => {
    return datos
}*/

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length == 1) {
            reject(new Error(`no existen datos`))
        }
        else {
            setTimeout(() => {
                resolve(datos)
            }, 3000)
        }
    })

}



//getDatos()
//.then((datos) => console.log(datos))

async function dating() {
    try {
        const datoss = await getDatos()
        return console.log(datoss)
    } catch (err) {
        console.log(err.message)
    }
}

dating()



// promesa nicolas b


const bd = [
    {
        name: 'nicolas',
        age: 22
    },
    {
        name: 'santiaog',
        age: 25
    },
    {
        name: 'jose',
        age: 35
    },
]


// establecer promesas

const getdatos = () => {
    return new Promise((reject, resolve) => {
        if (true) resolve(`aca esta el nombre nicolas `)
        else reject(new Error(`no existe un nicolas en la BD`))
    })
}

async function datingg() {
    try {
        const promesa = await getdatos()
        return console.log(promesa)
    }
    catch (err) {
        return console.log(err.message)
    }
}

datingg()
