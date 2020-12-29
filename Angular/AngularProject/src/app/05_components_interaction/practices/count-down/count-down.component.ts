import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  value = 0;

  interval;

  constructor() { }

  ngOnInit(): void {

  }

  start() {
    if (this.value <= 0) {
      return;
    }


    this.interval = setInterval( () => {

      this.value -= 0.1;

      if (this.value <= 0) {
        clearInterval(this.interval);
        this.value = 0;
      }

    }, 100);
  }


  stop() {
    clearTimeout(this.interval);
  }


  resume() {
    this.start();
  }

}
