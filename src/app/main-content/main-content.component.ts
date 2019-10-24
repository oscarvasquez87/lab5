import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  greeting2 = '';
  saying1 = 'Mow Mow';
  saying2 = 'Num Num';

  constructor() { }

  ngOnInit() {

  }

    showGreeting2() {
      // const row3 = document.getElementById('r2c2');
      this.greeting2 = this.saying1 + ' ' + this.saying2 + '.';
    }

    resetGreeting2() {
      // const row3 = document.getElementById('r2c2');
      this.greeting2 = 'r2c2';

    }
  }
