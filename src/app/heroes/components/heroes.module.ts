import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component";




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  // siempre que use directivas Ng en un modulo creado por mí (no el modulo app, que ahi ya esta preconfigurado) necesitare importar CommonModule para que funcionen.
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}
