import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shopping-mall',
  templateUrl: './shopping-mall.component.html',
  styleUrls: ['./shopping-mall.component.scss']
})
export class ShoppingMallComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  productList = [
    {
      id: 1,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 2,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 3,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 4,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 5,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 6,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 7,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 8,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 9,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 10,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 11,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 12,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 13,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 14,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 15,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      id: 16,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    }
  ]

  selectedUrl: string;
  inputDataProductList = {
    pageNo: 1,
    pageSize: 50,
    searchKey: ''
  };
  selectedProductType;

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('type'));
    this.route.params.subscribe(res => {
      console.log(res);
      this.selectedProductType = res['type'];
      this.getProducts(res['type']);
    })

  }
  getProducts(productType) {
    this.apiService.postdata(environment.api_url + 'shopping-mall/' + productType, this.inputDataProductList)
      .subscribe(res => {
        console.log(res);
      });
  }

  getProductDetail(product) {
    this.router.navigateByUrl('/main/item/' + this.selectedProductType + '/' + product['id'] + '/' + product['name'])
  }

}
