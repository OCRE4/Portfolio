import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  formularioDeContacto: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formularioDeContacto = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      mensaje: [
        "",
        [
          Validators.required,
        ]
      ]
    });
  }
  alEnviarMensaje() {


    if (this.formularioDeContacto.valid == true) {

      window.open('https://wa.me/' + 2213563950 + '?text=Hola, mi nombre es '
      + this.formularioDeContacto.value.nombre +
      '. Me quiero contactar con vos por lo siguiente:'
      + this.formularioDeContacto.value.mensaje, '_blank');
  }

 }}
