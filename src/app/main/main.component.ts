import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.navigateTo('shopping-mall/books');
  }

  navigateTo(route) {
    this.router.navigate(['main/' + route]);
  }

}
