import { Router } from "express";
import CartManager from "../classes/CartManager.js";

const router = Router();
const cart = new CartManager();

router.get('/:cid', async (res, req)=> {
    let cid = req.params.cid;
   let newCart = await cart.getProductsById(cid);
   res.setEncoding(newCart);

})
router.post('/:cid/product/:pid', async (res, req) => {
    let cid= req.params.cid;
    let pid= req.params.pid;
    let productById = cart.getProductsById(cid, pid);
    res. send(productById)
})




export default router;
