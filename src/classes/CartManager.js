import fs from 'fs';
import __dirname from './utils.js';

let path = __dirname + '/carrito.json';


class CartManager {
    constructor(){
        this.carritos = [];
    }

    readProduct = async () => {
        const data = await fs.promises.readFile (path, 'utf-8');
        return JSON.parse(data)
    }

    getProducts = async () => {
        if (fs.existsSync(path)) {
            let data = await this.readProduct();
            console.log(data);
            return data;
            
        } else {
            console.log([]);
            return 'No products found';
        }
    };











}