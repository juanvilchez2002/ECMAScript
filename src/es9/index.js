//junio 2018
//Spread Operator -> extraer información de un objeto
const obj = {
    name: 'Juan',
    age: 37,
    country: 'Perú'
};

//operador de reposo ...
let {name, ...all} = obj;
console.log(name, all);

let {country, ...all1} = obj;
console.log(all1);

//propiedades de propagación, unir elementos
const obj = {
    name: 'Juan',
    age: 37
};

const obj1 = {
    ...obj, //adiciona los valores de la variable "obj"
    country: 'Peru'
}

console.log(obj1);

//promise finally
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        true
        ? resolve('Hello World')
        : reject(new Error('Test Error'))
    });
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalzo'));

//otra forma
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        true
        ? setTimeout(()=> {
            resolve('Hello World')
        }, 3000)
        : reject(new Error('Test Error'))
    });
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalzo'));

//regex
//año-mes-dia
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2008-04-28');
const anio = match[1];
const mes = match[2];
const dia = match[3];
console.log('Date -> ', anio, mes, dia);
