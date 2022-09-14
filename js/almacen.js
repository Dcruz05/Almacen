class Inventario{
    constructor(){
        this.productos=new Array();
    }

    agregar(producto){
        this.productos.push(producto);
    }

    eliminar(codigo){
        if(this.buscar(codigo)==null){
            alert("El producto que desea eliminar no existe")
        }
        else{
            for(let i=0;i<this.productos.length;i++){
                if(codigo==this.productos[i].codigo){
                    for(let j=i;j<this.productos.length-1;j++){
                        this.productos[j]=this.productos[j+1];
                    }
                }
            }
            this.productos.pop()
            alert("Se elimino el producto");
        }
    }

    buscar(codigo){
        for(let i=0;i<this.productos.length;i++){
            if(this.productos[i].codigo===codigo){
                return this.productos[i];
            }
        }
        return null;
    }

    listado(){
        let lista = ""
        if(this.productos.length>0){
            for(let i=0;i<this.productos.length;i++){
                lista += "<li>"+this.productos[i].info()+"</li>";
            }
        }else{
            lista = "No hay productos registrados"
        }
        
        return lista
    }

    listadoInvesa(){
        let lista = ""
        if(this.productos.length>0){
            for(let i=this.productos.length-1;i>=0;i--){
                lista += "<li>"+this.productos[i].info()+"</li>";
            }
        }else{
            lista = "No hay productos registrados"
        }
        return lista
    }
}
