import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { MovieListObject } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss', '../../app.component.scss' ]
})
export class MovieListComponent {
  movies$: Observable<MovieListObject[]>

constructor(private movieService : MovieService){
  this.movies$ = this.movieService.getMovies();
}

}
