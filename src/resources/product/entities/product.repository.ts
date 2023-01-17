import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async save(product: any) {
    try {
      return await this.productModel.create(product);
    } catch (error) {
      throw new InternalServerErrorException('Error saving in mongoDB');
    }
  }
}
