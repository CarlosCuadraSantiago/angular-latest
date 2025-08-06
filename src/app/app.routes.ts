import { Routes } from '@angular/router';
import { PictureOfTheDayComponent } from './pages/picture-of-the-day/picture-of-the-day.component';
import { SearchPictureComponent } from './pages/search-picture/search-picture.component';
import { App } from './app';

export const routes: Routes = [
  { path: 'picture-of-the-day', component: PictureOfTheDayComponent },
  { path: 'search-picture', component: SearchPictureComponent },
];
