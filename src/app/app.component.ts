import { Component } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { MatBottomSheet } from '@angular/material';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iot-front';
  blinks = 2;
  pause = 250;
  delay = 3;
  value = 255;
  constructor(
    private sharedDataService: SharedDataService,
    private bottomShett: MatBottomSheet) { }
  blink() {
    this.sharedDataService.getPetition('/blink?blinks=' + this.blinks + '&&pause=' + this.pause).subscribe(res => {
    });
  }
  fade() {
    this.sharedDataService.getPetition('/fade?delay=' + this.delay).subscribe(res => {
    });
  }
  pwm() {
    this.sharedDataService.getPetition('/pwm?value=' + this.value).subscribe(res => {
    });
  }

  openBottomSheet(): void {
    this.bottomShett.open(SettingsComponent);
  }
}
