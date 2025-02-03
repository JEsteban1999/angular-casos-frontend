import { Routes } from '@angular/router';
import { RegistrarCasoComponent } from './components/registrar-caso/registrar-caso.component';
import { AsignarCasoComponent } from './components/asignar-caso/asignar-caso.component';
import { ActualizarEstadoComponent } from './components/actualizar-estado/actualizar-estado.component';
import { ListarCasosComponent } from './components/listar-casos/listar-casos.component';
import { AgregarComentarioComponent } from './components/agregar-comentario/agregar-comentario.component';


export const routes: Routes = [
    { path: 'registrar-caso', component: RegistrarCasoComponent },
    { path: 'asignar-caso', component: AsignarCasoComponent },
    { path: 'actualizar-estado', component: ActualizarEstadoComponent },
    { path: 'listar-casos', component: ListarCasosComponent },
    { path: 'agregar-comentario', component: AgregarComentarioComponent },
    { path: '', redirectTo: '/registrar-caso', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/registrar-caso' }
];
