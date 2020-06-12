import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  dupDataOfCartItems = [
    {
      itemId: 1,
      itemIcon: '/cart-images/lenova-568.jpg',
      name : 'Lenova think-pad series-LS',
      properties : {
        weight : '1.3kg',
        processcor : 'i5',
        memory : {
          ROM : '1Tb',
          RAM : '8GB',
          ROMType : 'HARD-DISK',
          extraROM : '256SSD'
        },
        screenResolution : '1680 x 2340',
        screenType : 'LED',
      },
      cost : '77580',
      currency : 'Rupee',
      timeOfAdd : 1555666444123,
      discountedPercentage : 22,
      numberOfItems : 1,

    }
  ];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.apiService.postdata(environment.api_url + '/cart/get-all-items', {}).subscribe(res => {
      if (res['status'] === 'success') {
        console.log(res['list']);
      }
    });
  }

  navigateTo() {
    this.router.navigateByUrl('main/shopping-mall/books')
  }
}
