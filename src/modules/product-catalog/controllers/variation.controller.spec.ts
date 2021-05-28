import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { VariationController } from '.';
import { ProductCatalogModule } from '../product-catalog.module';
import { VariationService } from '../services';

describe('VariationController', () => {
  let app: INestApplication;
  let controller: VariationController;
  let variationService: VariationService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ProductCatalogModule],
    })
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('All large machines', async () => {
    //arrange
    const options: {
      [k: string]:
      | boolean
      | string
      | number;
    } = {
      product_type: 'COFFEE_MACHINE_LARGE'
    };
    const product_name = 'Coffee Machine';
    const expected = ['CM101', 'CM102', 'CM103'];

    //act
    const variations = await variationService.loadVariations(product_name, options);
    const actual = variations.map(x => x.SKU);

    //check
    expect(actual).toBe(expected);
  });
});

