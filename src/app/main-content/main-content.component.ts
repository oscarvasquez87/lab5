import { Component, OnInit } from '@angular/core';

interface IStudent {
  ID: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        ID: 1,
        firstName: 'Oscar',
        lastName: 'Vasquez',
        course: 'Programing',
        editMode: false
      },
      {
        ID: 2,
        firstName: 'Kevin',
        lastName: 'McDonold',
        course: 'CIA 101',
        editMode: false
      },
      {
        ID: 3,
        firstName: 'Steve',
        lastName: 'Jobs',
        course: 'Web Programing',
        editMode: false
      }
    ];
  }

  addStudent() {
    this.studentArray.unshift({
      ID: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }

  removeStudent(index: number) {
    this.studentArray.splice(index, 1);
  }

  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;

    this.sort('asc');
  }

  sort(direction: string) {
    this.studentArray.sort((a: IStudent, b: IStudent) => {
      return a.ID < b.ID ? -1 : 1;
    });
  }

}
