import fs from 'fs';
import __dirname from './utils.js';
import { v4 as uuidV4 } from "uuid";

let path = __dirname + '/carrito.json';


class CartManager {
    constructor(){
        this.carritos = [];
    }

    readProduct = async () => {
        const data = await fs.promises.readFile (path, 'utf-8');
        return JSON.parse(data)
    }

    addCarrito = async () => {
        const carrito = {
            id : uuidV4(),
            products: [],
        }
        this.carritos.push(carrito)

        await fs.promises.writeFile(path, JSON.stringify(this.carritos, '\t'))

    }

    getProductsById = async (id) => {
      
       
        const data = await this.readProduct()
    
       let { newId, products } = await data.find((cart) => cart.id === id)
       if (products.length === 0) {
        console.log('Could not find the cart');
       }
       console.log(products);
       return products;


     }

     addNewProduct = async (idCart, idProduct, cant) => {
         let {id, products} = await this.getProductsById(idCart);
         let product = products.filter(product.id === idProduct);
         product.cant += cant;
         







    }
  
    
   
  
    













}