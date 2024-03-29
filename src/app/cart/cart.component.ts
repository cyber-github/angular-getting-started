import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  items;

  ngOnInit() {
    this.items = this.cartService.getItems();

    return this.items;
  }

}