import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artists/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  artistName = '';
  artist: any;

  constructor(
    private activatedRouter: ActivatedRoute,
    private artistService: ArtistService
    ) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((map: any) => {
      console.log(map);
      this.artistName  = map.params.artist;
    })
    this.getArtistDetail();
  }

  getArtistDetail(){
    this.artistService.getArtistDetail(this.artistName)
      .then((response: any) => {
          /* response.results. */
          console.log(response);
          this.artist = response.artist;
      })
      .catch(error => console.log(error))
  }

}
