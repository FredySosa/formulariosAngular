import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  guardar(forma: any) {
    console.log('Obj we');
    console.log(forma);
  }

}