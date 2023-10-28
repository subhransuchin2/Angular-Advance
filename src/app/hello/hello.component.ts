import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  constructor(private route: Router) {}
  redirect(link: string) {
    this.route.navigate([`/${link}`]);
  }
}
