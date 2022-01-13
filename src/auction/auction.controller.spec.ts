import { Test } from '@nestjs/testing';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';

describe('CatsController', () => {
  let auctionController: AuctionController;
  let auctionService: AuctionService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AuctionController],
      providers: [AuctionService],
    }).compile();

    auctionService = moduleRef.get<AuctionService>(AuctionService);
    auctionController = moduleRef.get<AuctionController>(AuctionController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      let result: any;
      jest.spyOn(auctionService, 'fetchAll').mockImplementation(() => result);

      expect(await auctionController.fetchAll()).toBe(result);
    });
  });
});
