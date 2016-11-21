import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Ogi', 'Ogi is a fermented cereal pudding from Nigeria, typically made from maize, sorghum, or millet.[1] Traditionally, the grains are soaked in water for up to three days, before wet milling and sieving to remove husks. The filtered cereal is then allowed to ferment for up to three days until sour. It is then boiled into a pap, or cooked to make a creamy pudding. It can be taken with Moin Moin or Akara.', 'http://www.allnigerianrecipes.com/images/akamu-ogi.jpg'),
    new Recipe('Moussaka', 'Moussaka (/muːˈsɑːkə/, /ˌmuːsəˈkɑː/ or /ˌmuːsɑːˈkɑː/) is an eggplant- (aubergine) or potato-based dish, often including ground meat, in the cuisines of the countries of the former Ottoman Empire, with many local and regional variations.', 'http://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/59/13/0/piceIFigJ.jpg')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
