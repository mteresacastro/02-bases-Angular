import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizeName(): string{ // el get transforma el método en una propiedad
    return this.name.toUpperCase()
  };

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  };

  changeName():void{
    this.name = 'Spiderman';
  };

  changeAge():void{
    this.age = 18;
  };

  resetForm():void{
    this.name = 'ironman'
    this.age = 45;
  };
}
