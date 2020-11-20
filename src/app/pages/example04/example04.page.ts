import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example04',
  templateUrl: './example04.page.html',
  styleUrls: ['./example04.page.scss'],
})
export class Example04Page implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

  clearText() {
    this.text = "";
  }

}