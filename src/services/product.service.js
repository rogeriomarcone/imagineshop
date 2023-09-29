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

}
