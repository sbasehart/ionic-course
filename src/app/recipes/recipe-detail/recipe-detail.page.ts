import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alrtController: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.router.navigate(['/recipes'])
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
    this.alrtController.create(
      {
        header: 'Are You Sure?',
        message: 'Delete this recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Yes, delete this',
            handler: () => {
              this.recipesService.deleteRecipe(this.recipe.id),
              this.router.navigate(['/recipes'])
            }
          }
        ]
      }
    )
      .then(alertEl => {
        alertEl.present()
      })
  }

}
