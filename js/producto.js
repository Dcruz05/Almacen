class Producto{
    constructor(codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    info(){
        return `${this.codigo} - ${this.nombre} $${this.costo}`
    }
}