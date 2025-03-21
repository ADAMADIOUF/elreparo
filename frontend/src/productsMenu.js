const productsMenu = {
  appetizers: [
    {
      name: 'Fresh Guacamole',
      price: 10.0,
      description:
        'Homemade guacamole prepared with ripe avocados, tomatoes, onions, cilantro, and lime juice. Served with crispy tortilla chips.',
      image:
        'https://i.pinimg.com/474x/48/2b/75/482b75e555a7d7e390c225d699c70a36.jpg',
    },
    {
      name: 'Choriqueso',
      price: 11.25,
      description:
        'Melted cheese blended with savory Mexican chorizo. Served with warm tortillas for dipping.',
      image:
        'https://i.pinimg.com/474x/fe/11/4d/fe114d0bf2ead3e1900367276b592626.jpg',
    },
    {
      name: 'Shrimp Ceviche',
      price: 16.25,
      description:
        'Fresh shrimp marinated in citrus juices, tossed with tomatoes, onions, cilantro, and jalapeños. Served chilled with tortilla chips.',
      image:
        'https://i.pinimg.com/474x/98/8b/21/988b2141f1aee6478c7654ba6eee213a.jpg',
    },
    {
      name: 'Steak Nachos',
      price: 16.25,
      description:
        'Crispy tortilla chips topped with grilled steak, melted cheese, jalapeños, sour cream, and guacamole.',
      image:
        'https://i.pinimg.com/474x/ea/44/01/ea44017d26a2222832e12464fcfa7209.jpg',
    },
  ],
  tacos: [
    {
      name: 'Carne Asada Tacos',
      price: 14.5,
      description:
        'Grilled steak tacos served on soft corn tortillas with fresh cilantro, onions, and salsa verde.',
      image:
        'https://i.pinimg.com/474x/31/23/71/312371176f350d2c0700ad12adcd4f84.jpg',
    },
    {
      name: 'Al Pastor Tacos',
      price: 13.75,
      description:
        'Marinated pork tacos topped with fresh pineapple, onions, and cilantro on soft corn tortillas.',
      image:
        'https://i.pinimg.com/474x/06/7b/ac/067bac5fa3094e850b8d9ef3feca736d.jpg',
    },
    {
      name: 'Baja Shrimp Tacos',
      price: 16.0,
      description:
        'Crispy fried shrimp tacos topped with cabbage slaw and chipotle mayo on soft tortillas.',
      image:
        'https://i.pinimg.com/736x/39/36/a1/3936a1cf8e83cdeeaebd427444877139.jpg',
    },
  ],
  burritos: [
    {
      name: 'California Burrito',
      price: 13.5,
      description:
        'Grilled steak, crispy French fries, cheese, guacamole, and sour cream wrapped in a large flour tortilla.',
      image:
        'https://i.pinimg.com/474x/3c/c6/f9/3cc6f95254bf052f0726eb9965a72483.jpg',
    },
    {
      name: 'Chicken Burrito',
      price: 12.75,
      description:
        'Grilled chicken, rice, beans, pico de gallo, and cheese wrapped in a warm flour tortilla.',
      image:
        'https://i.pinimg.com/474x/9a/c8/ae/9ac8aea88b6d44d44927830ac0ae01fc.jpg',
    },
  ],
  mainDishes: [
    {
      name: 'Chicken Fajitas',
      price: 19.5,
      description:
        'Sizzling grilled chicken served with sautéed onions and bell peppers. Accompanied by rice, beans, guacamole, sour cream, and tortillas.',
      image:
        'https://i.pinimg.com/474x/4d/31/42/4d3142b353078605a60293762cae8af8.jpg',
    },
    {
      name: 'Steak Fajitas',
      price: 20.0,
      description:
        'Tender grilled steak served with sautéed onions and bell peppers. Comes with rice, beans, guacamole, sour cream, and tortillas.',
      image:
        'https://i.pinimg.com/474x/06/8c/5d/068c5d7f0f6de4198476697b0db16142.jpg',
    },
    {
      name: 'Shrimp Fajitas',
      price: 21.5,
      description:
        'Juicy grilled shrimp served with sautéed onions and bell peppers. Includes rice, beans, guacamole, sour cream, and tortillas.',
      image:
        'https://i.pinimg.com/474x/4c/cc/3c/4ccc3cbe438988594e183557322d3afa.jpg',
    },
  ],
  desserts: [
    {
      name: 'Churros',
      price: 7.0,
      description:
        'Fried dough pastries dusted with cinnamon sugar. Served with a side of chocolate dipping sauce.',
      image:
        'https://i.pinimg.com/474x/fd/26/9f/fd269faf6f7ea3aa72b422fc6a546386.jpg',
    },
    {
      name: 'Flan',
      price: 6.5,
      description:
        'Traditional Mexican caramel custard dessert with a rich, creamy texture.',
      image:
        'https://i.pinimg.com/474x/6a/66/d7/6a66d7c07a831f1eb9ccfcfeeb394788.jpg',
    },
  ],
  drinks: [
    {
      name: 'Horchata',
      price: 3.5,
      description:
        'Refreshing rice-based drink infused with cinnamon and vanilla.',
      image:
        'https://i.pinimg.com/474x/62/df/b7/62dfb7e8c777f19c7990f64d7158a921.jpg',
    },
    {
      name: 'Margarita',
      price: 8.0,
      description:
        'Classic tequila-based cocktail with lime juice and triple sec, served on the rocks or blended.',
      image:
        'https://i.pinimg.com/474x/bd/e6/9a/bde69a1d163024d82038480cfd4b328b.jpg',
    },
  ],
  specialDishes: [
    {
      name: 'Molcajete Mixto',
      price: 25.5,
      description:
        'A sizzling stone bowl filled with grilled chicken, steak, shrimp, chorizo, and nopales. Served with tortillas, rice, and beans.',
      image:
        'https://i.pinimg.com/474x/ab/62/3c/ab623c10c7e02bfcfdbb73a2beedb1bf.jpg',
    },
    {
      name: 'Birria Tacos',
      price: 18.75,
      description:
        'Slow-cooked beef birria tacos served with melted cheese and consommé for dipping.',
      image:
        'https://i.pinimg.com/474x/53/47/fd/5347fde91c50c0570813d475fef193c4.jpg',
    },
  ],
  breakfast: [
    {
      name: 'Chilaquiles',
      price: 10.5,
      description:
        'Crispy tortilla chips topped with red or green salsa, fried eggs, queso fresco, and sour cream.',
      image:
        'https://i.pinimg.com/474x/99/bb/e8/99bbe8e151ad21608dbd1dafc9d34e6f.jpg',
    },
    {
      name: 'Huevos Rancheros',
      price: 12.0,
      description:
        'Two fried eggs served on corn tortillas with ranchero sauce, beans, and avocado slices.',
      image:
        'https://i.pinimg.com/474x/67/fa/28/67fa280b898be286013d9043c7a9514a.jpg',
    },
    {
      name: 'Breakfast Burrito',
      price: 9.5,
      description:
        'Flour tortilla filled with scrambled eggs, cheese, beans, and chorizo. Served with salsa.',
      image:
        'https://i.pinimg.com/736x/19/c9/8b/19c98b090034f88205aa40f8d2c77f69.jpg',
    },
  ],
}

export default productsMenu
