import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NasaService } from '../../services/nasa-service.service';

@Component({
  selector: 'app-picture-of-the-day',
  imports: [],
  templateUrl: './picture-of-the-day.component.html',
  styleUrl: './picture-of-the-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PictureOfTheDayComponent {
  protected readonly picOfTheDay: any = signal(undefined);

  constructor(readonly nasaService: NasaService) {
    this.nasaService.getPictureOfTheDay().subscribe((data: any) => {
      this.nasaService.setPictureOfTheDay(data);
      this.picOfTheDay.set(data);
    });
  }
}
