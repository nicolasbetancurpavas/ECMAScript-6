//parametros rest

const obj = {
    name: 'nicolas',
    age: 22,
    country: 'col',
}

let { name, ...all } = obj
console.log(name, all)

const obj1 = {
    name: 'nicolas',
    age: 22,
}
const obj2 = {
    ...obj1,
    county: 'Col'
}

console.log(obj2)

// metodo finally

const HELLOWORlD = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve ('hello world'),2000)
            : reject(new Error('test error'))
    })
}

HELLOWORlD()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log(`finalizo`))

const regexData = /([0-9]{4})-([0-9]){2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day)

