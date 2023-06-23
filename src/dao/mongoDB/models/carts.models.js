import mongoose from "mongoose";

const Collection = 'carts';

const cartSchema = new mongoose.Schema({
       products :{
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'products'
                }
            }
        ]
       }
});

const cartModel = mongoose.model(Collection, cartSchema);
export default cartModel;
