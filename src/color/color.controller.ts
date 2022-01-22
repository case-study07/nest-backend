import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ColorService } from './color.service';
import { CreateColorDTO } from './dto/create.color.dto';

@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  findAll() {
    return this.colorService.findAll();
  }

  @Post()
  create(@Body() body: CreateColorDTO) {
    return this.colorService.create(body);
  }

  @Get(':colorId')
  findOne(@Param('colorId') id: string) {
    return this.colorService.findOneID(+id);
  }
}
