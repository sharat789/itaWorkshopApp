import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MovieListComponent},
    {path: '**', component: NotFoundComponent}
];
