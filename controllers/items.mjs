/* eslint-disable no-shadow */
// db is an argument to this function so
// that we can make db queries inside
export default function items(db) {
  const index = (request, response) => {
    const items = [
      {
        name: 'banana',
        price: '$2',
        category: 'fruits',
      },
      {
        name: 'apple',
        price: '$1',
        category: 'fruits',
      },
      {
        name: 'salmon',
        price: '$22',
        category: 'fish',
      },
      {
        name: 'trout',
        price: '$12',
        category: 'fish',
      },
      {
        name: 'guava',
        price: '$3',
        category: 'fruits',
      },
    ];

    response.render('items/index', { items });
  };

  // return all functions we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
