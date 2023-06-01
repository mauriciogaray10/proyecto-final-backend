import { Router} from "express";
import productManager from '../classes/ProductManager.js'

const router = Router();

const list = new productManager();

router.get('/', async (res, req) => {
    let lista = await list.getProducts();
    return res.send(lista);
})

router.get('/:id', async ( res, req)=> {
    let id = req.params.id;
    const productById = await list.getProductById(id);
    return res.send(productById); 
})

router.post('/', async (res, req) => {
    let product = req.body;
    if(!product){
        return res.send('It is a empty product');
    }else{
        await list.addProduct(product);
        return res.send('product added');
    }
})

router.put('/', (res, req)=>{
    let product = req.body;
    list.updateProduct(product);
    return res.send('Product modified');
    
})
router.get('/:id', async ( res, req)=> {
    let id = req.params.id;
    const productById = await list.deleteProductbyId(id);
    return res.send('Product deleted'); 
})


export default router();

