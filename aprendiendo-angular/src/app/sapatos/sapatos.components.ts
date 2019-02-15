import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatillas';

@Component({
    selector: 'sapatos',
    templateUrl: './sapatos.component.html'
})

export class SapatosComponent implements OnInit {
    public titulo: string ="Sapatos cualquiera";
    public zapatillas: Array<Zaparilla>;
    
    constructor(){
        this.zapatillas = [
            new Zapatilla('Nike classic', 'Nike', 'Blanco', 40, true),
            new Zapatilla('Rebook classic', 'Rebook', 'violeta', 180, true),
            new Zapatilla('Adidas classic', 'adidas', 'verde', 60, false),
            new Zapatilla('Adidas Zebra', 'adidas', 'verde', 190, false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        
    }
}