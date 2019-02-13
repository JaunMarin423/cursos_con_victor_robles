import { Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Video juegos";
        this.listado = "Los juegos más populares";
    }
}
