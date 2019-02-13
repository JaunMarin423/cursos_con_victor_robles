import { Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'videojuego',
    template: `
        <h2>Componente de Vídeojuegos</h2>
        <ul>
            <li>GTA</li>
            <li>Prince of Persia</li>
            <li>Tekken</li>
            <li>Mario</li>
        </ul>
        `
})

export class VideojuegoComponent {
}
