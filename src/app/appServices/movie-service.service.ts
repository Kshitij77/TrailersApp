import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movies } from '../models/movies';

//using enum to give predefined values
const enum endpoint{
  latest = 'movie/latest',
  now_playing = 'movie/now_playing',
  popular = 'movie/popular',
  top_rated = 'movie/top_rated',
  upcoming = 'movie/upcomig',
  trending = 'trending/all/day',
  originals = 'discover/tv',
  genres = 'discover/movie'
}

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private url = 'https://api.themoviedb.org/3';
  private api_key = environment.api;

  constructor(private http: HttpClient) {}

  getLatestMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.latest}`,{
      params: {
        api_key: this.api_key    //Instead of params HTTP interceptor method can be used
      }
    });
  }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.now_playing}`,{
      params: {
        api_key: this.api_key
      }
    });
  }

  getOriginals(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.originals}`,{
      params: {
        api_key: this.api_key
      }
    });
  }

  getPopulartMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.popular}`,{
      params: {
        api_key: this.api_key
      }
    });
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.top_rated}`,{
      params: {
        api_key: this.api_key
      }
    });
  }

  getTrending(): Observable<Movies> {
    //console.log('trending');
    return this.http.get<Movies>(`${this.url}/${endpoint.trending}`,{
      params: {
        api_key: this.api_key
      }
    });
  }

  getUpcoming(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.upcoming}`,{
      params: {
        api_key: this.api_key
      }
    });
  }

  getAction(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.genres}`,{
      params: {
        api_key: this.api_key,
        with_genres: 28
      }
    });
  }

  getRomantic(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.genres}`,{
      params: {
        api_key: this.api_key,
        with_genres: 10749
      }
    });
  }

  getComedy(): Observable<Movies> {
    return this.http.get<Movies>(`${this.url}/${endpoint.genres}`,{
      params: {
        api_key: this.api_key,
        with_genres: 35
      }
    });
  }
}
