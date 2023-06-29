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

router.post('/:cid/products/:pid', async(req, res)=>{
        let idCart = req.params.cid;
    
        let  idProduct = req.params.pid;

        await Carts.agregarProductoEnCarrito(idCart, idProduct);

       return res.send({status: "success"});



})

router.delete('/:cid/products/:pid', async(req, res)=>{
    let cid = req.params.cid;

    let  pid = req.params.pid;

    await Carts.deleteProductFromCart(cid, pid);

   return res.send({status: "The product has been deleted"});



})

router.delete('/:cid', async(req, res)=>{
    let idCart = req.params.cid;

    await Carts.deleteAllProducts(idCart);

   return res.send({status: "The products Has been deleted"});



})







export default router;