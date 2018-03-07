import { Component, OnInit } from '@angular/core';

const DISH = {
    name: '85% Dark Chocolate',
    image: '/assets/images/dark85.jpg',
    category: 'darks',
    label: 'Hot',
    price: '4.99',
    description: 'Dark chocolate with no added sugar. Here you can taste the flavor of cocoa beans.',
    comments: [
      {
        rating: 4,
        comment: 'I prefer sweet chocolates',
        author: 'John Smith',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 5,
        comment: 'The absolute chocolate!',
        author: 'Anna Dark',
        date: '2018-03-03T18:25:09.829Z'
      },
      {
        rating: 5,
        comment: 'Authentic chocolate!',
        author: 'Alice Coper',
        date: '2018-03-03T18:30:55.933Z'
      },
      {
        rating: 4,
        comment: 'Real chocolate!',
        author: 'Natassa ReZum',
        date: '2018-03-03T18:59:47.274Z'
      },
    ]
  };


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  dish = DISH;

  constructor() { }

  ngOnInit() {
  }

}
