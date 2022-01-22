import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiQuery, ApiTags, PartialType } from '@nestjs/swagger';
import { GetMember } from 'src/auth/decorator/member.decorator';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { AuctionSituation } from 'src/entity/auction.situation.entity';
import { AuctionSituationService } from './auction-situation.service';
import { CreateAuctionSituationDTO } from './dto/create.auction-situation.dto';
import { UpdateAuctionSituationDTO } from './dto/update.auction-situation.dto';

@ApiTags('オークション状況')
@Controller('auction-situation')
export class AuctionSituationController {
  constructor(
    private readonly auctionSituationService: AuctionSituationService,
  ) {}
  @Get()
  findAll() {
    return this.auctionSituationService.findAll();
  }

  @Post(':auctionListingID')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Param('auctionListingID') auctionListingID: string,
    @Body() body: CreateAuctionSituationDTO,
    @GetMember() payloadMember: PayLoad,
  ) {
    return this.auctionSituationService.create(
      body,
      payloadMember,
      +auctionListingID,
    );
  }

  @ApiQuery({ type: PartialType(CreateAuctionSituationDTO), required: false })
  @Get('search')
  search(@Query() attrs: Partial<AuctionSituation>) {
    return this.auctionSituationService.findWhere(attrs);
  }

  @Get(':auctionListingID')
  findOneId(@Param('auctionListingID') id: string) {
    return this.auctionSituationService.findOneId(+id);
  }

  @Patch(':auctionListingID')
  update(
    @Param('auctionListingID') id: string,
    @Body() body: UpdateAuctionSituationDTO,
  ) {
    return this.auctionSituationService.update(+id, body);
  }

  @Delete(':auctionListingID')
  delete(@Param('auctionListingID') id: string) {
    return this.auctionSituationService.softDelete(+id);
  }
}
