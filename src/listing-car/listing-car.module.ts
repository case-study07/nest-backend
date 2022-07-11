import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdditionModule } from 'src/addition/addition.module';
import { CarBodyEvaluationModule } from 'src/car-body-evaluation/car-body-evaluation.module';
import { CarBodyImageModule } from 'src/car-body-image/car-body-image.module';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { ExhibitorEntryModule } from 'src/exhibitor-entry/exhibitor-entry.module';
import { InspectionModule } from 'src/inspection/inspection.module';
import { PaperClassModule } from 'src/paper-class/paper-class.module';
import { SalesPointModule } from 'src/sales-point/sales-point.module';
import { SuggestedListingModule } from 'src/suggested-listing/suggested-listing.module';
import { ListingCarController } from './listing-car.controller';
import { ListingCarRepository } from './listing-car.repository';
import { ListingCarService } from './listing-car.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ListingCarRepository]),
    SalesPointModule,
    CarBodyImageModule,
    AdditionModule,
    CarBodyEvaluationModule,
    InspectionModule,
    SuggestedListingModule,
    PaperClassModule,
    ExhibitorEntryModule,
    CarBodyNumberModule,
  ],
  controllers: [ListingCarController],
  providers: [ListingCarService],
  exports: [ListingCarService],
})
export class ListingCarModule {}
