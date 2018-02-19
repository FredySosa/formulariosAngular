import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

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
  }

  ngOnInit() {
  }

  guardar(forma: any) {
    console.log(forma);
    console.log('forma', forma.value);
    console.log('usuario', this.usuario);
  }

}
