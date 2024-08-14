
//Clonar Arreglo

function clonarArreglo(array) {
    let newArray=array.map((x) => x = x);
    console.log('Nuevo arreglo', newArray);   
}
clonarArreglo([2,4,5,2,5,7,8]); 

//Clonar Obj

let Objeto={
    nombre:"Ale",
    apellido:"Carmona"
}
function clonarObjeto(obj) {
    let newObj= {...obj};
    console.log("Nuevo objeto",newObj);
}
clonarObjeto(Objeto);

//Sumar
let numeros=[1,5,1,2,3];
let sumar=(...lista)=>{return lista.reduce((acumulador,numero)=>acumulador+numero,0)}
console.log(sumar(...numeros));

 //Saludar
let saludar=(Nombre)=>{ return "Hola " + (Nombre||"Desconocido")}
console.log(saludar("John"));

