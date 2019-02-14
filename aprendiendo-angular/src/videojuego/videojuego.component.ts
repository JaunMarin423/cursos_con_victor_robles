import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Video juegos";
        this.listado = "Los juegos más populares";
    }

    ngOnInit(){
console.log("OnInit ejecutando!!");

    }

    ngDoCheck(){
        console.log("DoCheck ejecutado");
        
    }
    ngOnDestroy(){
        console.log("OnDestroy Ejecutado");
        
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }
}
