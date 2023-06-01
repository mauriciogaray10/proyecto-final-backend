import fs from 'fs';
import __dirname from './utils.js';
import { v4 as uuidV4 } from "uuid";


class ProductManager {
    
    constructor () {
        this.path = __dirname + '/productos.json';
        this.products = [];
    }
    static id = 0;
    readProduct = async () => {
        const data = await fs.promises.readFile (this.path, 'utf-8');
        return JSON.parse(data)
    }





    getProducts = async () => {
        if (fs.existsSync(this.path)) {
            let data = await this.readProduct();
            console.log(data);
            return data;
            
        } else {
            console.log([]);
            return 'No products found';
        }
    };



    addProduct = async ({title, description, price, thumbnail, code, cant}) => {
        
        if (title === null || description === null || price === null || thumbnail === null || stock === null) {
            return 'se debe rellenar todos los campos';
        }
        ProductManager.id++
        const product = {
            title,
            description, 
            price,
            thumbnail,
            code,
            cant,
            id : uuidV4()
        }
        this.products.push(product)

        await fs.promises.writeFile(this.path, JSON.stringify(this.products, '\t') )




    }
  
    
    getProductById = async (id) => {
      
       
        const data = await this.readProduct()
    
       let filtered = await data.find((product) => product.id === id)
       if (!filtered) {
        console.log('Could not find the product');
       }
       console.log(filtered);
       return filtered


     }

     updateProduct = async ({id, ...product}) => {

        await this.deleteProductbyId(id);

        let productOld = await this.readProduct();

        let modifiedProduct = [{id, ...product}, ...productOld];
        await fs.promises.writeFile(this.path, JSON.stringify(modifiedProduct, '\t') )
        console.log(modifiedProduct);
     }

     deleteProductbyId = async (id) => {
        let response = await this.readProduct();

        let productFiltered = response.filter(products => products.id !== id);

        console.log(productFiltered);
        
        await fs.promises.writeFile(this.path, JSON.stringify(productFiltered, '\t') )
        return productFiltered;
     }

    }