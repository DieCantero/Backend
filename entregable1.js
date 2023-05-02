
import fs from "fs";
import


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
        const compararId = this.products.includes(producto => producto.id === idProducto)
        if (compararId) {
            console.log("Not found")
        } else {console.log("found")}   
       } 
*/

getProductById = (idProducto)=> {
    const compararId = this.products.find(idProducto)
    return idProducto
   } 

}

const uno = new ProductManajer()
uno.addProduct(1,1,1,1,1,1)
uno.addProduct(2,2,2,2,2,2)
uno.addProduct(3,3,3,3,3,3)
//uno.getProducts()
uno.getProductById(2)