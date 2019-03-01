import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    
    //dato | calculadora: otroDato
    //param1              param2
    transform(value: number, value2: number){
        let operaciones = value+value2
        return operaciones;
    }
}