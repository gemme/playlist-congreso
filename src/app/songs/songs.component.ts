import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';
interface Response {
  results:{
    trackmatches: {
      track: []
    }
  }
}
@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  newSong = '';
  songs = [];
  error = '';
  // protected
  constructor(private songService: SongService) {}

  ngOnInit() {}
  /**
   * este sirve para buscar 
   * 😞🙊
   */
  searchSong() {
    console.log(this.newSong);
    this.songService.searchSong(this.newSong)
      .then((response: Response) => {
        console.log('response');
        console.log(response);
        this.songs = response.results.trackmatches.track;
      })
      .catch(error => {
        console.log(error)
      });
  }

}
