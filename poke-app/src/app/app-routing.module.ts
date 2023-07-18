import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redireccionar a la vista de inicio por defecto
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent }, // Ruta con parámetro para el ID del Pokémon
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' }, // Redireccionar a la vista de inicio si la ruta no es válida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
