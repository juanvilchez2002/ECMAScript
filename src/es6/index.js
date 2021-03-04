//parametros x defectos en funciones
function  newFunction(name, age, country){
    var name = name || 'Juan';
    var age = age || 32;
    var country = country || 'Peru';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'Juan', age=32, country='Peru'){    
    console.log(name, age, country);
}

//llamando a las funciones
newFunction2();
newFunction2('Luis', '23', 'Colombia');

//----------
//concatenar
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello+' '+world;
//sin es6
console.log(epicPhrase);
//con es6
let epicPhrase2 =`${hello} ${world}`;
console.log(epicPhrase2);

//----------
//multilineas
let lorem = "Frase epica a decir\n"+
"esta es otra frase epica que necesitamos";
//es6
let lorem2 =`Frase epica a decir 
esta es otra frase epica que necesitamos`;

console.log(lorem);
console.log(lorem2);

//---------
//desestructuración de elementos
let person = {
    'name':'Juan',
    'age':32,
    'country':'Perú'
}

console.log(person.name, person.age);
//es6, asignamos a una variable lo que se encuentra en person
let {name, country} = person;
console.log(name, country);

//----------
//operador de propagación; unir dos arreglos en uno solo
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

//unir con es6
let education = ['David', ...team1, ...team2];
console.log(education);

//----------
//var : contexto global
{
    var globalVar = 'Global Var';
}
//let : contexto del bloque de código
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);//se ejecuta Var xq es global
console.log(globalLet);//no se ejecuta Let x ser solo en bloque

//---------
//Const : es una constante, ambito de bloque y no global
const a = 'b';
a = 'a';