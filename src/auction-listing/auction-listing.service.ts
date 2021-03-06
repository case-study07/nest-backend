import { Injectable } from '@nestjs/common';
import { AuctionListingRepository } from './auction-listing.repository';
import { CreateAuctionListingDTO } from './dto/create.auction-listing.dto';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { MembersService } from 'src/members/members.service';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { CarBodyNumberService } from 'src/car-body-number/car-body-number.service';
import { AuctionService } from 'src/auction/auction.service';
import { UpdateListingCarDTO } from 'src/listing-car/dto/update.listing-car.dto';
import { UpdateAuctionListingDTO } from './dto/update.auction-listing.dto';

@Injectable()
export class AuctionListingService {
  constructor(
    private auctionListingRepository: AuctionListingRepository,
    private membersService: MembersService,
    private carBodyNumberService: CarBodyNumberService,
    private auctionService: AuctionService,
  ) {}

  async findAll() {
    const auctionListings = await this.auctionListingRepository.find({
      relations: [
        'member',
        'auction',
        'auctionSituation',
        'auctionSituation.member',
        'carBodyNumber',
      ],
    });
    auctionListings.map((auctionListing) => {
      Object.assign(auctionListing, {
        auctionSituationCount: auctionListing.auctionSituation.length,
      });
    });
    return auctionListings;
  }

  async create(
    createAuctionListingDTO: CreateAuctionListingDTO,
    payLoad: PayLoad,
    auctionId: number,
    carBodyNumberID: number,
  ) {
    const member = await this.membersService.findOne({ email: payLoad.email });
    const carBodyNumber = await this.carBodyNumberService.findOneID(
      carBodyNumberID,
    );
    const auction = await this.auctionService.findOneId(auctionId);
    const res = await this.auctionListingRepository.createAuctionListing(
      createAuctionListingDTO,
      member,
      auction,
      carBodyNumber,
    );
    return this.findOneID(res.id);
  }

  async findOneID(id: number) {
    const auctionListing =
      await this.auctionListingRepository.findOneAuctionListing({ id });
    Object.assign(auctionListing, {
      auctionSituationCount: auctionListing.auctionSituation.length,
    });
    return auctionListing;
  }

  async findOne(attrs: Partial<AuctionListing>) {
    return await this.auctionListingRepository.findOneAuctionListing(attrs);
  }

  async findWhere(attrs: Partial<AuctionListing>) {
    const auctionListings =
      await this.auctionListingRepository.findWhereLikeAuctionListing(attrs);
    auctionListings.map((auctionListing) => {
      Object.assign(auctionListing, {
        auctionSituationCount: auctionListing.auctionSituation.length,
      });
    });
    return auctionListings;
  }

  // update
  async update(id: number, attrs: UpdateAuctionListingDTO) {
    return await this.auctionListingRepository.updateAuctionListing(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.auctionListingRepository.softDeleteAuctionListing(id);
  }
}
