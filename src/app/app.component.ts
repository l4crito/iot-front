import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iot-front';
  blinks = 2;
  pause = 250;
  constructor(private sharedDataService: SharedDataService) { }
  blink() {
    this.sharedDataService.getPetition('/blink?blinks=' + this.blinks + '&&pause=' + this.pause).subscribe(res => {
      console.log(res);
    });
  }
  fade() {
    this.sharedDataService.getPetition('/fade?delay=3').subscribe(res => {
      console.log(res);
    });
  }
  pwm() {
    this.sharedDataService.getPetition('/pwm?value=255').subscribe(res => {
      console.log(res);
    });
  }
}
