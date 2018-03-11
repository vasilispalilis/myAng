import { Dish } from './dish';

export const DISHES: Dish[] = [
  {
    id: 0,
    name: '85% Dark Chocolate',
    image: '/assets/images/dark85.jpg',
    category: 'darks',
    label: 'Hot',
    price: '4.99',
    featured: true,
    description: 'Dark chocolate with no added sugar. Here you can taste the flavor of cocoa beans.',
    comments: [
      {
        author: 'John Smith',
        comment: 'I prefer sweet chocolates',
        rating: 4,
        date: '2018-03-02T17:07:36.698Z'
      },
      {
        author: 'Anna Dark',
        comment: 'The absolute chocolate!',
        rating: 5,
        date: '2018-03-03T18:25:09.829Z'
      },
      {
        author: 'Alice Coper',
        comment: 'Authentic chocolate! ',
        rating: 5,
        date: '2018-03-03T18:30:55.933Z'
      },
      {
        author: 'Natassa ReZum',
        comment: 'Real chocolate!',
        rating: 5,
        date: '2018-03-03T18:59:47.274Z'
      }
    ]
  },
  {
    id: 1,
    name: '75% Dark Chocolate',
    image: '/assets/images/dark45.jpg',
    category: 'blackwhite',
    label: '',
    price: '1.99',
    featured: false,
    description: 'Dark chocolate made with a range of cocoa beans from Peru. It is soft with strong flavor.',
    comments: [
      {
        author: 'John Smith',
        comment: 'To strong!',
        rating: 3,
        date: '2018-03-02T17:08:59.729Z'
      },
      {
        author: 'Anna Dark',
        comment: 'Good but not perfect!',
        rating: 4,
        date: '2018-03-03T18:26:56.283Z'
      },
      {
        author: 'Alice Coper',
        comment: 'Unique chocolate!',
        rating: 5,
        date: '2018-03-03T18:31:53.084Z'
      },
      {
        author: 'Natassa ReZum',
        comment: 'Try it with coffee!',
        rating: 5,
        date: '2018-03-03T19:00:45.995Z'
      }
    ]
  },
  {
    id: 2,
    name: '45% Milk Chocolate',
    image: '/assets/images/milk.jpg',
    category: 'blackwhite',
    label: 'New',
    price: '1.99',
    featured: false,
    description: 'Milk chocolate made with Madagascar cocoa beans. It is a well-balanced chocolate with milk flavor.',
    comments: [
      {
        author: 'John Smith',
        comment: 'Perfect balance!',
        rating: 5,
        date: '2018-03-02T17:09:34.279Z'
      },
      {
        author: 'Anna Dark',
        comment: 'To sweet for me!',
        rating: 5,
        date: '2018-03-03T18:27:30.469Z'
      },
      {
        author: 'Alice Coper',
        comment: 'My favorite just perfect!',
        rating: 5,
        date: '2018-03-03T18:34:06.396Z'
      },
      {
        author: 'Natassa ReZum',
        comment: 'Classic and favorite!',
        rating: 5,
        date: '2018-03-03T19:01:36.699Z'
      }
    ]
  },
  {
    id: 3,
    name: '55%, 75% and 85% Chocolates with almonds',
    image: '/assets/images/almonds.jpg',
    category: 'mixed',
    label: '',
    price: '2.99',
    featured: false,
    description: 'Chocolates of different cocoa beans concentration containing almonds. They are crunchy and have a rich taste.',
    comments: [
      {
        author: 'John Smith',
        comment: 'Nice combination!',
        rating: 5,
        date: '2018-03-02T17:10:13.231Z'
      },
      {
        author: 'Anna Dark',
        comment: 'Nothing special',
        rating: 5,
        date: '2018-03-03T18:28:06.516Z'
      },
      {
        author: 'Alice Coper',
        comment: 'So amazing! Try it!',
        rating: 5,
        date: '2018-03-03T18:29:56.380Z'
      },
      {
        author: 'Natassa ReZum',
        comment: 'Wish I had more!',
        rating: 5,
        date: '2018-03-03T18:59:14.590Z'
      }
    ]
  }
];
