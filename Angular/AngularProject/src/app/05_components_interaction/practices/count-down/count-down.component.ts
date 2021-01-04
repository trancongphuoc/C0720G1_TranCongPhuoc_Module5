import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  value = 0;

  interval;

  time = 100;

  constructor() { }

  ngOnInit(): void {}

  start() {
    clearInterval(this.interval);

    this.time = 100;

    if (this.value <= 0) {
      return;
    }

    this.interval = setInterval( () => {

      this.value -= 0.1;

      if (this.value <= 0) {
        clearInterval(this.interval);
        this.value = 0;
      }
    }, this.time);
  }

  stop() {
    clearInterval(this.interval);
    // clearTimeout(this.interval);
  }

  resume() {
    this.start();
  }

  acceleration() {
    clearInterval(this.interval);
    this.time /= 2;

    if (this.value <= 0) {
      return;
    }

    this.interval = setInterval( () => {

      this.value -= 0.1;

      if (this.value <= 0) {
        clearInterval(this.interval);
        this.value = 0;
      }
    }, this.time );
  }
}
