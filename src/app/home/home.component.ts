import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  importe: number;;
  meses: number;
  arrCalculadora: any;
  resultado: string;
  cuotaMensual: number;
  total: number;

  user: any;
  public token: any;

  constructor(
    private appService: AppService,
    private router: Router
  ) {
    this.importe = 500;
    this.meses = 12;
    this.resultado = '';
    this.cuotaMensual;
    this.total;


  }

  ngOnInit(): void {
  }

  async entrarEspacioCliente(event, formLogin) {

    event.preventDefault();

    this.user = {
      dni: formLogin[0].value,
      clave: formLogin[1].value
    }

    formLogin.reset();

    try {
      this.token = await this.appService.postLogin(this.user); /// convert promise to observable

      this.appService.setToken(this.token.token);
      this.appService.setRol(this.token.rol);

      this.router.navigate(['/espaciocliente']);

    } catch (error) {
      console.log(error)
    }
  }

  alreadyLogged() {
    if (this.appService.getToken() !== null)
      this.router.navigate(['/espaciocliente']);
  }

  calculo(importe, meses) {

    importe = this.importe;
    meses = this.meses;
    let interes = 0.55;

    //cambiamos las variables a meses
    let i = interes / 100;

    //hacemos unos cálculos intermedios
    let factor = Math.pow(i + 1, meses);
    let cuota = importe * i * factor / (factor - 1);

    this.cuotaMensual = Math.round(cuota);
    this.total = this.cuotaMensual * meses;

    //mostramos el resultadom
    this.resultado = "El importe solicitado es de " + importe + "€ a " + meses + " meses, con un interés mensual de " + i * 100 + "%. Tu cuota mensual es de " + this.cuotaMensual + "€.";

    this.appService.datosResultado(this.resultado);

  }




}
