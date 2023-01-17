import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './entities/product.repository';

@Injectable()
export class ProductService {

  private logger = new Logger(ProductService.name);
  constructor(private productRepository: ProductRepository) {}
  create(createProductDto: CreateProductDto) {
    console.log({ ...createProductDto });

    if (createProductDto.id === '5') {
      throw new BadRequestException('No debe enviar el ID 5');
    }

    this.logger.verbose('WIIIII pase!!!');

    return this.productRepository.save(createProductDto);
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
