import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class SongService {

  constructor(private httpClient: HttpClient) { }

  searchSong(songName){
    const API_KEY = 'bd174abc92377d0cf673a49fd3e1d9f9';
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${songName}&api_key=${API_KEY}&format=json`;
    // observable
    // promise
    // toPromise convert observable into promise
    return this.httpClient.get(API_URL).toPromise();
  }
}

export function formatting(name ) {
  return name + ' congreso';
}


/* [{
  title: 'Seek and Destroy',
  artist: 'Metallica',
  url: 'http://spotify.com'
},
{
  title: 'sonidito',
  artist: 'Ramstein',
  url: 'http://spotify.com'
}] */