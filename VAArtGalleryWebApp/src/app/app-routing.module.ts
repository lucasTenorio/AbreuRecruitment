import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtworkPortfolioComponent } from './artwork-portfolio/artwork-portfolio.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'art-galleries', component: GalleryComponent },
  { path: 'artworks/:title/:galleryId', component : ArtworkPortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
