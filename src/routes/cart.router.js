import { Router } from "express";
import ManagerCarts from "../classes/cartsManager.class.js";

const router = Router();
const Carts = new ManagerCarts();

router.post('/', async(req, res)=>{
    let message = await Carts.crearCart();
    res.send(message);
});

router.get('/:cid', async (req, res)=>{
    let cid = req.params.cid;
    let message = await Carts.consultarCartPorId(cid);
    res.send(message);
})







export default router;