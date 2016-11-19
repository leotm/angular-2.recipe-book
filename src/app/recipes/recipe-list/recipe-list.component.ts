import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipe = new Recipe('Dummy', 'Description of Dummy', 'http://3manfactory.co.uk/wp-content/uploads/2012/12/3mf-dummy.jpg')

  constructor() { }

  ngOnInit() {
  }

}
