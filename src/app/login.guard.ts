import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(private router: Router,
    private appService: AppService) { }

  canActivate() {

    const estado = localStorage.getItem('logueado');
    if (estado !== 'activo') {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }

}
