import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VariationService } from '.';
import { ProductEntity } from '../entities';
import { Product } from '../models';
import { products } from '../seeds/products.data';

describe('VariationService', () => {
  let service: VariationService;
  let repository: Repository<Product>;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [VariationService,
        {
          provide: getRepositoryToken(ProductEntity),
          useClass: Repository
        }
      ]
    }).compile();
    service = moduleRef.get<VariationService>(VariationService);
    repository = moduleRef.get<Repository<Product>>(getRepositoryToken(ProductEntity));

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
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

    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(products.filter(x => x.name == product_name)[0]);


    //act
    const variations = await service.loadVariations(product_name, options);
    const actual = variations.map(x => x.SKU);

    //check
    expect(actual).toEqual(expected);
  });

  it('All large pods', async () => {
    //arrange
    const options: {
      [k: string]:
      | boolean
      | string
      | number;
    } = {
      product_type: 'COFFEE_POD_LARGE'
    };
    const product_name = 'Coffee Pods';
    const expected = ['CP101', 'CP103', 'CP111', 'CP113', 'CP121', 'CP123', 'CP131', 'CP133', 'CP141', 'CP143'];

    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(products.filter(x => x.name == product_name)[0]);


    //act
    const variations = await service.loadVariations(product_name, options);
    const actual = variations.map(x => x.SKU);

    //check
    expect(actual).toEqual(expected);
  });

  it('All espresso vanilla pods', async () => {
    //arrange
    const options: {
      [k: string]:
      | boolean
      | string
      | number;
    } = {
      product_type: 'ESPRESSO_POD',
      coffee_flavor: 'COFFEE_FLAVOR_VANILLA'
    };
    const product_name = 'Coffee Pods';
    const expected = ['EP003', 'EP005', 'EP007'];

    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(products.filter(x => x.name == product_name)[0]);


    //act
    const variations = await service.loadVariations(product_name, options);
    const actual = variations.map(x => x.SKU);

    //check
    expect(actual).toEqual(expected);
  });

  it('All espresso machines', async () => {
    //arrange
    const options: {
      [k: string]:
      | boolean
      | string
      | number;
    } = {
      product_type: 'ESPRESSO_MACHINE'
    };
    const product_name = 'Coffee Machine';
    const expected = ['EM001', 'EM002', 'EM003'];

    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(products.filter(x => x.name == product_name)[0]);


    //act
    const variations = await service.loadVariations(product_name, options);
    const actual = variations.map(x => x.SKU);

    //check
    expect(actual).toEqual(expected);
  });
  it('All small pods', async () => {
    //arrange
    const options: {
      [k: string]:
      | boolean
      | string
      | number;
    } = {
      product_type: 'COFFEE_POD_SMALL'
    };
    const product_name = 'Coffee Pods';
    const expected = ['CP001', 'CP003', 'CP011', 'CP013', 'CP021', 'CP023', 'CP031', 'CP033', 'CP041', 'CP043'];

    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(products.filter(x => x.name == product_name)[0]);


    //act
    const variations = await service.loadVariations(product_name, options);
    const actual = variations.map(x => x.SKU);

    //check
    expect(actual).toEqual(expected);
  });
  it('All pods in 7 dozen packs', async () => {
    //arrange
    const options: {
      [k: string]:
      | boolean
      | string
      | number;
    } = {
      pack_size: '7 dozen (84)'
    };
    const product_name = 'Coffee Pods';
    const expected = ['EP007', 'EP017'];

    jest.spyOn(repository, 'findOne').mockResolvedValueOnce(products.filter(x => x.name == product_name)[0]);


    //act
    const variations = await service.loadVariations(product_name, options);
    const actual = variations.map(x => x.SKU);

    //check
    expect(actual).toEqual(expected);
  });
});

