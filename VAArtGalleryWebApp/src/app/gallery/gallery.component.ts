import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/Gallery';
import { GalleryService } from './gallery.service';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent implements OnInit {
  galleries: Gallery[] = [];
  displayedColumns: string[] = ['name', 'city', 'manager', 'nbrWorks', 'actions'];

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    console.log('cenas');
    this.galleryService.getGalleries().subscribe(galleries => {this.galleries = galleries; console.log(this.galleries);});
  }

  editGalleryClick(galleryId: string) {
    console.log(galleryId);
  }

}
