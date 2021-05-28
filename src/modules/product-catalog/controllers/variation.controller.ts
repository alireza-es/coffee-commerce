import { Controller, Get, Query } from '@nestjs/common';
import { Variation } from '../models';
import { VariationService } from '../services';

@Controller('variation')
export class VariationController {
  constructor(private variationService: VariationService) { }
  @Get()
  async getVariations(@Query('product') productName: string, @Query('filter') filter: string): Promise<Variation[]> {
    let options: {
      [k: string]:
      | boolean
      | string
      | number;
    };
    if (filter)
      options = JSON.parse(filter);
    return await this.variationService.loadVariations(productName, options);
  }
}
