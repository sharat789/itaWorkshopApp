import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieListObject, MovieSearchResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly apiKey = 'bc3cbb180a0ca2a35eb2d9c278f6d3b3';
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  requiredParams = {
    api_key: this.apiKey
  }
  constructor(private httpClient : HttpClient) { }

  getMovies(): Observable<MovieListObject[]> {
    return this.httpClient.get<MovieSearchResponse>(`${this.baseUrl}/movie/popular`, {
      params: this.requiredParams,
    }).pipe(map((response) =>  response.results));
  }

}
