import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shopping-mall',
  templateUrl: './shopping-mall.component.html',
  styleUrls: ['./shopping-mall.component.scss']
})
export class ShoppingMallComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  productList = [
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
      name: 'frst product',
      price: 100,
      rating: '4/5'
    },
    {
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
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('type'));
    this.route.params.subscribe(res => {
      console.log(res);
      this.getProducts(res['type']);
    })

  }
  getProducts(productType) {
    this.apiService.postdata(environment.api_url + 'shopping-mall/' + productType, this.inputDataProductList)
      .subscribe(res => {
        console.log(res);
      })
  }


}
