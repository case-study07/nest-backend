import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags, PartialType } from '@nestjs/swagger';
import { UpdateCarBodyEvaluationDTO } from 'src/car-body-evaluation/dto/update-carbodyevaluation.dto';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { CarBodyNumberService } from './car-body-number.service';
import {
  CreateCarBodyNumberDTO,
  CreateCarBodyNumberForeignKeyDTO,
} from './dto/create.car-body-number.dto';
import { UpdateCarBodyNumberDTO } from './dto/update.car-body-number.dto';
import { ConvertIntPipe } from './pipe/convertInt.pipe';

@ApiTags('車体')
@Controller('car-body-number')
export class CarBodyNumberController {
  constructor(private readonly carBodyNumberService: CarBodyNumberService) {}

  @Get()
  fetchAll() {
    return this.carBodyNumberService.findAll();
  }

  @Post()
  create(
    @Body() createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    @Query(ConvertIntPipe) foreignKey: CreateCarBodyNumberForeignKeyDTO,
  ) {
    return this.carBodyNumberService.create(createCarBodyNumberDTO, foreignKey);
  }

  @Get(':carBodyNumberId')
  findOneID(@Param('carBodyNumberId') id: string) {
    return this.carBodyNumberService.findOneID(+id);
  }

  @ApiQuery({ type: PartialType(UpdateCarBodyNumberDTO), required: false })
  @Get('search')
  search(
    @Body() attrs: Partial<UpdateCarBodyNumberDTO | UpdateCarBodyEvaluationDTO>,
  ) {
    return this.carBodyNumberService.findWhere(attrs);
  }

  @Patch(':carBodyNumberId')
  update(@Param('carBodyNumberId') id: string, attrs: Partial<CarBodyNumber>) {
    return this.carBodyNumberService.update(+id, attrs);
  }

  @Delete(':carBodyNumberId')
  delete(@Param('carBodyNumberId') id: string) {
    return this.carBodyNumberService.softDelete(+id);
  }
}
