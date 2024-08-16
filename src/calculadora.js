// Inserte el código aquí

class calculadora {
    constructor(valor, valor2) {
        this.valor=valor;
        this.valor2=valor2;
    }

    sumar(){
       return this.valor+this.valor2;
    }
    restar(){
        return this.valor-this.valor2;
    }
    multiplicar(){
        return this.valor*this.valor2;
    }
    dividir(){
        return this.valor/this.valor2;
    }
}



export {calculadora};