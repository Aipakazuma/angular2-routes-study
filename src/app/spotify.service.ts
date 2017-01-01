import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(private http: Http) {
  }

  searchByTrack(query: string) {
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    let queryUrl: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.request(queryUrl).map(res => res.json());
  }
}
