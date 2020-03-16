import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [ ]

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('LOADED RECIPES');
    console.log(this.recipes);

  }

  
  ionViewDidEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter() {

  }

  ionViewDidLeave() {

  }

  ionViewWillLeave() {

  }

}
