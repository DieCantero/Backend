

class ProductManajer {
    constructor () {
        this.products = []
    }


    addProduct = (title,description,price,thumbnail,code,stock)=> {
        const producto ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock}


        
        if (title === undefined || description === undefined ||price === undefined || thumbnail === undefined || code === undefined || stock === undefined) {
           console.log("Obligatorio llenar todos los campos")             
           return
        } 

        //filtro de codigo:

      /*  } else if (this.products.producto.code === this.products.producto.code) {
            console.log("Codigo ya cargado")             
           return */

       
            
        if (this.products.length === 0) {
                producto.id = 1;
        } else {
            producto.id = this.products [this.products.length - 1].id + 1 
        }
            
        this.products.push(producto)



    } 

    getProducts = ()=> {
        console.log(this.products)
        return
    }
    
    /*
    getProductById = (idProducto)=> {
        const compararId = this.products.findIndex(producto => producto.id === idProducto)
        if (compararId) {
            console.log("Not found")
            return
        }
       }*/
       

       getProductById = (idProducto)=> {
        const compararId = this.products.findIndex(producto => producto.id)
        if (compararId === idProducto) {
            console.log("Not found")
            return
        }
       }
       
    
}

const uno = new ProductManajer()



