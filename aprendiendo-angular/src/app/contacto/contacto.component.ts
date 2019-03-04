import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuarios: ContactoUsuario;
  
  
  constructor() { 
    this.usuarios = new ContactoUsuario ('', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.usuarios); 
  }

}
