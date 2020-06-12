import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { ApiService } from '../../services/api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private dialog: MatDialog, private apiService: ApiService) { }

  ngOnInit() {
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  globalSearch(value) {
    this.apiService.postdata(environment.api_url + 'global-search', { searchKey: value }).subscribe(res => {
      console.log(res);
    });
  }
}
