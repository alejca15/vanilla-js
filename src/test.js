function test() {
  return new Promise(async (resolve, reject) => {
    let llave = await fetch("http://localhost:3000/users");
    let info = llave.json();
    if (llave) {
      return resolve(info);
    }
    reject(new Error("No sirvio"));
  });
}

async function intento() {
  try {
    let respuesta = await test();
    console.log(respuesta);
  } catch (error) {
    console.log("la cagamos");
  }
}

intento();



