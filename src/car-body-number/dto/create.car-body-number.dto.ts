import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
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

export class CreateCarBodyNumberDTO {
  @ApiProperty({
    description: 'ドア数',
    default: 4,
  })
  @IsNumber()
  doorNumber: number;

  @ApiProperty({
    description: 'グレード',
    default: 'RS-FOURZMR',
  })
  @IsString()
  grade: string;

  @ApiProperty({
    description: '型式',
    default: 'E-WGNC34',
  })
  @IsString()
  format: string;

  @ApiProperty({
    description: '排気量',
    default: 2500,
  })
  @IsString()
  engineSize: string;

  @ApiProperty({
    description: '年式',
    default: 10,
  })
  @IsNumber()
  modelYear: number;

  @ApiProperty({
    description: 'カラーNo.',
    default: 199,
  })
  @IsNumber()
  colorNo: number;

  @ApiProperty({
    description: '車体番号',
    default: 106566,
  })
  @IsNumber()
  carBodyNumber: number;

  @ApiProperty({
    description: '乗員数',
    default: 4,
  })
  @IsNumber()
  crewNumber: number;

  @ApiProperty({
    enum: EvaluationPoint,
    description: '評価点',
  })
  @IsEnum(EvaluationPoint)
  evaluationPoint: EvaluationPoint;

  @ApiProperty({
    type: [CreateSalesPointDTO],
    description: 'セールスポイント',
  })
  @Type(() => CreateSalesPointDTO)
  @ValidateNested()
  salesPoint?: SalesPoint[];

  @ApiProperty({
    enum: Cigarette,
    description: 'タバコ',
  })
  @IsEnum(Cigarette)
  cigarette: Cigarette;

  @ApiProperty({
    enum: MeterExchangeHistory,
    description: 'メーター交換歴',
  })
  @IsEnum(MeterExchangeHistory)
  meterExchangeHistory: MeterExchangeHistory;

  @ApiProperty({
    enum: ScratchEvaluation,
    description: 'キズ評価',
  })
  @IsEnum(ScratchEvaluation)
  scratchEvaluation: ScratchEvaluation;

  @ApiProperty({
    type: [CreateCarBodyImageDTO],
    description: '車体画像',
  })
  @Type(() => CreateCarBodyImageDTO)
  @ValidateNested()
  CarBodyImage?: CarBodyImage[];

  @ApiProperty({
    enum: CarHistory,
    description: '車歴',
  })
  @IsEnum(CarHistory)
  CarHistory: CarHistory;

  @ApiProperty({
    description: '車検',
    default: '自家用車',
  })
  @IsString()
  carInspection: string;

  @ApiProperty({
    description: '仕入れ額',
    default: '10000',
  })
  @IsNumber()
  suggestedAmount: number;

  @ApiProperty({
    description: '走行距離',
    default: '10000',
  })
  @IsNumber()
  mileage: number;

  @ApiProperty({
    description: '外装:評価',
    enum: ScratchEvaluation,
  })
  @IsEnum(ScratchEvaluation)
  exterior: ScratchEvaluation;

  //内装
  @ApiProperty({
    description: '内装:評価',
    enum: ScratchEvaluation,
  })
  @IsEnum(ScratchEvaluation)
  interior: ScratchEvaluation;

  //色替
  @ApiProperty({
    description: '色替:色を変えたことがあるか',
    default: false,
  })
  @IsBoolean()
  IschangeColor: boolean;

  //希望出品１
  @ApiProperty({
    description: '希望出品1:ユーザー、グリーン',
    default: 'ユーザー',
  })
  @IsString()
  SuggestedListingOne: string;

  @ApiProperty({
    type: CreateSuggestedListingDTO,
    description: '希望出品2',
  })
  @Type(() => CreateSuggestedListingDTO)
  @ValidateNested()
  SuggestedListing?: SuggestedListing;

  @ApiProperty({
    type: CreateAdditionDTO,
    description: '付加情報',
  })
  @Type(() => CreateAdditionDTO)
  @ValidateNested()
  Addition?: Addition;

  @ApiProperty({
    type: CreateCarBodyEvaluationDTO,
    description: '車体情報',
  })
  @Type(() => CreateCarBodyEvaluationDTO)
  @ValidateNested()
  CarBodyEvaluation?: CarBodyEvaluation;

  @ApiProperty({
    type: CreateInspectionDTO,
    description: '検査',
  })
  @Type(() => CreateInspectionDTO)
  @ValidateNested()
  Inspection?: Inspection;

  @ApiProperty({
    type: CreatePaperClassDTO,
    description: '紙類',
  })
  @Type(() => CreatePaperClassDTO)
  @ValidateNested()
  PaperClass?: PaperClass;

  @ApiProperty({
    type: CreateExhibitorEntryDTO,
    description: '出品者記入',
  })
  @Type(() => CreateExhibitorEntryDTO)
  @ValidateNested()
  ExhibitorEntry?: ExhibitorEntry;
}

export class CreateCarBodyNumberForeignKeyDTO {
  @ApiProperty({
    description: 'メーカーID',
    default: 1,
  })
  @IsString()
  makerId: number;

  @ApiProperty({
    description: '車種名ID',
    default: 1,
  })
  @IsString()
  carModelId: number;

  @ApiProperty({
    description: '形状ID',
    default: 1,
  })
  @IsString()
  shapeId: number;

  @ApiProperty({
    description: '燃料ID',
    default: 1,
  })
  @IsString()
  fuelId: number;

  @ApiProperty({
    description: '外装色ID',
    default: 1,
  })
  @IsString()
  exteriorColorId: number;

  @ApiProperty({
    description: '内装色ID',
    default: 1,
  })
  @IsString()
  interiorColorId: number;

  @ApiProperty({
    description: 'シフトID',
    default: 1,
  })
  @IsString()
  shiftId: number;

  @ApiProperty({
    description: 'ギアID',
    default: 1,
  })
  @IsString()
  gearId: number;

  @ApiProperty({
    description: 'エアコンID',
    default: 1,
  })
  @IsString()
  airConditonerId: number;

  @ApiProperty({
    description: '輸入車ID',
    default: 1,
  })
  @IsString()
  importedCarId: number;

  @ApiProperty({
    description: 'ハンドルID',
    default: 1,
  })
  @IsString()
  handleId: number;

  @ApiProperty({
    description: 'エアバックID',
    default: 1,
  })
  @IsString()
  airBackId: number;
}
