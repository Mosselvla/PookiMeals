import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root',
})
export class MealGeneratorService {
  mealList: Meal[]
  // TODO move previousMealList here (ideally)

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
        bentoable: true
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
        bentoable: true
      },
      {
        name: "Vegetarian Tex-Mex stuffed bell peppers",
        bentoable: true
      },
      {
        name: "Chicken and pasta",
        bentoable: true
      },
      // Week 22
      {
        name: "Gnocchi with sundried tomato sauce, champignons and cheese",
        bentoable: true
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
        bentoable: true
      },
      // Week 25
      {
        name: "White chicken lasagna",
        bentoable: true
      },
      {
        name: "ARMY BASE STEW",
      },
      // Week 26
      {
        name: "Beef pasta",
        bentoable: true
      },
      {
        name: "Grilled chicken thigh with mexican rice, corn and bimi",
        bentoable: true
      },
      {
        name: "Halloumi wraps",
      },
      {
        name: "Marry me chicken",
        bentoable: true
      },
      {
        name: "Pelmeni",
      },
      // Week 27
      {
        name: "Shephard's Pie",
        bentoable: true
      },
      {
        name: "Spaghetti bolognese",
        bentoable: true
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
        bentoable: true
      },
      {
        name: "Smashed potato cheeseburger bowl",
        url: "https://www.instagram.com/reel/C9KoaBooGUt/?utm_source=ig_web_copy_link",
        bentoable: true
      },
      {
        name: "Oven ravioli with gruyere cheese",
        bentoable: true
      },
      {
        name: "Dumpling salad",
        url: "https://www.instagram.com/reel/C9HLAV6qWDJ/?igsh=MWl4c3RzczE4YnRsMA=="
      },
      // Week 30
      {
        name: "Chicken gyros",
        bentoable: true
      },
      {
        name: "Fried fish with tartar sauce, baked potato and veggies",
        url: "https://www.instagram.com/reel/C9HLAV6qWDJ/?igsh=MWl4c3RzczE4YnRsMA=="
      },
      {
        name: "Japanese tomato curry",
        bentoable: true
      },
      {
        name: "Airfryer chicken thighs and fried rice",
        bentoable: true
      },
      {
        name: "Springrolls",
      },
      // Week 31
      {
        name: "Mezzelune with mushrooms",
        url: "https://www.ah.nl/allerhande/recept/R-R1190883/mezzelune-met-paddenstoelenroomsaus-en-spinazie",
        bentoable: true
      },
      {
        name: "Tomato orzo with burrata",
        url: "https://www.instagram.com/reel/C6rA8veo8Aq/?igsh=MXE1cjh0b2M4bG9nbQ==",
        bentoable: true
      },
      {
        name: "Shrimp taco's with mango & avocado salsa",
        url: "https://www.skinnytaste.com/perfect-air-fryer-shrimp/"
      },
      {
        name: "Leek quiche with feta",
        url: "https://www.ah.nl/allerhande/recept/R-R1198272/vegetarische-quiche-met-prei",
        bentoable: true
      },
      {
        name: "Chicken wings with mexican corn salad",
        url: "https://www.ah.nl/allerhande/recept/R-R1190580/mexicaanse-maissalade-met-avocado-en-mango"
      },
      // Week 32
      {
        name: "Burrito with chick pea spread",
        url: "https://www.ah.nl/allerhande/recept/R-R1197692/burrito-s-met-kikkererwtenspread-en-frisse-komkommersalade",
        bentoable: true
      },
      {
        name: "Couscous with halloumi and snow peas",
        url: "https://www.ah.nl/allerhande/recept/R-R1192863/quinoa-met-halloumi-en-peultjes"
      },
      {
        name: "McChicken Wrap",
        bentoable: true
      },
      {
        name: "Pasta alla norma",
        url: "https://www.ah.nl/allerhande/recept/R-R961516/pasta-alla-norma",
        bentoable: true
      },
      {
        name: "Flammkuchen with goat cheese and champignons",
        url: "https://www.ah.nl/allerhande/recept/R-R1192922/flammkuchen-vegetarisch-met-geitenkaas"
      },
      {
        name: "Spanakopita",
        url: "https://www.leukerecepten.nl/recepten/spanakopita/"
      },
      // Week 33
      {
        name: "Pasta with split peas sauce",
        url: "https://www.instagram.com/reel/C-F-PmDqSHc/?igsh=aDZzM3gzNXNnZWJ3",
        bentoable: true
      },
      {
        name: "Pan lasagna",
        url: "https://www.ah.nl/allerhande/recept/R-R1200298/panlasagne-met-gehakt-en-mozzarella",
        bentoable: true
      },
      {
        name: "Korean veggie pancakes",
      },
      // Week 34
      {
        name: "Dahl with Greek yoghurt and baked onion",
        url: "https://www.ah.nl/allerhande/recept/R-R1199614/gezonde-dahl-met-griekse-yoghurt-en-gebakken-ui-van-london-loy",
        bentoable: true
      },
      {
        name: "Macaroni with peas, champignons and chicken",
        url: "https://www.ah.nl/allerhande/recept/R-R1199957/romige-macaroni-met-kip-en-champignons",
        bentoable: true
      },
      {
        name: "Stuffed potato pancakes with salad and Greek yoghurt spread",
      },
      {
        name: "Vega gyoza vegetable soup with vermicelli and vegetarian meatballs",
      },
      {
        name: "STEAK NIGHT",
      },
      // Week 35
      {
        name: "Shakshuka with (vegetarian) meatballs",
        url: "https://www.ah.nl/allerhande/recept/R-R1192383/tunesische-shakshuka-met-gehaktballetjes"
      },
      {
        name: "Ravioli, mushroom and cauliflower oven bake",
        url: "https://www.ah.nl/allerhande/recept/R-R1197453/ravioli-ovenschotel-met-paddenstoelen-en-bloemkool",
        bentoable: true
      },
      {
        name: "Courgette quiche with cheese and chives",
        url: "https://www.ah.nl/allerhande/recept/R-R1196447/courgettequiche-met-kaas-en-bieslook"
      },
      // Week 36
      {
        name: "Mushroom risotto with pancetta",
        url: "https://www.delhaize.be/nl/recepten/receptDetails/Risotto-met-champignons-pancetta-en-truffelolie/r/f42a22b78bb744058eb615792a46c15b",
        bentoable: true
      },
      {
        name: "Japchae",
      },
      {
        name: "Gado Gado",
        url: "https://www.ah.nl/allerhande/recept/R-R1195174/gado-gado"
      },
      {
        name: "Karaage with cucumber salad and rice",
      },
      // Week 37
      {
        name: "Gnocchi oven bake with creamy chicken",
        url: "https://www.ah.nl/allerhande/recept/R-R1192683/gnocchi-ovenschotel-met-romige-kip",
        bentoable: true
      },
      {
        name: "Lomo saltado",
        url: "https://www.ah.nl/allerhande/recept/R-R1199202/lomo-saltado-met-friet"
      },
      {
        name: "Sambal goreng telor",
        url: "https://www.ah.nl/allerhande/recept/R-R1196824/sambal-goreng-telor-van-laura-en-erna"
      },
      {
        name: "Ossobuco with parsnip and potatoes from the oven with bread",
        url: "https://thomasculinair.nl/recept-ossobuco-uit-de-slowcooker/"
      },
      // Week 38
      {
        name: "Quesadilla's with pulled chicken and bell pepper",
        url: "https://www.ah.nl/allerhande/recept/R-R1200445/quesadilla-s-met-pulled-chicken-en-paprika",
        bentoable: true
      },
      {
        name: "Pumpkin soup with white beans and three-cheese toastie",
      },
      {
        name: "Apple-chicken meatballs with mashed potatoes",
        url: "https://www.nospoonnecessary.com/baked-spiced-hard-apple-cider-meatballs/",
        bentoable: true
      },
      // Week 39
      {
        name: "Beefy pasta with salad",
        url: "https://www.youtube.com/shorts/vX9YG73JIxg",
        bentoable: true
      },
      {
        name: "Kuku Sibzamini with yoghurt sauce, crudite and boiled eggs",
        url: "https://youtube.com/shorts/CrezGLvrE8o?si=GiooGYTqhcu8Q8Ri"
      },
      {
        name: "Channa Saag",
        url: "https://youtube.com/shorts/0ob--QxmpgQ?si=bfHkzW3NLH0NAHBB"
      },
      // Week 40
      {
        name: "Libanese arayes with salad",
        url: "https://youtube.com/shorts/oy5lV70UVXc?si=28kc5WEogsAuCzsS"
      },
      // Week 41
      {
        name: "Slow cooker hachee with potato mash",
        url: "https://www.ah.nl/allerhande/recept/R-R1192996/hachee-uit-de-slowcooker",
        bentoable: true
      },
      {
        name: "Cheeseburger kotthu roti",
      },
      {
        name: "Vegetable soup with bread and soup sticks",
      },
      // Week 42
      {
        name: "Thai peanut noodle salad",
        url: "https://www.drveganblog.com/thai-peanut-noodle-salad-recipe-meal-prep-friendly/",
        bentoable: true
      },
      {
        name: "Beef stew with garlic mash, vegetables and bread",
        bentoable: true
      },
      // Week 43
      {
        name: "Cauliflower butter chicken",
        bentoable: true
      },
      {
        name: "Roasted tomato soup with chorizo grilled cheese",
      },
      {
        name: "Nasi with oven chicken",
        bentoable: true
      },
      // Week 44
      {
        name: "Pancakes",
        bentoable: true
      },
      {
        name: "Rigatoni with kale and sausages",
        bentoable: true,
        url: "https://www.ah.nl/allerhande/recept/R-R1193405/mezzi-rigatoni-met-boerenkool-ricotta-en-runderworstjes"
      },
      {
        name: "Orzo with white beans and miso",
        bentoable: true,
        url: "https://www.ah.nl/allerhande/recept/R-R1199358/orzo-met-witte-bonen-venkel-en-miso-van-hugo-kennis"
      },
      {
        name: "Potato patties with mint-pea puree",
      },
      {
        name: "Leek quiche with cheese",
        url: "https://www.ah.nl/allerhande/recept/R-R1198468/preitaart-met-kaas"
      },
      {
        name: "Lamb curry with roti",
        bentoable: true
      },
      // Week 45
      {
        name: "Thai Penang curry",
        bentoable: true,
        url: "https://www.youtube.com/shorts/DSGRNoSTvLg"
      },
      {
        name: "Pork Adobo",
        bentoable: true
      },
      {
        name: "Boerenkool",
        bentoable: true
      },
      {
        name: "Noodles with tjauw min veggies and chicken cutlet",
        bentoable: true
      },
      {
        name: "Korma with chicken and paratha",
        bentoable: true
      },
    ];
  }

  getMeal(): Meal {
    return this.mealList[Math.floor(Math.random() * this.mealList.length)];
  }
}
