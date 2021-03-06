import { NotFoundException } from '@nestjs/common';
import e from 'express';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, ILike, LessThanOrEqual, Repository } from 'typeorm';
import { CreateListingCarDTO } from './dto/create.listing-car.dto';
import { UpdateListingCarDTO } from './dto/update.listing-car.dto';

@EntityRepository(ListingCar)
export class ListingCarRepository extends Repository<ListingCar> {
  async createListingCar(
    createListingCarDTO: CreateListingCarDTO,
    carBodyNumber: CarBodyNumber,
  ) {
    const listingCar = {
      ...createListingCarDTO,
      carBodyNumber,
    };
    await this.save(listingCar);
    return listingCar;
  }

  async findOneListingCar(attrs: Partial<ListingCar>) {
    const listingCar = await this.findOne({
      where: attrs,
      relations: [
        'CarBodyImage',
        'salesPoint',
        'addition',
        'testingRecord',
        'exhibitorEntry',
        'paperClass',
        'carBodyNumber',
        'carBodyNumber.maker',
        'carBodyNumber.carModel',
        'carBodyNumber.shape',
        'carBodyNumber.fuel',
        'carBodyNumber.exteriorColor',
        'carBodyNumber.interiorColor',
        'carBodyNumber.shift',
        'carBodyNumber.gear',
        'carBodyNumber.airConditoner',
        'carBodyNumber.importedCar',
        'carBodyNumber.handle',
      ],
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
      if (!isNaN(attrs[key])) {
        parseAttrs[key] = LessThanOrEqual(attrs[key]);
      }
    }
    const listingCars = await this.find({
      where: parseAttrs,
      relations: [
        'CarBodyImage',
        'salesPoint',
        'addition',
        'testingRecord',
        'exhibitorEntry',
        'paperClass',
        'carBodyNumber',
        'carBodyNumber.maker',
        'carBodyNumber.carModel',
        'carBodyNumber.shape',
        'carBodyNumber.fuel',
        'carBodyNumber.exteriorColor',
        'carBodyNumber.interiorColor',
        'carBodyNumber.shift',
        'carBodyNumber.gear',
        'carBodyNumber.airConditoner',
        'carBodyNumber.importedCar',
        'carBodyNumber.handle',
      ],
    });
    if (!listingCars) {
      throw new NotFoundException('ListingCar Not Found');
    }
    return listingCars;
  }

  async updateListingCar(id: number, afterAttrs: UpdateListingCarDTO) {
    const listingCar = await this.findOneListingCar({
      id,
    });
    Object.assign(listingCar, afterAttrs);
    await this.save(listingCar);
    return listingCar;
  }

  async softDeleteListingCar(id: number) {
    const listingCar = await this.findOneListingCar({ id });
    await this.softDelete(listingCar);
    return listingCar;
  }
}
