import { ObjectId } from "mongodb";
import ProductModel from "../schema/product.shema.js";

export default class ProductService {
  constructor() {}

  async add(product) {
    await ProductModel.create(product);
  }

  async findAll() {
    return await ProductModel.find({});
  }

  async findById(id) {
    return await ProductModel.findById(id);
  }

  async sell(productIds) {
    for (const productId of productIds) {
      const product = await this.findById(productId);
      if(product){
        product.stock = product.stock - 1;
        await ProductModel.updateOne({ _id: product.id}, product);
      }
      console.log(product);
    }
    return 'sucesso';
  }

}
