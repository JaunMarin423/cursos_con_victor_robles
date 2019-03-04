import { Component, OnInit } from "@angular/core";
import { PeticionesService } from "../service/peticiones.service";
@Component({
  selector: "app-externo",
  templateUrl: "./externo.component.html",
  styleUrls: ["./externo.component.css"],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado: any;

  constructor(private peticionesService1: PeticionesService) {
    this.userId = 1;

    this.new_user = {
      name: "",
      job: ""
    };
  }

  ngOnInit() {
    this.fecha = new Date(2008, 5, 23);

    this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;
    this.peticionesService1.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    this.peticionesService1.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;

        form.reset();
      },
      error => {
        console.log(<any>error);
        
      }
    );
  }
}
