import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espaciocliente',
  templateUrl: './espaciocliente.component.html',
  styleUrls: ['./espaciocliente.component.css']
})
export class EspacioclienteComponent implements OnInit {
  arrClientes: any;
  cliente: any;
  actualizar: any;
  rol: any;

  constructor(
    private appService: AppService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    this.arrClientes = await this.appService.getClientes();
    this.rol = this.appService.getRol();
  }

  logout() {
    this.appService.postLogout();
    this.router.navigate(['/home']);
  }

  actualizarSolicitud(id) {


    this.actualizar = this.arrClientes.find(cliente => {

      if (cliente._id == id)
        return cliente;
    })
  }

  async enviar() {
    const mensaje = await this.appService.updateClient(this.actualizar);
    console.log(mensaje);
  }

}