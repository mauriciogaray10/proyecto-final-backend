import express from 'express';
import routerProducts from './routes/products.router.js';
import routerCarts from './routes/cart.router.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products/', routerProducts);
app.use('/carts/', routerCarts)


app.listen(8080, ()=>{
    console.log('server is listening...');
})