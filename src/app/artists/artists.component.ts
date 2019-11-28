import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  searchArtist(){
    this.artists=[
      {
        name:"BobbyRivera",
        url:"ElBobby.com"
      },
      {
        name:"MikeSias",
        url:"ElMike.com"
      },
      {
        name:"Angie",
        url:"Elangie.com"
      },
    ]
      
    
  console.log(this.artists);
  }

  

}
