import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateImportedCarDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
