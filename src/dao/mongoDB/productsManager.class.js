import mongoose from "mongoose";
import { productsModel }from './models/products.model.js'


export default class ManagerProducts {
  
   connection = mongoose.connect('mongodb+srv://garaycarlos:hola123@ecommercefinalproyect.ui8vrwv.mongodb.net/')
 
 
  consultarProductos = async () => {

    let response = await productsModel.find().lean();
    return response;
  };

  crearProducto = async (product) => {
    let result = await productsModel.create(product);
    return result
  
  };

  consultarProductoPorId = async (id) => {
    let response = await productsModel.findOne({ _id: id}).lean();
    return response;
  };

  actualizarProducto = async (id, updateProduct) => {
    let result = await productsModel.updateOne(
      {_id: id},
      { $set: updateProduct}
      )
    return result;

 }

 deleteProductbyId = async (id) => {
  let result = await productsModel.deleteOne({_id: id});
  return result;


};






}