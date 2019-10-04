import { Injectable } from '@angular/core';
import {IRecipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: IRecipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
      ingredients: ['French Fries', 'Pork Meat']
    },
    {
      id: 'r2',
      title: 'Spaghetti Carbonara',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Spaghetti_alla_Carbonara.jpg',
      ingredients: ['Spaghetti', 'Parmesan', 'Bacon']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
