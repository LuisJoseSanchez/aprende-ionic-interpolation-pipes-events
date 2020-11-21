import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example08',
  templateUrl: './example08.page.html',
  styleUrls: ['./example08.page.scss'],
})
export class Example08Page implements OnInit {

  temperature: number;

  constructor() { }

  ngOnInit() {
    this.temperature = Math.floor(Math.random() * 20 + 1);
  }

  incTemperature(increment: number) {
    this.temperature += increment;
  }

}