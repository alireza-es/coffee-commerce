import { Product } from "../models";

const products: Product[] = [
  {
    name: 'Coffee Machine',
    productOptionGroup: [{
      name: 'product_type',
      options: ['COFFEE_MACHINE_LARGE', 'COFFEE_MACHINE_SMALL', 'ESPRESSO_MACHINE']
    }, {
      name: 'water_line_compatible',
      options: [true, false]
    }
    ],
    variations: [
      {
        SKU: 'CM001',
        name: 'small machine, base model',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'COFFEE_MACHINE_SMALL',
          water_line_compatible: false
        }
      },
      {
        SKU: 'CM002',
        name: 'small machine, premium model',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'COFFEE_MACHINE_SMALL',
          water_line_compatible: false
        }
      },
      {
        SKU: 'CM003',
        name: 'small machine, deluxe model, water line compatible',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'COFFEE_MACHINE_SMALL',
          water_line_compatible: true
        }
      },
      {
        SKU: 'CM101',
        name: 'large machine, base model',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'COFFEE_MACHINE_LARGE',
          water_line_compatible: false
        }
      },
      {
        SKU: 'CM102',
        name: 'large machine, premium model, water line compatible',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'COFFEE_MACHINE_LARGE',
          water_line_compatible: true
        }
      },
      {
        SKU: 'CM103',
        name: 'large machine, deluxe model, water line compatible',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'COFFEE_MACHINE_LARGE',
          water_line_compatible: true
        }
      },
      {
        SKU: 'EM001',
        name: 'espresso machine, base model',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'ESPRESSO_MACHINE',
          water_line_compatible: false
        }
      },
      {
        SKU: 'EM002',
        name: 'espresso machine, premium model',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'ESPRESSO_MACHINE',
          water_line_compatible: false
        }
      },
      {
        SKU: 'EM003',
        name: 'espresso machine, deluxe model, water line compatible',
        price: 100,
        quantity: 10,
        productOptions: {
          product_type: 'ESPRESSO_MACHINE',
          water_line_compatible: true
        }
      },
    ]
  },
  {
    name: 'Coffee Pods',
    productOptionGroup: [{
      name: 'product_type',
      options: ['COFFEE_POD_LARGE', 'COFFEE_POD_SMALL', 'ESPRESSO_POD']
    }, {
      name: 'coffee_flavor',
      options: ['COFFEE_FLAVOR_VANILLA', 'COFFEE_FLAVOR_CARAMEL', 'COFFEE_FLAVOR_PSL', 'COFFEE_FLAVOR_MOCHA', 'COFFEE_FLAVOR_HAZELNUT']
    }, {
      name: 'pack_size',
      options: ['1 dozen (12)', '3 dozen (36)', '5 dozen (60)', '7 dozen (84)']
    }],
    variations: [
      {
        SKU: 'CP001',
        name: 'small coffee pod, 1 dozen, vanilla',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP003',
        name: 'small coffee pod, 3 dozen, vanilla',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP011',
        name: 'small coffee pod, 1 dozen, caramel',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP013',
        name: 'small coffee pod, 3 dozen, caramel',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP021',
        name: 'small coffee pod, 1 dozen, psl',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_PSL',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP023',
        name: 'small coffee pod, 3 dozen, psl',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_PSL',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP031',
        name: 'small coffee pod, 1 dozen, mocha',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP033',
        name: 'small coffee pod, 3 dozen, mocha',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP041',
        name: 'small coffee pod, 1 dozen, hazelnut',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP043',
        name: 'small coffee pod, 3 dozen, hazelnut',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_SMALL',
          coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP101',
        name: 'large coffee pod, 1 dozen, vanilla',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP103',
        name: 'large coffee pod, 3 dozen, vanilla',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP111',
        name: 'large coffee pod, 1 dozen, caramel',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP113',
        name: 'large coffee pod, 3 dozen, caramel',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP121',
        name: 'large coffee pod, 1 dozen, psl',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_PSL',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP123',
        name: 'large coffee pod, 3 dozen, psl',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_PSL',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP131',
        name: 'large coffee pod, 1 dozen, mocha',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP133',
        name: 'large coffee pod, 3 dozen, mocha',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_MOCHA',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'CP141',
        name: 'large coffee pod, 1 dozen, hazelnut',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
          pack_size: '1 dozen (12)'
        }
      },
      {
        SKU: 'CP143',
        name: 'large coffee pod, 3 dozen, hazelnut',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'COFFEE_POD_LARGE',
          coffee_flavor: 'COFFEE_FLAVOR_HAZELNUT',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'EP003',
        name: 'espresso pod, 3 dozen, vanilla',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'ESPRESSO_POD',
          coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'EP005',
        name: 'espresso pod, 5 dozen, vanilla',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'ESPRESSO_POD',
          coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
          pack_size: '5 dozen (60)'
        }
      },
      {
        SKU: 'EP007',
        name: 'espresso pod, 7 dozen, vanilla',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'ESPRESSO_POD',
          coffee_flavor: 'COFFEE_FLAVOR_VANILLA',
          pack_size: '7 dozen (84)'
        }
      },
      {
        SKU: 'EP013',
        name: 'espresso pod, 3 dozen, caramel',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'ESPRESSO_POD',
          coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
          pack_size: '3 dozen (36)'
        }
      },
      {
        SKU: 'EP015',
        name: 'espresso pod, 5 dozen, caramel',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'ESPRESSO_POD',
          coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
          pack_size: '5 dozen (60)'
        }
      },
      {
        SKU: 'EP017',
        name: 'espresso pod, 7 dozen, caramel',
        price: 150,
        quantity: 25,
        productOptions: {
          product_type: 'ESPRESSO_POD',
          coffee_flavor: 'COFFEE_FLAVOR_CARAMEL',
          pack_size: '7 dozen (84)'
        }
      }
    ]
  }
];

export {
  products
};
