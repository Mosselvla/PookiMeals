import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root',
})
export class MealGeneratorService {
  mealList: Meal[]

  constructor() {
    this.mealList = [
      // Week 9
      {
        name: "Lasagna",
        bentoable: true
      },
      {
        name: "Japanese curry",
        desc: "Met wortel, ui en doperwten",
        bentoable: true
      },
      {
        name: "Miso lentil and cabbage soup",
        url: "https://www.bbcgoodfood.com/recipes/miso-lentil-cabbage-soup",
        bentoable: true
      },
      {
        name: "Pizza (Freezer)",
        bentoable: false
      },
      {
        name: "Hoisin Chicken Stir-Fry",
        url: "https://www.marionskitchen.com/hoisin-chicken-stir-fry/",
        bentoable: true
      },
      {
        name: "Garlic prawn udon",
        desc: "Met broccoli en ui",
        bentoable: false
      },
      // Week 10
      {
        name: "Mushroom and chicken spaghetti",
        desc: "Met kipfilet en zoete ui",
        url: "https://www.youtube.com/shorts/Q-durQjwA2Q",
        bentoable: true
      },
      {
        name: "Telo with bakkeljauw, steamed greens and peanut sauce",
        url: "https://www.youtube.com/watch?v=mO9hpebRP54",
        bentoable: false
      },
      {
        name: "Airfryer tofu bowl",
        url: "https://www.youtube.com/shorts/zO-7D0qfESA",
        bentoable: true
      },
      {
        name: "Chicken shoarma",
        bentoable: true
      },
      {
        name: "Katsu curry with rice",
        bentoable: true
      },
      // Week 11
      {
        name: "Porkbelly with rice",
        bentoable: true
      },
      {
        name: "Meat dish/Gehaktschotel",
        desc: "Met doperwten en wortel",
        bentoable: true
      },
      {
        name: "Pad See Ew",
        bentoable: false
      },
      {
        name: "WHITE PEOPLE TACO NIGHT",
        bentoable: false
      },
      {
        name: "Buldak gnocchi",
        bentoable: true
      },
      // Week 12
      {
        name: "Jjajangmyeon",
        bentoable: true
      },
      {
        name: "Chicken wings with potato wedges and veggies",
        bentoable: true
      },
      {
        name: "Vegan gyros bowl with couscous",
        bentoable: true
      },
      {
        name: "Mixed rice",
        desc: "Met bijv. chilli oil eggs/tofu/dumplings",
        bentoable: true
      },
      // Week 13
      {
        name: "Vegetarian Shepherd's Pie",
        bentoable: true
      },
      {
        name: "Moroccan chicken with greens, salad and bread",
        url: "https://www.youtube.com/shorts/AJSZzt_d7yI",
        bentoable: false
      },
      // Week 14
      {
        name: "Broccoli Mac & Cheese",
        bentoable: true
      },
      {
        name: "Hummus and lebanese flatbread",
        desc: "Falafel, ui, geroosterde aubergines, hummus, flatbread, tzatziki, olijfolie, komkommer en rode ui",
        bentoable: false
      },
      {
        name: "Mushroom risotto",
        bentoable: false
      },
      {
        name: "HAMBURGERS",
        bentoable: false
      },
      // Week 15
      {
        name: "Rice with chicken and greens",
        bentoable: true
      },
      {
        name: "Butter chicken",
        bentoable: true
      },
      {
        name: "Enchiladas",
        bentoable: true
      },
      {
        name: "Köfte",
        bentoable: true
      },
      // Week 16
      {
        name: "Vegetarian wraps",
        bentoable: true
      },
      {
        name: "Beef blocks with snow peas, carrot, onion and mexican rice",
        bentoable: true
      },
      {
        name: "Spaghetti & Chicken meatballs",
        bentoable: true
      },
      {
        name: "Airfryer tofu with champignons and sesame",
        url: "https://www.youtube.com/shorts/HcswWRPv62g",
        bentoable: true
      },
      {
        name: "Oven chicken",
        bentoable: true
      },
      // Week 17
      {
        name: "Vegetarian fajita with whole wheat pitas",
        bentoable: true
      },
      {
        name: "Quesadillas with stirfried veggies, cheese and egg",
        bentoable: true
      },
      {
        name: "Fritatta",
      },
      {
        name: "Tex-Mex filled bell peppers",
        bentoable: true
      },
      // Week 18
      {
        name: "Stuffed courgette with mince meat, tomato cubes, orzo and red onion",
      },
      {
        name: "Falafel wrap with lettuce, tomato, cucumber and tzatziki",
        bentoable: true
      },
      {
        name: "Lemon garlic shrimp pasta with asparagus",
        bentoable: true
      },
      {
        name: "Homemade Pizza",
      },
      // Week 19
      {
        name: "Teriyaki chicken with udon noodles",
        bentoable: true
      },
      {
        name: "Bibimbap",
        bentoable: true
      },
      {
        name: "Spring orzo with peas, leek, parma cheese and burrata",
        bentoable: true
      },
      {
        name: "Peanut nachos",
      },
      {
        name: "Tjauw min",
        bentoable: true
      },
      // Week 20
      {
        name: "Chicken friccasee with potato mash",
        url: "https://youtu.be/sqelF9LaAlQ?si=sv6V3VDQseUaO9EF",
        bentoable: true
      },
      {
        name: "Japanese curry with tofu katsu",
      },
      {
        name: "Shoulder chop (karbonade) with airfryer potatoes and greens",
      },
      {
        name: "Airfryer porkbelly",
      },
      {
        name: "SMASH BURGER TACOS",
      },
      // Week 21
      {
        name: "Chicken fajita with rice",
      },
      {
        name: "Vegetarian Tex-Mex stuffed bell peppers",
      },
      {
        name: "Chicken and pasta",
      },
      // Week 22
      {
        name: "Gnocchi with sundried tomato sauce, champignons and cheese",
      },
      {
        name: "Tofu dakgalbi with rice",
        desc: "Puffed tofu met gochujang, lente ui, ui, kool, rice cakes"
      },
      // Week 23
      {
        name: "Airfryer taquitos",
      },
      // Week 24
      {
        name: "Baked ziti",
      },
      // Week 25
      {
        name: "White chicken lasagna",
      },
      {
        name: "ARMY BASE STEW",
      },
      // Week 26
      {
        name: "Beef pasta",
      },
      {
        name: "Grilled chicken thigh with mexican rice, corn and bimi",
      },
      {
        name: "Halloumi wraps",
      },
      {
        name: "Marry me chicken",
      },
      {
        name: "Pelmeni",
      },
      // Week 27
      {
        name: "Shephard's Pie",
      },
      {
        name: "Spaghetti bolognese",
      },
      {
        name: "Veggie tempura curry",
      },
      {
        name: "Chicken shoarma nachos",
      },
      // Week 28
      {
        name: "Curry wonton soup with paksoi",
      },
      // Week 29
      {
        name: "Beef and broccoli",
      },
      {
        name: "Smashed potato cheeseburger bowl",
        url: "https://www.instagram.com/reel/C9KoaBooGUt/?utm_source=ig_web_copy_link"
      },
      {
        name: "Oven ravioli with gruyere cheese",
      },
      {
        name: "Dumpling salad",
        url: "https://www.instagram.com/reel/C9HLAV6qWDJ/?igsh=MWl4c3RzczE4YnRsMA=="
      },
      // Week 30
      {
        name: "Chicken gyros",
      },
      {
        name: "Fried fish with tartar sauce, baked potato and veggies",
        url: "https://www.instagram.com/reel/C9HLAV6qWDJ/?igsh=MWl4c3RzczE4YnRsMA=="
      },
      {
        name: "Japanese tomato curry",
      },
      {
        name: "Airfryer chicken thighs and fried rice",
      },
      {
        name: "Springrolls",
      },
      // Week 31
      {
        name: "Mezzelune with mushrooms",
        url: "https://www.ah.nl/allerhande/recept/R-R1190883/mezzelune-met-paddenstoelenroomsaus-en-spinazie"
      },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
      // {
      //   name: "",
      // },
    ];
  }

  getMeal(): Meal {
    return this.mealList[Math.floor(Math.random() * this.mealList.length)];
  }
}
