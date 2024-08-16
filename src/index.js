// Inserte el código aquí
let contenedorT= document.getElementById("timeCont");
let updateTime=()=>{contenedorT.innerHTML=Date()}

setInterval(updateTime, 1000);

async function obtenerUsuarios() {
    return new Promise(async(resolve,reject)=>{
        let worked= await fetch("http://localhost:3000/users");
        let usuarios=worked.json();
        if (worked) { 
           return resolve(usuarios)
        }
        reject (new Error("No entro"))
    })
}
async function tries() {
    try {
        let usuarios= await obtenerUsuarios();
        console.log(usuarios);
    } catch (error) {
        console.log("La hemos cagado"); 
    }
}
tries()
