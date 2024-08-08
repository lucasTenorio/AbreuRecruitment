import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artwork } from '../../models/Artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService { 
  private baseUrl = 'https://localhost:7042/api/art-works'
  constructor(private http: HttpClient) { }

  getArtWorkList(galleryId : string): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.baseUrl}/${galleryId}`);
  }
}
