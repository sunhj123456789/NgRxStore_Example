import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectUser } from 'src/app/store/reducers';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((res) => {
      console.log(res);
      this.user = res;
    });
  }
}
