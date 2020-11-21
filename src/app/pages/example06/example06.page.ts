import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example06',
  templateUrl: './example06.page.html',
  styleUrls: ['./example06.page.scss'],
})
export class Example06Page implements OnInit {

  numbers: number[];
  fruits: string[];

  inputNumber: number;
  inputFruit: string;

  constructor() { }

  ngOnInit() {
    this.numbers = [1, 5, 8, 24, 32, 11, 55];
    this.fruits = ["pera", "manzana", "melón", "sandía", "mango"];
  }

  insertNumber() {
    this.numbers.push(this.inputNumber);
    this.inputNumber = null; // limpia el input
  }

  insertFruit() {
    this.fruits.push(this.inputFruit);
    this.inputFruit = null; // limpia el input
  }
}
