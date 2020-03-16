import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'lasagna',
      imageUrl: 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x500.jpg',
      ingredients: ['sauce', 'pasta', 'cheese']
    },
    {
      id: 'r2',
      title: 'salad',
      imageUrl: 'https://i2.wp.com/deliciousmeetshealthy.com/wp-content/uploads/2017/07/Cucumber-Salad-Recipe-2.jpg',
      ingredients: ['vinaigrette', 'cheese', 'cucumber']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
