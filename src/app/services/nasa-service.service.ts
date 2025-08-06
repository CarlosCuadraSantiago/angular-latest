import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  apiKey = '?api_key=1YzjIXze4OoMJ2cd8OynR7U4lizr5K6MIJVxnwNn';
  apodUrl: string = 'https://api.nasa.gov/planetary/apod';

  protected readonly picOfTheDay: any = signal(undefined);

  constructor(readonly http: HttpClient) {}

  getPictureOfTheDay() {
    if (!this.picOfTheDay()) {
      return this.get(this.apodUrl);
    }
    return of(this.picOfTheDay());
  }

  setPictureOfTheDay(data: any) {
    if (!this.picOfTheDay()) {
      this.picOfTheDay.set(data);
    }
  }

  get(url: string) {
    return this.http.get(`${url}${this.apiKey}`).pipe((data) => data);
  }
}
