import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { AuctionListing } from './auction.listing.entity';
import { DeliveryMethod } from './delivery.method.entity';

import { Option } from '../enum/option.enum';
import { PaymentMethod } from '../enum/paymentMethod.enum';

@Entity()
export class AfterSuccessfulBid {
  //落札後

  @PrimaryGeneratedColumn()
  id: number;

  //オークション出品車
  @ManyToOne(
    () => AuctionListing,
    (auctionListing) => auctionListing.afterSuccessfulBid,
  )
  auctionListingId: number;

  //オプション ＊変更
  @Column()
  option: Option;

  //配送
  @ManyToOne(() => DeliveryMethod, (delivery) => delivery.afterSuccessfulBid)
  deliveryId: number;

  //フェリー
  @Column()
  isFerry: boolean;

  //支払い方法 ＊変更
  @Column()
  paymentMethod: PaymentMethod;

  //入金
  @Column()
  isPayment: boolean;

  //納品
  @Column()
  isDelivery: boolean;

  //キャンセル
  @Column()
  isCancelled: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
