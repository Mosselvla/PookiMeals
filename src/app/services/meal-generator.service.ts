import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root',
})
export class MealGeneratorService {
  mealList: Meal[]

  constructor() {
    this.mealList = [
      {
        name: 'Mixin Rice',
        desc: "Beste dish ooit alles",
        url: "https://www.youtube.com/watch?v=mOYZaiDZ7BM"
      }
    ];
  }

  getMeal(): Meal {
    return this.mealList[Math.floor(Math.random() * this.mealList.length)];
  }
}
