import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuarios: ContactoUsuario;
  public = show_data;
  
  constructor() { 
    this.usuarios = new ContactoUsuario ('', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(form){
    this.show_data = this.usuarios;
    console.log(this.usuarios); 
  }

}
