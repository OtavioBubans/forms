import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    sigla: null,
    nome: null,
    descricao: null
    //email: 'email@email.com'
  }

  onSubmit(form){
    console.log(form);

  }
  constructor() { }

  ngOnInit() {
  }

}
