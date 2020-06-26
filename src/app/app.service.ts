import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  urlLogin: string;
  urlCreate: string;
  isLogged: boolean;
  result: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {
    this.urlLogin = 'http://localhost:3000/cliente/login';
    this.urlCreate = 'http://localhost:3000/cliente/';
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  postLogin(cliente) {
    const logueado = 'activo';
    localStorage.setItem('logueado', logueado);

    this.isLogged = true;

    return this.httpClient.post(this.urlLogin, cliente, { headers: this.headers }).toPromise();
  }

  getToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (!(accessToken === undefined || accessToken === null)) {
      return accessToken;
    } else {
      return null;
    }
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  setRol(rol): void {
    localStorage.setItem('accessRol', rol);
  }

  getRol() {
    const accessRol = localStorage.getItem('accessRol');
    if (!(accessRol === undefined || accessRol === null)) {
      return accessRol;
    } else {
      return null;
    }
  }

  postLogout() {
    this.isLogged = false;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('logueado');
    localStorage.removeItem('accessRol');
  }

  postForm(formulario: FormData) {

    const datosCliente = {
      nombre: formulario.get('nombre'),
      apellidos: formulario.get('apellidos'),
      dni: formulario.get('dni'),
      clave: formulario.get('clave'),
      image: formulario.get('image'),
      solicitud: {
        fecha_nacimiento: formulario.get('fecha_nacimiento'),
        direccion: formulario.get('direccion'),
        telefono: formulario.get('telefono'),
        email: formulario.get('email'),
        ingresos: formulario.get('ingresos'),
        banco: formulario.get('banco'),
      }
    };

    console.log(datosCliente);

    this.router.navigate(['/solicitudok']);

    return this.httpClient.post(this.urlCreate, formulario, { headers: {} }).toPromise();
  }

  getClientes() {
    return this.httpClient.get(this.urlCreate, { headers: { "Authorization": "bearer " + this.getToken() } }).toPromise();
  }

  datosResultado(resultado) {
    this.result = resultado;
  }

  getResultado() {
    return this.result;
  }

  updateClient(cliente) {
    return this.httpClient.post(this.urlCreate + cliente._id, cliente, { headers: this.headers }).toPromise();
  }

}