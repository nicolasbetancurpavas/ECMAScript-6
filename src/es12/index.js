//remplaze

const string = "Javascript es maravilloso es para el futuro de la web Javascript es lo mejor"

const remplacedString = string.replace("Javascript","python")
console.log(remplacedString)

const remplazestring2 = string.replaceAll("Javascript","python")
console.log(remplazestring2)

//METODOS PRIVADOS 

class Message {
    show(val){
        console.log(val)
    };
} 

const message = new Message()
message.show("hola")

const promise1 = new Promise((resolve,reject) => reject("1"))
const promise2 = new Promise((resolve,reject) => resolve("2"))
const promise3 = new Promise((resolve,reject) => resolve("3"))

Promise.any([promise1,promise2,promise3])
.then(response => console.log(response))

