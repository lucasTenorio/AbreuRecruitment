import { Component, inject, model, OnInit, signal } from '@angular/core';
import { Gallery } from '../models/Gallery';
import { GalleryService } from './gallery.service';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { ModalComponent } from '../modal/modal.component';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent implements OnInit {
  galleries: BehaviorSubject<Gallery[]> =  new BehaviorSubject<Gallery[]>([]);
  displayedColumns: string[] = ['name', 'city', 'manager', 'nbrWorks', 'actions'];

  model : Gallery = {
    name: '',
    city: '',
    manager: '',
    nbrOfArtWorksOnDisplay: 0
  };
  readonly dialog = inject(MatDialog);

  

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.getGalleries().subscribe(galleries => {this.updateGalleries(galleries);});
    console.log("model: ", this.model);
  }

  editGalleryClick(galleryId: string) {
    console.log(galleryId);
  }

  public openModal() : void
  {
    const dialogRef = this.dialog.open(ModalComponent, {
      minHeight : "20em",
      minWidth : "50em"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.model = result.data;
        this.galleryService.postGalleryAsync(this.model).subscribe(
          (result) =>
          {
            this.galleryService.getGalleries().subscribe((list) => this.updateGalleries(list))
            
          });
      }
    });
  }

  private updateGalleries(list : Gallery[])
  {
    this.galleries.next(list);
  }
}
