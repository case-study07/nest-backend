import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionModule } from './auction/auction.module';
import { MembersModule } from './members/members.module';
import { AuthModule } from './auth/auth.module';
import { ListingCarModule } from './listing-car/listing-car.module';
import { InspectionModule } from './inspection/inspection.module';
import { CarBodyEvaluationModule } from './car-body-evaluation/car-body-evaluation.module';
import { AdditionModule } from './addition/addition.module';
import { SalesPointModule } from './sales-point/sales-point.module';
import { CarBodyImageModule } from './car-body-image/car-body-image.module';
import { PaperClassModule } from './paper-class/paper-class.module';
import { SuggestedListingModule } from './suggested-listing/suggested-listing.module';
import { AuctionSituationModule } from './auction-situation/auction-situation.module';
import { PriceModule } from './price/price.module';
import { AuctionListingModule } from './auction-listing/auction-listing.module';
import { AfterSuccessfulBidModule } from './after-successful-bid/after-successful-bid.module';
import { AdminModule } from './admin/admin.module';
import { CarModelModule } from './car-model/car-model.module';
import { GearModule } from './gear/gear.module';
import { AirConditionerModule } from './air-conditioner/air-conditioner.module';
import { ShapeModule } from './shape/shape.module';
import { HandleModule } from './handle/handle.module';
import { MakerModule } from './maker/maker.module';
import { ImportedCarModule } from './imported-car/imported-car.module';
import { ColorModule } from './color/color.module';
import { FuelModule } from './fuel/fuel.module';
import { ShiftModule } from './shift/shift.module';
import { AirBackModule } from './air-back/air-back.module';
import { ExhibitorEntryModule } from './exhibitor-entry/exhibitor-entry.module';
import { CarBodyNumberModule } from './car-body-number/car-body-number.module';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseManagementModule } from './purchase-management/purchase-management.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuctionModule,
    MembersModule,
    AuthModule,
    ListingCarModule,
    InspectionModule,
    CarBodyEvaluationModule,
    AdditionModule,
    SalesPointModule,
    CarBodyImageModule,
    PaperClassModule,
    SuggestedListingModule,
    AuctionSituationModule,
    PriceModule,
    AuctionListingModule,
    AfterSuccessfulBidModule,
    AdminModule,
    PurchaseModule,
    CarModelModule,
    GearModule,
    AirConditionerModule,
    ShapeModule,
    HandleModule,
    MakerModule,
    ImportedCarModule,
    ColorModule,
    FuelModule,
    ShiftModule,
    AirBackModule,
    ExhibitorEntryModule,
    CarBodyNumberModule,
    PurchaseManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
