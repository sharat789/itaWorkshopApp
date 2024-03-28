import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
constructor(private movieService : MovieService){
  this.movieService.getMovies().subscribe((res) => console.log(res));
}


}
