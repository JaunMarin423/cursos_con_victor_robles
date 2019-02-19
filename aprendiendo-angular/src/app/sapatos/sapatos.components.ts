import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatillas';

@Component({
    selector: 'sapatos',
    templateUrl: './sapatos.component.html'
})

export class SapatosComponent implements OnInit {
    public titulo: string ="Sapatos cualquiera";
    public zapatillas: Array<Zaparilla>;
    public marcas: String[];
    public color: string;
    
    constructor(){
        this.color = 'yellow';
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike classic', 'Nike', 'Blanco', 40, true),
            new Zapatilla('Rebook classic', 'Rebook', 'violeta', 180, true),
            new Zapatilla('Rebook Spartan', 'Rebook', 'violeta', 180, true),
            new Zapatilla('Adidas classic', 'adidas', 'verde', 60, false),
            new Zapatilla('Adidas Zebra', 'adidas', 'verde', 190, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);

        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{

            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            
        });

        console.log(this.marcas);
    }
}