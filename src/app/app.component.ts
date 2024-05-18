import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'bases';
  counter = 20;

  increaseBy(value: number):void {
    this.counter += value;
  };

  resetCounter():void {
    this.counter = 20;
  }
}
