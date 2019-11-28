import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  searchArtist(searchValue: string){
    const API_KEY = "37216d501934d4c9786ddb7211dd43a6";
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchValue}&api_key=${API_KEY}&format=json`;

    return this.httpClient.get(API_URL).toPromise();
  }
}
