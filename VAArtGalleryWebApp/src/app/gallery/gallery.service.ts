import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Gallery } from '../models/Gallery';
import { GalleryResult } from '../models/GalleryResult';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private baseUrl = 'https://localhost:7042/api/art-galleries'
  constructor(private http: HttpClient) { }

  getGalleries(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(`${this.baseUrl}`);
  }

  postGalleryAsync(gallery : Gallery): Observable<GalleryResult>{
    return this.http.post<GalleryResult>(`${this.baseUrl}`, gallery)
            .pipe(
              catchError((error: any, caught: Observable<any>): Observable<any> => {
                console.log(error.message);
                console.error('There was an error!', error);
                return of();
            })
            );
  }
}
