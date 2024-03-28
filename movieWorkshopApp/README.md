# Task 1 

## Create movie-list component

1. Run `ng g c components/movie-list`
2. Add the `movie-list-component` to `app.component.html` and see if it works

# Task 2

## Create service for fetching movies

1. Create a service that fetches popular movies from the TMDB API. 
    - Run `ng g s services/movie`
2. Create a file `types.ts` in the app directory that will store the type that would be returned by the API (MovieSearchResponse) and the type that would be used to display those movie items (MovieListObject) (and other types). 
3. Create a function inside `movie.service.ts` called `getMovies()` that will call the API and fetch popular movies. Use the api key and the URL provided below. Pass the api key as parameter in the GET request. The function should return an Observable of type `MovieListObject`.
4. Use this service in your `MovieListComponent` and call the `getMovies()` function and try subscribing it and console logging the result to see if the service works.

TMDB API usage docs: https://developer.themoviedb.org/reference/intro/getting-started
Popular movies endpoint: https://api.themoviedb.org/3/movie/popular
API Key: 'bc3cbb180a0ca2a35eb2d9c278f6d3b3'

# Task 3

## Display the response from `movieService` in your `MovieListCmponent`

1. Create a movies$ observable that would contain the response from the service.
2. In your constructor initialise this observable with the response returned from the service.
3. Use the for (control flow syntax) and display the `original_title` and `poster_path` attributes in your HTML. (Hint: append the `poster_path` to this URL to display the poster for the movies : https://image.tmdb.org/t/p/w200).

!! Bonus point for adding styling and make the list look nice ( You are free to use plain CSS or frameworks like Bootstrap or Tailwind ). !!
