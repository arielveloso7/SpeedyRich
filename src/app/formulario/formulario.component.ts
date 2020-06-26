import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  resultado: string;
  selectedFile: any;

  constructor(private appService: AppService) {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      ]),
      ingresos: new FormControl('', [Validators.required]),
      banco: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.resultado = this.appService.getResultado();
  }

  async recogerDatos() {

    let formData = new FormData();

    for (let key in this.formulario.value) {
      let value = this.formulario.value[key];

      console.log(key, value);

      if (key !== "image")
        formData.append(key, value);
    }

    formData.append('image', this.selectedFile, this.selectedFile.name);

    await this.appService.postForm(formData);

  }

  async onFileChanged(event) {
    try {
      this.selectedFile = event.target.files[0];
      event.preventDefault();
    }
    catch (err) {
      console.log(err)
    }
  }

}
