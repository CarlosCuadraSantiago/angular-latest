import { Component, OnInit, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NasaService } from './services/nasa-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  providers: [NasaService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('angular-latest');

  constructor(readonly nasaService: NasaService) {}

  ngOnInit() {
    setTimeout(() => {
      this.title.set('testing signal');
    }, 500);
  }
}
