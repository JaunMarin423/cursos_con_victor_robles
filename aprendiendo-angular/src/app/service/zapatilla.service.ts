import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatillas';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

    constructor (){
        this.zapatillas = [
            new Zapatilla('Nike classic', 'Nike', 'Blanco', 40, true),
            new Zapatilla('Rebook classic', 'Rebook', 'violeta', 180, true),
            new Zapatilla('Rebook Spartan', 'Rebook', 'violeta', 180, true),
            new Zapatilla('Adidas classic', 'adidas', 'verde', 60, false),
            new Zapatilla('Adidas Zebra', 'adidas', 'verde', 190, false)
        ];
    }

    getTexto(){
        return "hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}