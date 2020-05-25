import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'websiteTemplates';
  welcomeTimer = true;

  constructor(private router: Router) { }

  ngOnInit() {

    setTimeout(() => {
      this.welcomeTimer = false;
    }, 1000);
  }
  navigateTo(route) {
    this.router.navigate(['main/' + route]);
  }
  
}
