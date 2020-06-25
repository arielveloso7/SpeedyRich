import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-solicitud-ok',
  templateUrl: './solicitud-ok.component.html',
  styleUrls: ['./solicitud-ok.component.css']
})
export class SolicitudOKComponent implements OnInit {
  resultado: string;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.resultado = this.appService.getResultado();
  }

}
