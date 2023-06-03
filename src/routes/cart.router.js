import { Router } from "express";
import ManagerCarts from "../classes/cartsManager.class";

const router = Router();
const Carts = new ManagerCarts();

router.post('/', async(req, res)=>{
})







export default router;