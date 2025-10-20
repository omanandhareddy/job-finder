import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home.component',
  imports: [],
  templateUrl: './home.component.component.html',
  styleUrl: './home.component.component.css'
})
export class HomeComponentComponent {
  constructor(private router: Router) {}
  go(path: string) {
    this.router.navigate([path]);
  }
}
