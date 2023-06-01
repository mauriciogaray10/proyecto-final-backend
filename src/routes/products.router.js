import { Router } from "express";
import productsManager from '../classes/productsManager.class.js'

const router = Router();

const Products = new productsManager();

router.get('/', async (req, res)=>{
    let productList = await Products.consultarProductos();
    return res.send({productList});
})

router.get('/:pid', async (req, res) => {
    let pid = req.params.pid;
    let product = await Products.consultarProductoPorId(pid);
    
    res.send (product)
})





export default router;