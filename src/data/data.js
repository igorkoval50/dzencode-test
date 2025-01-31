export const orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products }
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products }
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products },
  }
]

export const products = [
  {
    id: "product1",
    serialNumber: 1234,
    isNew: 1,
    photo: '/products/product-1.jpg',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 }
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: "product2",
    serialNumber: 1235,
    isNew: 0,
    photo: '/products/product-2.jpg',
    title: 'Product 2',
    type: 'Keyboards',
    specification: 'Specification 2',
    guarantee: {
      start: '2018-07-10 14:15:00',
      end: '2018-07-10 14:15:00'
    },
    price: [
      { value: 150, symbol: 'USD', isDefault: 0 },
      { value: 3000, symbol: 'UAH', isDefault: 1 }
    ],
    order: 2,
    date: '2018-07-10 14:15:00'
  },
  {
    id: "product3",
    serialNumber: 1236,
    isNew: 1,
    photo: '/products/product-3.jpg',
    title: 'Product 3',
    type: 'Speakers',
    specification: 'Specification 3',
    guarantee: {
      start: '2019-08-11 16:20:00',
      end: '2019-08-11 16:20:00'
    },
    price: [
      { value: 80, symbol: 'USD', isDefault: 0 },
      { value: 2200, symbol: 'UAH', isDefault: 1 }
    ],
    order: 3,
    date: '2019-08-11 16:20:00'
  },
  {
    id: "product4",
    serialNumber: 1237,
    isNew: 0,
    photo: '/products/product-4.jpg',
    title: 'Product 4',
    type: 'Headphones',
    specification: 'Specification 4',
    guarantee: {
      start: '2020-09-01 18:30:00',
      end: '2020-09-01 18:30:00'
    },
    price: [
      { value: 50, symbol: 'USD', isDefault: 0 },
      { value: 1500, symbol: 'UAH', isDefault: 1 }
    ],
    order: 4,
    date: '2020-09-01 18:30:00'
  },
  {
    id: "product5",
    serialNumber: 1238,
    isNew: 1,
    photo: '/products/product-5.jpg',
    title: 'Product 5',
    type: 'Monitors',
    specification: 'Specification 5',
    guarantee: {
      start: '2021-10-15 12:45:00',
      end: '2021-10-15 12:45:00'
    },
    price: [
      { value: 120, symbol: 'USD', isDefault: 0 },
      { value: 3200, symbol: 'UAH', isDefault: 1 }
    ],
    order: 5,
    date: '2021-10-15 12:45:00'
  },
  {
    id: "product6",
    serialNumber: 1239,
    isNew: 0,
    photo: '/products/product-6.jpg',
    title: 'Product 6',
    type: 'Mice',
    specification: 'Specification 6',
    guarantee: {
      start: '2022-11-20 13:25:00',
      end: '2022-11-20 13:25:00'
    },
    price: [
      { value: 200, symbol: 'USD', isDefault: 0 },
      { value: 5400, symbol: 'UAH', isDefault: 1 }
    ],
    order: 6,
    date: '2022-11-20 13:25:00'
  },
  {
    id: "product7",
    serialNumber: 1240,
    isNew: 1,
    photo: '/products/product-7.jpg',
    title: 'Product 7',
    type: 'Headphones',
    specification: 'Specification 7',
    guarantee: {
      start: '2023-12-01 15:40:00',
      end: '2023-12-01 15:40:00'
    },
    price: [
      { value: 150, symbol: 'USD', isDefault: 0 },
      { value: 4100, symbol: 'UAH', isDefault: 1 }
    ],
    order: 7,
    date: '2023-12-01 15:40:00'
  },
  {
    id: "product8",
    serialNumber: 1241,
    isNew: 1,
    photo: '/products/product-8.jpg',
    title: 'Product 8',
    type: 'Keyboards',
    specification: 'Specification 8',
    guarantee: {
      start: '2024-01-25 09:55:00',
      end: '2024-01-25 09:55:00'
    },
    price: [
      { value: 70, symbol: 'USD', isDefault: 0 },
      { value: 1800, symbol: 'UAH', isDefault: 1 }
    ],
    order: 8,
    date: '2024-01-25 09:55:00'
  },
  {
    id: "product9",
    serialNumber: 1242,
    isNew: 0,
    photo: '/products/product-9.jpg',
    title: 'Product 9',
    type: 'Monitors',
    specification: 'Specification 9',
    guarantee: {
      start: '2023-02-11 10:10:00',
      end: '2023-02-11 10:10:00'
    },
    price: [
      { value: 110, symbol: 'USD', isDefault: 0 },
      { value: 3000, symbol: 'UAH', isDefault: 1 }
    ],
    order: 9,
    date: '2023-02-11 10:10:00'
  },
  {
    id: "product10",
    serialNumber: 1243,
    isNew: 1,
    photo: '/products/product-10.jpg',
    title: 'Product 10',
    type: 'Speakers',
    specification: 'Specification 10',
    guarantee: {
      start: '2024-03-15 16:30:00',
      end: '2024-03-15 16:30:00'
    },
    price: [
      { value: 130, symbol: 'USD', isDefault: 0 },
      { value: 3500, symbol: 'UAH', isDefault: 1 }
    ],
    order: 10,
    date: '2024-03-15 16:30:00'
  },
  {
    id: "product11",
    serialNumber: 1243,
    isNew: 1,
    photo: '/products/product-1.jpg',
    title: 'Product 11',
    type: 'Speakers',
    specification: 'Specification 1',
    guarantee: {
      start: '2024-03-15 16:30:00',
      end: '2024-03-15 16:30:00'
    },
    price: [
      { value: 130, symbol: 'USD', isDefault: 0 },
      { value: 3500, symbol: 'UAH', isDefault: 1 }
    ],
    order: 10,
    date: '2024-03-15 16:30:00'
  }
];

