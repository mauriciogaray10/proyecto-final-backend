import mongoose from "mongoose";
import cartModel from "./models/carts.model.js";
import ManagerProducts from "./productsManager.class.js";

export default class ManagerCarts {
  connection = mongoose.connect('mongodb+srv://garaycarlos:hola123@ecommercefinalproyect.ui8vrwv.mongodb.net/');
  ManagerProduct = new ManagerProducts();

    consultarCarrito = async () => {
      let response = await cartModel.find().lean();
      return response;
      };


    crearCarrito = async () => {
      let result = await cartModel.create({ products: [] });
      return result
      };

    consultarCartPorId = async (id) => {
      const result = await cartModel
      .findOne({ _id: id })
      .populate("products.product");
      console.log(result);
      return result;
    
      };

    agregarProductoEnCarrito = async (idCart, idProduct) => {
      let product = await this.ManagerProduct.consultarProductoPorId(idProduct);
      let cart = await this.consultarCartPorId(idCart)
      cart.products.push({ product: product })
      await cartModel.updateOne({"_id": idCart}, {$set: cart})
      
      return;
      };

      deleteProductFromCart = async (cid, pid) => {
        const cart = await this.consultarCartPorId(cid);
        cart.products.pull(pid);
        await cart.save();
        return;
        };
      
      deleteAllProducts = async (cid) => {
        let cart = this.consultarCartPorId(cid);
        cart.products = [];
        await cart.save();

      }







    getAllCart = async () => {
      let result = await cartModel.find().populate('products.product');
      return result;
    };
    
      

   






}