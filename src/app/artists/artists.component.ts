import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

interface Artists{
  name:string;
  url:string;
}

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists:Artists[];
  newArtist="";

  constructor(
    private artistService: ArtistService
    ) { }

  ngOnInit() {

  }

  searchArtist(){
      this.artistService.searchArtist(this.newArtist)
        .then(response => {
          console.log(response);
          this.artists = response.results.artistmatches.artist;
        })
        .catch(error => {
          console.log(error);
        })
  }

}
