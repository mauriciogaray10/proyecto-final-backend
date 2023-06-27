import { Router } from "express";
import ManagerCarts from "../dao/mongoDB/cartsManager.class.js";

const router = Router();
const Carts = new ManagerCarts();

router.get('/', async (req, res)=>{
    let message = await Carts.getAllCart()
    res.send(message);
});

router.post('/', async(req, res)=>{
    let message = await Carts.crearCarrito();
    res.send(message);
});

router.get('/:cid', async (req, res)=>{
    let cid = req.params.cid;
    let message = await Carts.consultarCartPorId(cid);
    res.send(message);
});

router.post('/:cid/product/:pid', async(req, res)=>{
        let idCart = req.params.cid;
    
        let  idProduct = req.params.pid;

        await Carts.agregarProductoEnCarrito(idCart, idProduct);

       return res.send({status: "success"});



})







export default router;