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
      let response = await cartModel.findOne({ _id: id}).lean();
      return response;
    
      };

    agregarProductoEnCarrito = async (idCart, idProduct) => {
      let product = await this.ManagerProduct.consultarProductoPorId(idProduct);
      let cart = await this.consultarCartPorId(idCart)
      cart.products.push({ product: product })
      await cartModel.updateOne({"_id": idCart}, {$set: cart})
      
      return;
      };

    getAllCart = async () => {
      let result = await cartModel.find().populate('products.product');
      return result;
    };
      

   






}