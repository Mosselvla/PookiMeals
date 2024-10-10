import { Component } from '@angular/core';
import { Meal } from '../../models/meal';
import { MealGeneratorService } from '../../services/meal-generator.service';
import { OpenAIService } from '../../services/open-ai.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-meal-generator',
  standalone: true,
  imports: [ReactiveFormsModule, MatCheckboxModule],
  templateUrl: './meal-generator.component.html',
  styleUrl: './meal-generator.component.scss',
})
export class MealGeneratorComponent {
  meal?: Meal;
  previousMeals: Meal[] = [];
  openAiAnswer: string = '';
  loadingOpenAi = false;
  mealGenerationOpts: FormGroup = new FormGroup({
    isVegetarian: new FormControl(false)
  });

  constructor(private _mealGeneratorService: MealGeneratorService, private _openAiService: OpenAIService) {
    _mealGeneratorService;
  }

  goToLink(url?: string) {
    window.open(url, '_blank');
  }

  public getMeal() {
    if (this.meal) {
      this.previousMeals.push(this.meal);
    }
    let foundMeal = false;
    let result: Meal = new Meal('');
    while (!foundMeal) {
      result = this._mealGeneratorService.getMeal();
      if (!this.previousMeals.some((m) => m.name === result.name)) {
        foundMeal = true;
      }
    }
    if (result) {
      this.meal = result;
    }
  }

  public async getSimilarMeals() {
    this.loadingOpenAi = true;
    console.log('Checkbox value: ', this.mealGenerationOpts.controls['isVegetarian'].value);
    this.openAiAnswer = await this._openAiService.requestSimilarMeals(this.previousMeals, this.mealGenerationOpts.controls['isVegetarian'].value);
    this.loadingOpenAi = false;
  }
}
