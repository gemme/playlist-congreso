import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs = []
  constructor() { 
    this.songs = [{
      title: 'Seek and Destroy',
      artist: 'Metallica',
      url: 'http://spotify.com'
    },
    {
      title: 'sonidito',
      artist: 'Ramstein',
      url: 'http://spotify.com'
    }]
  }

  ngOnInit() {
  }

}
