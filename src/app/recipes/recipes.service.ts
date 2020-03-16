import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Cheese Lasagna',
      imageUrl: 'https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x500.jpg',
      ingredients: ['sauce', 'pasta', 'cheese']
    },
    {
      id: 'r2',
      title: 'Cucumber Salad',
      imageUrl: 'https://i2.wp.com/deliciousmeetshealthy.com/wp-content/uploads/2017/07/Cucumber-Salad-Recipe-2.jpg',
      ingredients: ['vinaigrette', 'cheese', 'cucumber']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === id
      })
    }
  }

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== id
    })
  }

}
