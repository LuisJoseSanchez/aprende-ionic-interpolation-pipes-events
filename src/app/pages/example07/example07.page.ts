import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { LIST_OF_EMPLOYEES } from 'src/assets/list-of-employees';

@Component({
  selector: 'app-example07',
  templateUrl: './example07.page.html',
  styleUrls: ['./example07.page.scss'],
})
export class Example07Page implements OnInit {

  listOfEmployees: Employee[];

  constructor() { }

  ngOnInit() {
    this.listOfEmployees = LIST_OF_EMPLOYEES;
  }

}
