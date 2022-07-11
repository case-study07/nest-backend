import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAdditionDTO } from 'src/addition/dto/create-addition.dto';
import { CreateCarBodyEvaluationDTO } from 'src/car-body-evaluation/dto/create-carbodyevaluation.dto';
import { CreateCarBodyImageDTO } from 'src/car-body-image/dto/create.carbodyimage.dto';
import { Addition } from 'src/entity/addition.entity';
import { CarBodyEvaluation } from 'src/entity/car.body.evaluation.entity';
import { CarBodyImage } from 'src/entity/car.body.image.entity';
import { ExhibitorEntry } from 'src/entity/exhibitor.entry.entity';
import { Inspection } from 'src/entity/inspection.entity';
import { PaperClass } from 'src/entity/paper.class.entity';
import { SalesPoint } from 'src/entity/sales.point.entity';
import { SuggestedListing } from 'src/entity/suggested.listing.entity';
import { TestingRecord } from 'src/entity/testing.record.entity';
import { CarHistory } from 'src/enum/car.history.enum';
import { Cigarette } from 'src/enum/cigarette.enum';
import { EvaluationPoint } from 'src/enum/evaluationPoint.enum';
import { MeterExchangeHistory } from 'src/enum/meterExchangeHistory.enum';
import { ScratchEvaluation } from 'src/enum/scratchEvaluation.enum';
import { CreateExhibitorEntryDTO } from 'src/exhibitor-entry/dto/create.exhibitor-entry.dto';
import { CreateInspectionDTO } from 'src/inspection/dto/create-inspection.dto';
import { CreatePaperClassDTO } from 'src/paper-class/dto/create.paperclass.dto';
import { CreateSalesPointDTO } from 'src/sales-point/dto/create-salespoint.dto';
import { CreateSuggestedListingDTO } from 'src/suggested-listing/dto/create.suggested-listing.dto';

export class UpdateListingCarDTO {
  @ApiProperty({
    enum: EvaluationPoint,
    description: '評価点',
  })
  @IsOptional()
  @IsEnum(EvaluationPoint)
  evaluationPoint: EvaluationPoint;

  @ApiProperty({
    type: [CreateSalesPointDTO],
    description: 'セールスポイント',
  })
  @IsOptional()
  @Type(() => CreateSalesPointDTO)
  @ValidateNested()
  salesPoint?: SalesPoint[];

  @ApiProperty({
    enum: Cigarette,
    description: 'タバコ',
  })
  @IsOptional()
  @IsEnum(Cigarette)
  cigarette: Cigarette;

  @ApiProperty({
    enum: MeterExchangeHistory,
    description: 'メーター交換歴',
  })
  @IsOptional()
  @IsEnum(MeterExchangeHistory)
  meterExchangeHistory: MeterExchangeHistory;

  @ApiProperty({
    enum: ScratchEvaluation,
    description: 'キズ評価',
  })
  @IsOptional()
  @IsEnum(ScratchEvaluation)
  scratchEvaluation: ScratchEvaluation;

  @ApiProperty({
    type: [CreateCarBodyImageDTO],
    description: '車体画像',
  })
  @IsOptional()
  @Type(() => CreateCarBodyImageDTO)
  @ValidateNested()
  CarBodyImage?: CarBodyImage[];

  @ApiProperty({
    enum: CarHistory,
    description: '車歴',
  })
  @IsOptional()
  @IsEnum(CarHistory)
  CarHistory: CarHistory;

  @ApiProperty({
    description: '車検',
    default: '自家用車',
  })
  @IsOptional()
  @IsString()
  carInspection: string;

  @ApiProperty({
    description: '仕入れ額',
    default: '10000',
  })
  @IsOptional()
  @IsNumber()
  suggestedAmount: number;

  @ApiProperty({
    description: '走行距離',
    default: '10000',
  })
  @IsOptional()
  @IsNumber()
  mileage: number;

  @ApiProperty({
    description: '外装:評価',
    enum: ScratchEvaluation,
  })
  @IsOptional()
  @IsEnum(ScratchEvaluation)
  exterior: ScratchEvaluation;

  //内装
  @ApiProperty({
    description: '内装:評価',
    enum: ScratchEvaluation,
  })
  @IsOptional()
  @IsEnum(ScratchEvaluation)
  interior: ScratchEvaluation;

  //色替
  @ApiProperty({
    description: '色替:色を変えたことがあるか',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  IschangeColor: boolean;

  //希望出品１
  @ApiProperty({
    description: '希望出品1:ユーザー、グリーン1',
    default: 'ユーザー',
  })
  @IsOptional()
  @IsString()
  SuggestedListingOne: string;

  @ApiProperty({
    type: CreateSuggestedListingDTO,
    description: '希望出品2',
  })
  @IsOptional()
  @Type(() => CreateSuggestedListingDTO)
  @ValidateNested()
  SuggestedListing?: SuggestedListing;

  @ApiProperty({
    type: CreateAdditionDTO,
    description: '付加情報',
  })
  @IsOptional()
  @Type(() => CreateAdditionDTO)
  @ValidateNested()
  Addition?: Addition;

  @ApiProperty({
    type: CreateCarBodyEvaluationDTO,
    description: '車体情報',
  })
  @IsOptional()
  @Type(() => CreateCarBodyEvaluationDTO)
  @ValidateNested()
  CarBodyEvaluation?: CarBodyEvaluation;

  @ApiProperty({
    type: CreateInspectionDTO,
    description: '検査',
  })
  @IsOptional()
  @Type(() => CreateInspectionDTO)
  @ValidateNested()
  Inspection?: Inspection;

  @ApiProperty({
    type: CreatePaperClassDTO,
    description: '紙類',
  })
  @IsOptional()
  @Type(() => CreatePaperClassDTO)
  @ValidateNested()
  PaperClass?: PaperClass;

  @ApiProperty({
    type: CreateExhibitorEntryDTO,
    description: '出品者記入',
  })
  @IsOptional()
  @Type(() => CreateExhibitorEntryDTO)
  @ValidateNested()
  ExhibitorEntry?: ExhibitorEntry;
}
