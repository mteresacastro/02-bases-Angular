import { Character } from './../../interfaces/character.interface';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {

  // el decorador input nos indica que este componente va a recibir algo del componente padre
 @Input()
  public characterList : Character[] = [
    {
      name: 'Trunks',
      power: 10,
    }
  ]
 }
