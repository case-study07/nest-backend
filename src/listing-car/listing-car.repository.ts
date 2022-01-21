import { NotFoundException } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateListingCarDTO } from './dto/create.listing-car.dto';

@EntityRepository(ListingCar)
export class ListingCarRepository extends Repository<ListingCar> {
  async createListingCar(createListingCarDTO: CreateListingCarDTO) {
    const listingCar = {
      ...createListingCarDTO,
    };
    await this.save(listingCar);
    return listingCar;
  }

  async findOneListingCar(attrs: Partial<ListingCar>) {
    const listingCar = await this.findOne({
      where: attrs,
      relations: ['salesPoint', 'CarBodyImage'],
    });
    if (!listingCar) {
      throw new NotFoundException('ListingCar Not Found');
    }
    return listingCar;
  }

  async findWhereListingCar(attrs: Partial<ListingCar>) {
    const parseAttrs: Partial<ListingCar> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const listingCars = await this.find({
      where: parseAttrs,
      relations: ['salesPoint', 'CarBodyImage'],
    });
    if (!listingCars) {
      throw new NotFoundException('ListingCar Not Found');
    }
    return listingCars;
  }

  async updateListingCar(id: number, attrs: Partial<ListingCar>) {
    const listingCar = await this.findOneListingCar({ id });
    Object.assign(listingCar, attrs);
    await this.save(listingCar);
    return listingCar;
  }

  async softDeleteListingCar(id: number) {
    const listingCar = await this.findOneListingCar({ id });
    await this.softDelete(listingCar);
    return listingCar;
  }
}
