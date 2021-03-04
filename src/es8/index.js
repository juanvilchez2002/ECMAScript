//julio 2017
//Object entries, Object Values, Padding y Trailing-Comas

//entries-> devuelve los valores de una matriz
const data ={
    frontend: 'Juan',
    backend: 'Christian',
    desgin: 'Karina'
}

//transforma este objeto en una matriz
const entries = Object.entries(data);
console.log(entries);
//cuantos elementos tiene el arreglo
console.log(entries.length);


//values -> devuelve los valores de un objeto a un arreglo
const data = {
    frontend: 'Juan',
    backend: 'Christian',
    desgin: 'Karina' 
}

//transforma este objeto en un arreglo con los valores
const values = Object.values(data);
console.log(values);
console.log(values.length);


//padding -> nos permite añadir cadenas vacias a string, modficando la cadena como tal
//ayuda el lado del front para mostrar una estructura de elementos
const string = 'hello';


//reestructura la dimensión de la variable y adiciona al inicio una palabra
console.log(string.padStart(7,'Hi'));
//reestructura la dimensión de la variable y adiciona al termino de una palabra
console.log(string.padEnd(12, ' -------'));
//otro ejemplo
console.log('food'.padEnd(12, ' ----'));


//trailing -> nos permite asignar elementos al objeto mediante comas.
const data = {
    frontend: 'Juan',
    backend: 'Christian',
    desgin: 'Karina' 
}


//Async Await
//

const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
         ? setTimeout(() => resolve('Hello World'), 3000)
         : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

//
const anotherFunction = async() =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherFunction()




