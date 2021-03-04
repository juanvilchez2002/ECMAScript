//junio 2019
let array = [1,2,3, [1,2,3, [1,2,3]]];

//Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
console.log(array);
console.log(array.flat());
console.log(array.flat(2));
console.log(array.flat(Infinity));

//flatMap ->  lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value*2]));

//trimStart() trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
let hello = '       Hello World';
console.log(hello);
console.log(hello.trimStart());

let hello = 'Hello World           ';
console.log(hello);
console.log(hello.trimEnd());

//try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) 
//sino directamente usarlo en el scope del catch.
try{
    
}catch{
    error
}

//Object.fromEntries() lo inverso a Object.entries(), es decir 
//podemos convertir un objeto en una matriz clave/valor con 
//Object.entries(), y hace lo inverso es decir de una matriz 
//clave/valor a un objeto con Object.fromEntries().
let entries = [["name", "Juan"], ["age",34]];

console.log(Object.fromEntries(entries));//de una matriz lo convertimos en un objeto


//Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);

console.log(symbol.description);


