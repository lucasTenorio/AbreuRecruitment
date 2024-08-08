import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Gallery } from '../models/Gallery';
import { Artwork } from '../models/Artwork';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  gallery : Gallery = {
    id: '',
    name: '',
    city: '',
    manager: '',
    nbrOfArtWorksOnDisplay: 0
  };
  readonly dialogRef = inject(MatDialogRef<ModalComponent>);
  @Inject(MAT_DIALOG_DATA) data : Gallery = {
    name: '',
    city: '',
    manager: '',
    nbrOfArtWorksOnDisplay: 0
  };
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  close()
  {
    this.dialogRef.close({data : this.data});
  }
}


