import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/movie/:id', component: MovieDetailsComponent},
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
