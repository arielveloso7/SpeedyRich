import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EspacioclienteComponent } from './espaciocliente/espaciocliente.component';
import { SolicitudOKComponent } from './solicitud-ok/solicitud-ok.component';
import { LoginGuard } from './login.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'solicitudok', component: SolicitudOKComponent },
  { path: 'espaciocliente', component: EspacioclienteComponent, canActivate: [LoginGuard] },
  { path: "**", redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
