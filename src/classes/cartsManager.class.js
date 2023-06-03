import fs from "fs";
import { v4 as uuidV4 } from "uuid";

const path = "src/classes/files/carts.json";

export default class ManagerCarts {

    constructor() {
        this.products = [];
    }

    consultarCarrito = async () => {
        if (fs.existsSync(path)) {
          const data = await fs.promises.readFile(path, "utf-8");
          const carritos = JSON.parse(data);
          return carritos;
        } else {
         console.log('THERE ARE NOT CARTS');
        }
      };





}