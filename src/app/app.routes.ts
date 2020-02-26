import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {FilmComponent} from './components/films/film.component';

const APP_ROUTES: Routes = [
  { path: '', component: BodyComponent},
  { path: 'film', component: FilmComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

export  const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
