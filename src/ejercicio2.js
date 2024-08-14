class Contador {
  constructor(valor) {
    this.valor=valor;
    this.valor=0;
  }

  siguiente(){
    this.valor++;
    return this.valor;
  }
}
let instancia= new Contador();
console.log(instancia.siguiente());
