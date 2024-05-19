import { Character } from './../interfaces/character.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },{
      name: 'Goku',
      power: 9500,
    },{
      name: 'Vegeta',
      power: 7500,
    }
  ];

  onNewCharacter(character: Character):void{
    console.log(character.name, character.power);
    this.characters.push(character);
  }

  onDeleteCharacter(index: number):void{
    this.characters.splice(index, 1);
  }
}
