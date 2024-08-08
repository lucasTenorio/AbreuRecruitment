import { Component, Input, OnInit } from '@angular/core';
import { ArtworkService } from './services/artwork-service';
import { Artwork, ArtworkKeys } from '../models/Artwork';

@Component({
  selector: 'app-artwork-portfolio',
  templateUrl: './artwork-portfolio.component.html',
  styleUrl: './artwork-portfolio.component.css'
})


export class ArtworkPortfolioComponent implements OnInit{

  @Input({required : true}) galleryId : string = "";
  artworks : Artwork[] = [];
  displayedColumns = Object.keys(ArtworkKeys);
  constructor(private service : ArtworkService){}
  
  ngOnInit(): void {
    console.log("gallery: ", this.galleryId)
    console.log("displayed: ", this.displayedColumns)
    this.loadArtworkList();
  }

  private loadArtworkList() {
    if (this.galleryId) {
      this.service.getArtWorkList(this.galleryId).subscribe((data) => {
        console.log(data);
        this.artworks = data;
      });
    }
  }
}
