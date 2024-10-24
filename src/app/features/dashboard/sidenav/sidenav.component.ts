import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  constructor(
    private router: Router
  ) {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login'])
  }
}
