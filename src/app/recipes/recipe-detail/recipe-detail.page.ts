import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        return;
      } else {
        const id = paramMap.get('id');
        this.recipe = this.recipesService.getRecipe(id)
      }
    })
  }

  editRecipe() {
    console.log('edit')
  }

  deleteRecipe() {
    this.recipesService.deleteRecipe(this.recipe.id),
    this.router.navigate(['/recipes'])
  }

}
