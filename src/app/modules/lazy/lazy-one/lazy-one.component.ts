import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../../store/ngrx.action';

@Component({
  selector: 'app-lazy-one',
  templateUrl: './lazy-one.component.html',
  styleUrls: ['./lazy-one.component.scss'],
})
export class LazyOneComponent {
  constructor(private store: Store) {}

  ngOnInit() {
    // this.store.dispatch(
    //   LoginActions.login({
    //     payload: {
    //       username: 'this.form.controls.username.value',
    //       password: 'b',
    //     },
    //   })
    // );
  }
}
