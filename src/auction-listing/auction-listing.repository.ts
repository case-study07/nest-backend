import { NotFoundException } from '@nestjs/common';
import { Auction } from 'src/entity/auction.entity';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { Members } from 'src/entity/members.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAuctionListingDTO } from './dto/create.auction-listing.dto';

@EntityRepository(AuctionListing)
export class AuctionListingRepository extends Repository<AuctionListing> {
  // Createの操作
  async createAuctionListing(
    createAuctionListingDTO: CreateAuctionListingDTO,
    member: Members,
    auction: Auction,
    carBodyNumber: CarBodyNumber,
  ) {
    const auctionListing = this.create({
      ...createAuctionListingDTO,
      member,
      auction,
      carBodyNumber,
    });
    await this.save(auctionListing);
    return auctionListing;
  }

  // findOne
  async findOneAuctionListing(attrs: Partial<AuctionListing>) {
    const auctionListing = await this.findOne({
      where: attrs,
      relations: [
        'member',
        'auction',
        'auctionSituation',
        'auctionSituation.member',
        'carBodyNumber',
      ],
    });
    if (!auctionListing) {
      throw new NotFoundException('AuctionListing Not Found');
    }
    return auctionListing;
  }

  // findWhere
  async findWhereLikeAuctionListing(attrs: Partial<AuctionListing>) {
    for (const key in attrs) {
      attrs[key] = ILike('%' + attrs[key] + '%');
    }
    const auctionListings = await this.find({
      where: attrs,
      relations: [
        'member',
        'auction',
        'auctionSituation',
        'auctionSituation.member',
        'carBodyNumber',
      ],
    });
    if (!auctionListings) {
      throw new NotFoundException('AuctionListing Not Found');
    }
    return auctionListings;
  }

  // update
  async updateAuctionListing(id: number, attrs: Partial<AuctionListing>) {
    const auctionListing = await this.findOneAuctionListing({ id });
    Object.assign(auctionListing, attrs);
    await this.save(auctionListing);
    return auctionListing;
  }

  // softDelete
  async softDeleteAuctionListing(id: number) {
    const auctionListing = await this.findOneAuctionListing({ id });
    await this.softRemove(auctionListing);
    return auctionListing;
  }
}
