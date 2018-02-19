import {Component, OnInit} from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };

  sexos = ['Hombre', 'Mujer', 'Sin definir'];

  paises = [
    {codigo: 'MEX', nombre: 'México'},
    {codigo: 'GUA', nombre: 'Guatemala'},
    {codigo: 'COL', nombre: 'Colombia'}];

  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl('Fredy'),
      'apellido': new FormControl(),
      'correo': new FormControl()
    });
  }

  ngOnInit() {


  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }


}
