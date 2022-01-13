import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auction } from '../entity/auction.entity';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';

@Injectable()
export class AuctionService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepo: Repository<Auction>,
  ) {}

  fetchAll() {
    return this.auctionRepo.find();
  }

  create(createAuctionDTO: CreateAuctionDto) {
    const auction = this.auctionRepo.create(createAuctionDTO);
    return this.auctionRepo.save(auction);
  }

  findOne(id: number) {
    const auction = this.auctionRepo.findOne(id);
    if (!auction) {
      throw new NotFoundException('Auction Not Found');
    }
    return auction;
  }

  async update(id: number, attrs: Partial<Auction>) {
    const auction = await this.auctionRepo.findOne({ id });
    if (!auction) {
      throw new NotFoundException('Color Not Found');
    }
    Object.assign(auction, attrs);
    return this.auctionRepo.save(auction);
  }

  async softDelete(id: number) {
    const auction = await this.auctionRepo.findOne(id);
    if (!auction) {
      throw new NotFoundException('Color Not Found');
    }
    return this.auctionRepo.softRemove(auction);
  }
}
