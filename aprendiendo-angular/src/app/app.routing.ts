// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Importar componentes
import { HomeComponent } from './home/home.component';
import { SapatosComponent } from './sapatos/sapatos.components';
import { VideojuegoComponent } from '../videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

// Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'sapatos', component: SapatosComponent },
    { path: 'videojuego', component: VideojuegoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:nombre/:followers', component: CursosComponent },
    { path: 'externo', component: ExternoComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', component: HomeComponent }
];


// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);