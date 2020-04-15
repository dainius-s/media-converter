import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-left',
  templateUrl: './time-left.component.html'
})
export class TimeLeftComponent implements OnInit {
  @Input() timeLeft: number;
  private timeInterval: any;
  public timer: any;

  constructor() { }

  ngOnInit() {
    this.updateClock(); // run function once at first to avoid delay
    this.timeInterval = setInterval(() => { this.updateClock(); }, 1000);
  }

  updateClock() {
    this.timeLeft -= 1000;
    this.timer = this.getTimeRemaining();
    if (this.timer.total <= 0) {
      clearInterval(this.timeInterval);
    }
  }

  getTimeRemaining() {
    const total = this.timeLeft;
    const seconds = Math.floor( (total / 1000) % 60 );
    const minutes = Math.floor( (total / 1000 / 60) % 60 );
    const hours = Math.floor( (total / (1000 * 60 * 60)) % 24 );
    const days = Math.floor( total / (1000 * 60 * 60 * 24) );
    return {
      total: total,
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days
    };
  }

}
