import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'userTest';
  constructor(private router: Router) {}

  public navigateToUserDetails() {
    this.router.navigate(['/user']);
  }
  public navigateToProduct() {
    this.router.navigate(['/product']);
  }
}
