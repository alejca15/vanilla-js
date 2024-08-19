//-----------------------------GET--------------------------------//

async function obtenerUsuarios() {
    return new Promise(async(resolve,reject)=>{
        let worked= await fetch("http://localhost:3000/users");
        let usuarios=worked.json();
        if (worked) {return resolve(usuarios)}
        reject (new Error("No entro"))
    })
}

async function tries() {
    try {let usuarios= await obtenerUsuarios();
        console.log(usuarios);
    } catch (error){console.log("La hemos cagado");}
}

//----------------------------POST--------------------------------//
async function postUsers(nombre, apellido) {
    try {
      const userData = {
        nombre,
        apellido
      };
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error("Error posting user:", error);
      throw error;
    }
  }
//Añadir usuarions si no existen aun
 async function addFunc(nombre, apellido) {   
    try {
        let users= await obtenerUsuarios();
        let userExist=users.some(user=>user.nombre===nombre);
        if (userExist) {
            return console.log("Ya existe el usuario");    
        }
        else {await postUsers(nombre,apellido);
        console.log("Se añadio el usuario");}
    } catch (error) {
        return console.log("Error en la funcion update", error);
    }
}
 //---------------------------UPDATE------------------------------//
async function updateUsers(nombre, apellido,id) {
    try {
        const userData = { 
            nombre, 
            apellido};

        const response = await fetch("http://localhost:3000/users/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

//-----------------------------DELETE-----------------------------//
async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }
        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
