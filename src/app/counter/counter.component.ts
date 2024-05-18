import { Component } from "@angular/core";




@Component({
  selector:'app-counter',
  template:`
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

   `
})
export class CounterComponent{

  counter = 20;

  increaseBy(value: number):void {
    this.counter += value;
  };

  resetCounter():void {
    this.counter = 20;
  }
}

//existen snippets, si pulsas a- se abre desplegagle, podemos usar el a-component
