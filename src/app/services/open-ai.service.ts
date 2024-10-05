import { Injectable } from '@angular/core';
import { OpenAI } from 'openai';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  private client = new OpenAI({
    organization: 'org-J0oD1AOG8Nj3od4VpqdBn9L2',
    apiKey:
      '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',
    dangerouslyAllowBrowser: true,
  });

  constructor() {}

  public async requestSimilarMeals(meals: Meal[]): Promise<string> {
    let promptText =
      'ChatGPT, can you generate an alternative meal idea for each meal idea I have? I have these: ';
    meals.forEach((meal) => {
      promptText = promptText + meal.name + ', ';
    });
    const stream = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: promptText }],
      stream: true,
    });

    let answer = '';
    let numberedListItemRegex: RegExp = new RegExp(/([0-9])./);
    for await (const chunk of stream) {
      let chunkBit = chunk.choices[0]?.delta?.content;
      if (chunkBit) {
        console.log(chunkBit);
        if(chunkBit.match(numberedListItemRegex)) {
          chunkBit = '\n' + chunkBit;
        }
        answer = answer + chunkBit;
      }
    }
    return answer;
  }
}
