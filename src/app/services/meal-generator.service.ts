import { Injectable } from '@angular/core';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root',
})
export class MealGeneratorService {
  mealList: Meal[];
  // TODO move previousMealList here (ideally)

  constructor() {
    this.mealList = [
      // Week 9
      {
        name: 'Lasagna',
        bentoable: true,
      },
      {
        name: 'Japanese curry',
        desc: 'Met wortel, ui en doperwten',
        bentoable: true,
      },
      {
        name: 'Miso lentil and cabbage soup',
        url: 'https://www.bbcgoodfood.com/recipes/miso-lentil-cabbage-soup',
        bentoable: true,
      },
      {
        name: 'Pizza (Freezer)',
        bentoable: false,
      },
      {
        name: 'Hoisin Chicken Stir-Fry',
        url: 'https://www.marionskitchen.com/hoisin-chicken-stir-fry/',
        bentoable: true,
      },
      {
        name: 'Garlic prawn udon',
        desc: 'Met broccoli en ui',
        bentoable: false,
      },
      // Week 10
      {
        name: 'Mushroom and chicken spaghetti',
        desc: 'Met kipfilet en zoete ui',
        url: 'https://www.youtube.com/shorts/Q-durQjwA2Q',
        bentoable: true,
      },
      {
        name: 'Telo with bakkeljauw, steamed greens and peanut sauce',
        url: 'https://www.youtube.com/watch?v=mO9hpebRP54',
        bentoable: false,
      },
      {
        name: 'Airfryer tofu bowl',
        url: 'https://www.youtube.com/shorts/zO-7D0qfESA',
        bentoable: true,
      },
      {
        name: 'Chicken shoarma',
        bentoable: true,
      },
      {
        name: 'Katsu curry with rice',
        bentoable: true,
      },
      // Week 11
      {
        name: 'Porkbelly with rice',
        bentoable: true,
      },
      {
        name: 'Meat dish/Gehaktschotel',
        desc: 'Met doperwten en wortel',
        bentoable: true,
      },
      {
        name: 'Pad See Ew',
        bentoable: false,
      },
      {
        name: 'WHITE PEOPLE TACO NIGHT',
        bentoable: false,
      },
      {
        name: 'Buldak gnocchi',
        bentoable: true,
      },
      // Week 12
      {
        name: 'Jjajangmyeon',
        bentoable: true,
      },
      {
        name: 'Chicken wings with potato wedges and veggies',
        bentoable: true,
      },
      {
        name: 'Vegan gyros bowl with couscous',
        bentoable: true,
      },
      {
        name: 'Mixed rice',
        desc: 'Met bijv. chilli oil eggs/tofu/dumplings',
        bentoable: true,
      },
      // Week 13
      {
        name: "Vegetarian Shepherd's Pie",
        bentoable: true,
      },
      {
        name: 'Moroccan chicken with greens, salad and bread',
        url: 'https://www.youtube.com/shorts/AJSZzt_d7yI',
        bentoable: false,
      },
      // Week 14
      {
        name: 'Broccoli Mac & Cheese',
        bentoable: true,
      },
      {
        name: 'Hummus and lebanese flatbread',
        desc: 'Falafel, ui, geroosterde aubergines, hummus, flatbread, tzatziki, olijfolie, komkommer en rode ui',
        bentoable: false,
      },
      {
        name: 'Mushroom risotto',
        bentoable: false,
      },
      {
        name: 'HAMBURGERS',
        bentoable: false,
      },
      // Week 15
      {
        name: 'Rice with chicken and greens',
        bentoable: true,
      },
      {
        name: 'Butter chicken',
        bentoable: true,
      },
      {
        name: 'Enchiladas',
        bentoable: true,
      },
      {
        name: 'Köfte',
        bentoable: true,
      },
      // Week 16
      {
        name: 'Vegetarian wraps',
        bentoable: true,
      },
      {
        name: 'Beef blocks with snow peas, carrot, onion and mexican rice',
        bentoable: true,
      },
      {
        name: 'Spaghetti & Chicken meatballs',
        bentoable: true,
      },
      {
        name: 'Airfryer tofu with champignons and sesame',
        url: 'https://www.youtube.com/shorts/HcswWRPv62g',
        bentoable: true,
      },
      {
        name: 'Oven chicken',
        bentoable: true,
      },
      // Week 17
      {
        name: 'Vegetarian fajita with whole wheat pitas',
        bentoable: true,
      },
      {
        name: 'Quesadillas with stirfried veggies, cheese and egg',
        bentoable: true,
      },
      {
        name: 'Fritatta',
      },
      {
        name: 'Tex-Mex filled bell peppers',
        bentoable: true,
      },
      // Week 18
      {
        name: 'Stuffed courgette with mince meat, tomato cubes, orzo and red onion',
      },
      {
        name: 'Falafel wrap with lettuce, tomato, cucumber and tzatziki',
        bentoable: true,
      },
      {
        name: 'Lemon garlic shrimp pasta with asparagus',
        bentoable: true,
      },
      {
        name: 'Homemade Pizza',
      },
      // Week 19
      {
        name: 'Teriyaki chicken with udon noodles',
        bentoable: true,
      },
      {
        name: 'Bibimbap',
        bentoable: true,
      },
      {
        name: 'Spring orzo with peas, leek, parma cheese and burrata',
        bentoable: true,
      },
      {
        name: 'Peanut nachos',
      },
      {
        name: 'Tjauw min',
        bentoable: true,
      },
      // Week 20
      {
        name: 'Chicken friccasee with potato mash',
        url: 'https://youtu.be/sqelF9LaAlQ?si=sv6V3VDQseUaO9EF',
        bentoable: true,
      },
      {
        name: 'Japanese curry with tofu katsu',
      },
      {
        name: 'Shoulder chop (karbonade) with airfryer potatoes and greens',
        bentoable: true,
      },
      {
        name: 'Airfryer porkbelly',
      },
      {
        name: 'SMASH BURGER TACOS',
      },
      // Week 21
      {
        name: 'Chicken fajita with rice',
        bentoable: true,
      },
      {
        name: 'Vegetarian Tex-Mex stuffed bell peppers',
        bentoable: true,
      },
      {
        name: 'Chicken and pasta',
        bentoable: true,
      },
      // Week 22
      {
        name: 'Gnocchi with sundried tomato sauce, champignons and cheese',
        bentoable: true,
      },
      {
        name: 'Tofu dakgalbi with rice',
        desc: 'Puffed tofu met gochujang, lente ui, ui, kool, rice cakes',
      },
      // Week 23
      {
        name: 'Airfryer taquitos',
      },
      // Week 24
      {
        name: 'Baked ziti',
        bentoable: true,
      },
      // Week 25
      {
        name: 'White chicken lasagna',
        bentoable: true,
      },
      {
        name: 'ARMY BASE STEW',
      },
      // Week 26
      {
        name: 'Beef pasta',
        bentoable: true,
      },
      {
        name: 'Grilled chicken thigh with mexican rice, corn and bimi',
        bentoable: true,
      },
      {
        name: 'Halloumi wraps',
      },
      {
        name: 'Marry me chicken',
        bentoable: true,
      },
      {
        name: 'Pelmeni',
      },
      // Week 27
      {
        name: "Shephard's Pie",
        bentoable: true,
      },
      {
        name: 'Spaghetti bolognese',
        bentoable: true,
      },
      {
        name: 'Veggie tempura curry',
      },
      {
        name: 'Chicken shoarma nachos',
      },
      // Week 28
      {
        name: 'Curry wonton soup with paksoi',
      },
      // Week 29
      {
        name: 'Beef and broccoli',
        bentoable: true,
      },
      {
        name: 'Smashed potato cheeseburger bowl',
        url: 'https://www.instagram.com/reel/C9KoaBooGUt/?utm_source=ig_web_copy_link',
        bentoable: true,
      },
      {
        name: 'Oven ravioli with gruyere cheese',
        bentoable: true,
      },
      {
        name: 'Dumpling salad',
        url: 'https://www.instagram.com/reel/C9HLAV6qWDJ/?igsh=MWl4c3RzczE4YnRsMA==',
      },
      // Week 30
      {
        name: 'Chicken gyros',
        bentoable: true,
      },
      {
        name: 'Fried fish with tartar sauce, baked potato and veggies',
        url: 'https://www.instagram.com/reel/C9HLAV6qWDJ/?igsh=MWl4c3RzczE4YnRsMA==',
      },
      {
        name: 'Japanese tomato curry',
        bentoable: true,
      },
      {
        name: 'Airfryer chicken thighs and fried rice',
        bentoable: true,
      },
      {
        name: 'Springrolls',
      },
      // Week 31
      {
        name: 'Mezzelune with mushrooms',
        url: 'https://www.ah.nl/allerhande/recept/R-R1190883/mezzelune-met-paddenstoelenroomsaus-en-spinazie',
        bentoable: true,
      },
      {
        name: 'Tomato orzo with burrata',
        url: 'https://www.instagram.com/reel/C6rA8veo8Aq/?igsh=MXE1cjh0b2M4bG9nbQ==',
        bentoable: true,
      },
      {
        name: "Shrimp taco's with mango & avocado salsa",
        url: 'https://www.skinnytaste.com/perfect-air-fryer-shrimp/',
      },
      {
        name: 'Leek quiche with feta',
        url: 'https://www.ah.nl/allerhande/recept/R-R1198272/vegetarische-quiche-met-prei',
        bentoable: true,
      },
      {
        name: 'Chicken wings with mexican corn salad',
        url: 'https://www.ah.nl/allerhande/recept/R-R1190580/mexicaanse-maissalade-met-avocado-en-mango',
      },
      // Week 32
      {
        name: 'Burrito with chick pea spread',
        url: 'https://www.ah.nl/allerhande/recept/R-R1197692/burrito-s-met-kikkererwtenspread-en-frisse-komkommersalade',
        bentoable: true,
      },
      {
        name: 'Couscous with halloumi and snow peas',
        url: 'https://www.ah.nl/allerhande/recept/R-R1192863/quinoa-met-halloumi-en-peultjes',
      },
      {
        name: 'McChicken Wrap',
        bentoable: true,
      },
      {
        name: 'Pasta alla norma',
        url: 'https://www.ah.nl/allerhande/recept/R-R961516/pasta-alla-norma',
        bentoable: true,
      },
      {
        name: 'Flammkuchen with goat cheese and champignons',
        url: 'https://www.ah.nl/allerhande/recept/R-R1192922/flammkuchen-vegetarisch-met-geitenkaas',
      },
      {
        name: 'Spanakopita',
        url: 'https://www.leukerecepten.nl/recepten/spanakopita/',
      },
      // Week 33
      {
        name: 'Pasta with split peas sauce',
        url: 'https://www.instagram.com/reel/C-F-PmDqSHc/?igsh=aDZzM3gzNXNnZWJ3',
        bentoable: true,
      },
      {
        name: 'Pan lasagna',
        url: 'https://www.ah.nl/allerhande/recept/R-R1200298/panlasagne-met-gehakt-en-mozzarella',
        bentoable: true,
      },
      {
        name: 'Korean veggie pancakes',
      },
      // Week 34
      {
        name: 'Dahl with Greek yoghurt and baked onion',
        url: 'https://www.ah.nl/allerhande/recept/R-R1199614/gezonde-dahl-met-griekse-yoghurt-en-gebakken-ui-van-london-loy',
        bentoable: true,
      },
      {
        name: 'Macaroni with peas, champignons and chicken',
        url: 'https://www.ah.nl/allerhande/recept/R-R1199957/romige-macaroni-met-kip-en-champignons',
        bentoable: true,
      },
      {
        name: 'Stuffed potato pancakes with salad and Greek yoghurt spread',
      },
      {
        name: 'Vega gyoza vegetable soup with vermicelli and vegetarian meatballs',
      },
      {
        name: 'STEAK NIGHT',
      },
      // Week 35
      {
        name: 'Shakshuka with (vegetarian) meatballs',
        url: 'https://www.ah.nl/allerhande/recept/R-R1192383/tunesische-shakshuka-met-gehaktballetjes',
      },
      {
        name: 'Ravioli, mushroom and cauliflower oven bake',
        url: 'https://www.ah.nl/allerhande/recept/R-R1197453/ravioli-ovenschotel-met-paddenstoelen-en-bloemkool',
        bentoable: true,
      },
      {
        name: 'Courgette quiche with cheese and chives',
        url: 'https://www.ah.nl/allerhande/recept/R-R1196447/courgettequiche-met-kaas-en-bieslook',
      },
      // Week 36
      {
        name: 'Mushroom risotto with pancetta',
        url: 'https://www.delhaize.be/nl/recepten/receptDetails/Risotto-met-champignons-pancetta-en-truffelolie/r/f42a22b78bb744058eb615792a46c15b',
        bentoable: true,
      },
      {
        name: 'Japchae',
      },
      {
        name: 'Gado Gado',
        url: 'https://www.ah.nl/allerhande/recept/R-R1195174/gado-gado',
      },
      {
        name: 'Karaage with cucumber salad and rice',
      },
      // Week 37
      {
        name: 'Gnocchi oven bake with creamy chicken',
        url: 'https://www.ah.nl/allerhande/recept/R-R1192683/gnocchi-ovenschotel-met-romige-kip',
        bentoable: true,
      },
      {
        name: 'Lomo saltado',
        url: 'https://www.ah.nl/allerhande/recept/R-R1199202/lomo-saltado-met-friet',
      },
      {
        name: 'Sambal goreng telor',
        url: 'https://www.ah.nl/allerhande/recept/R-R1196824/sambal-goreng-telor-van-laura-en-erna',
      },
      {
        name: 'Ossobuco with parsnip and potatoes from the oven with bread',
        url: 'https://thomasculinair.nl/recept-ossobuco-uit-de-slowcooker/',
      },
      // Week 38
      {
        name: "Quesadilla's with pulled chicken and bell pepper",
        url: 'https://www.ah.nl/allerhande/recept/R-R1200445/quesadilla-s-met-pulled-chicken-en-paprika',
        bentoable: true,
      },
      {
        name: 'Pumpkin soup with white beans and three-cheese toastie',
      },
      {
        name: 'Apple-chicken meatballs with mashed potatoes',
        url: 'https://www.nospoonnecessary.com/baked-spiced-hard-apple-cider-meatballs/',
        bentoable: true,
      },
      // Week 39
      {
        name: 'Beefy pasta with salad',
        url: 'https://www.youtube.com/shorts/vX9YG73JIxg',
        bentoable: true,
      },
      {
        name: 'Kuku Sibzamini with yoghurt sauce, crudite and boiled eggs',
        url: 'https://youtube.com/shorts/CrezGLvrE8o?si=GiooGYTqhcu8Q8Ri',
      },
      {
        name: 'Channa Saag',
        url: 'https://youtube.com/shorts/0ob--QxmpgQ?si=bfHkzW3NLH0NAHBB',
      },
      // Week 40
      {
        name: 'Libanese arayes with salad',
        url: 'https://youtube.com/shorts/oy5lV70UVXc?si=28kc5WEogsAuCzsS',
      },
      // Week 41
      {
        name: 'Slow cooker hachee with potato mash',
        url: 'https://www.ah.nl/allerhande/recept/R-R1192996/hachee-uit-de-slowcooker',
        bentoable: true,
      },
      {
        name: 'Cheeseburger kotthu roti',
      },
      {
        name: 'Vegetable soup with bread and soup sticks',
      },
      // Week 42
      {
        name: 'Thai peanut noodle salad',
        url: 'https://www.drveganblog.com/thai-peanut-noodle-salad-recipe-meal-prep-friendly/',
        bentoable: true,
      },
      {
        name: 'Beef stew with garlic mash, vegetables and bread',
        bentoable: true,
      },
      // Week 43
      {
        name: 'Cauliflower butter chicken',
        bentoable: true,
      },
      {
        name: 'Roasted tomato soup with chorizo grilled cheese',
      },
      {
        name: 'Nasi with oven chicken',
        bentoable: true,
      },
      // Week 44
      {
        name: 'Pancakes',
        bentoable: true,
      },
      {
        name: 'Rigatoni with kale and sausages',
        bentoable: true,
        url: 'https://www.ah.nl/allerhande/recept/R-R1193405/mezzi-rigatoni-met-boerenkool-ricotta-en-runderworstjes',
      },
      {
        name: 'Orzo with white beans and miso',
        bentoable: true,
        url: 'https://www.ah.nl/allerhande/recept/R-R1199358/orzo-met-witte-bonen-venkel-en-miso-van-hugo-kennis',
      },
      {
        name: 'Potato patties with mint-pea puree',
      },
      {
        name: 'Leek quiche with cheese',
        url: 'https://www.ah.nl/allerhande/recept/R-R1198468/preitaart-met-kaas',
      },
      {
        name: 'Lamb curry with roti',
        bentoable: true,
      },
      // Week 45
      {
        name: 'Thai Penang curry',
        bentoable: true,
        url: 'https://www.youtube.com/shorts/DSGRNoSTvLg',
      },
      {
        name: 'Pork Adobo',
        bentoable: true,
      },
      {
        name: 'Boerenkool',
        bentoable: true,
      },
      {
        name: 'Noodles with tjauw min veggies and chicken cutlet',
        bentoable: true,
      },
      {
        name: 'Korma with chicken and paratha',
        bentoable: true,
      },
      // Week 46
      {
        name: 'Mixed rice',
        bentoable: true,
      },
      {
        name: 'Boerenkoolstamppot',
        bentoable: true,
      },
      {
        name: 'Noodles met kipschnitzel',
        bentoable: true,
      },
      {
        name: 'Uiteten',
        bentoable: false,
      },
      {
        name: 'Korma met kip en paratha',
        bentoable: true,
      },

      // Week 47
      {
        name: 'Japanse tomatocurry met schnitzel',
        bentoable: true,
      },
      {
        name: 'Erwtensoep',
        bentoable: true,
      },
      {
        name: 'Congee met kip',
        bentoable: true,
      },

      // Week 48 (empty)

      // Week 49
      {
        name: 'Ravioli met champignons',
        bentoable: true,
      },
      {
        name: 'Pompoenorzo met halloumi',
        bentoable: true,
      },
      {
        name: 'Bloemkool-prei stamppot met kaasschnitzel',
        bentoable: true,
      },
      {
        name: 'Moussaka',
        bentoable: true,
      },
      {
        name: 'Broodje vegaburger met groentefrietjes',
        bentoable: true,
      },

      // Week 50
      {
        name: 'Kip uit de oven met airfryer aardappelpartjes en groente',
        bentoable: true,
      },
      {
        name: 'Eten bestellen',
        bentoable: false,
      },
      {
        name: 'Creamy gochujang shrimp rigatoni met bimi',
        bentoable: true,
        url: 'https://www.youtube.com/shorts/PoX4wHw0P4c',
      },
      {
        name: 'Jjajangmyeon',
        bentoable: true,
      },
      {
        name: 'Noodle stirfry met kippendijfilet',
        bentoable: true,
      },
      {
        name: 'Airfryer tofu met rijst en paksoi',
        bentoable: true,
      },

      // Week 51
      {
        name: 'Spaghetti bolognese',
        bentoable: true,
      },
      {
        name: 'Hete bliksem schotel',
        bentoable: true,
        url: 'https://www.francescakookt.nl/hete-bliksem-ovenschotel-met-gehakt/',
      },
      {
        name: 'Griekse bowl met tzatziki, couscous en gegrilde kippendijfilet',
        bentoable: true,
      },
      {
        name: 'Lentil patties met aardappelpartjes',
        bentoable: true,
        url: 'https://youtube.com/shorts/t2AAnldiA6Q?si=JtAthM3j66QImKMX',
      },
      // 2025
      // Week 1
      {
        name: 'Kliekjes uit de vriezer',
        bentoable: true,
      },
      {
        name: 'Orrechiette met gekaramelliseerde ui en gruyere',
        bentoable: true,
      },
      {
        name: 'Varkenshaas met compote, aardappeltjes en bimi',
        bentoable: true,
      },
      {
        name: 'Texmex Quesadillas',
        bentoable: true,
      },
      {
        name: 'Lasagne met Nduja',
        bentoable: true,
      },
      {
        name: 'Lamscurry met rijst',
        bentoable: true,
        url: 'https://youtube.com/shorts/9_nle7TCr0A?si=-qkFe_eWFAUlr0QO',
      },

      // Week 2
      {
        name: 'Kipgehaktballen in spinazie roomsaus, zongedroogde tomaten en rijst',
        bentoable: true,
      },
      {
        name: 'Beef Stroganoff met rijst',
        bentoable: true,
      },
      {
        name: 'Kimchi stew met riblap',
        bentoable: true,
      },
      {
        name: 'Ravioli met champies',
        bentoable: true,
      },
      {
        name: 'Alfredo pasta met steak',
        bentoable: true,
      },

      // Week 3
      {
        name: 'Shepperds pie',
        bentoable: true,
      },
      {
        name: 'Erwtensoep met stokbrood',
        bentoable: true,
      },
      {
        name: 'Mapo tofu',
        bentoable: true,
      },
      {
        name: 'Smashed potato cheeseburger bowl',
        bentoable: true,
        url: 'https://www.instagram.com/reel/C9KoaBooGUt/?utm_source=ig_web_copy_link',
      },
      {
        name: 'Spruitjesstamppot met braadworstjes en picalilly',
        bentoable: true,
      },

      // Week 4
      {
        name: 'Pasta alla zozzona met rucola',
        bentoable: true,
        url: 'https://youtube.com/shorts/mdx0q2vjSQc?si=WonEn599cs4Je-oj',
      },
      {
        name: 'Jjajangmyeon',
        bentoable: true,
      },
      {
        name: 'Smoked tofu met aubergine, garlic stems en rijst',
        bentoable: true,
      },
      {
        name: 'Libanese Arayes',
        bentoable: true,
        url: 'https://youtube.com/shorts/oy5lV70UVXc?si=28kc5WEogsAuCzsS',
      },
      {
        name: 'Galbi tang met rijst en omeletstrips',
        bentoable: true,
      },

      // Week 5
      {
        name: "Smashed caesar taco's (avo vervangen door komkommer)",
        bentoable: true,
        url: 'https://www.instagram.com/reel/DEkV-eKIdPk/?igsh=MWZ6ZjV5ODQ5cHU3OQ==',
      },
      {
        name: 'Marry me orzo',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DDUObFbIq0-/?igsh=MWs4cDQ3eHk4a3Q5',
      },
      {
        name: 'Fish and chips, met mushy peas, tartar saus en onion pickles',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DEp4VqpxvYe/?igsh=MTM2dWN4amxhb3N3cA==',
      },
      {
        name: 'Roast chicken met krieltjes, bloemkool gratin en sla',
        bentoable: true,
      },

      // Week 6
      {
        name: 'Tortellini soup',
        bentoable: true,
        url: 'https://www.instagram.com/reel/C_ih8vionNG/?igsh=MTBsOXM2NWRkc3hjbA==',
      },
      {
        name: 'Bloemkool-krieltjes gratin met prei, bacon en cheddar',
        bentoable: true,
      },
      {
        name: 'Sweet potato and black beans quesadilla',
        bentoable: true,
        url: 'https://www.instagram.com/reel/C9M49KLo2tk/?igsh=YmQ0NDlkc2VpYTIy',
      },
      {
        name: 'Bacon and leek pastries',
        bentoable: true,
        url: 'https://www.instagram.com/reel/C4dM_2WojdQ/?igsh=dmV4eGpiZTNsa3ph',
      },

      // Week 7
      {
        name: 'Pelmeni met creme fraiche, pickles en gekookte eieren',
        bentoable: true,
      },
      {
        name: 'Quiche',
        bentoable: true,
      },
      {
        name: 'Macaroni bi Laban',
        bentoable: true,
        url: 'https://youtube.com/shorts/oWBIWhN32Ao?si=vSByy5-WRERASqDz',
      },
      {
        name: 'Paneer butter masala met naan',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DCjsP_WI1DQ/?igsh=cGRpeXQzdm4yYzZr',
      },
      {
        name: 'Leek and butter bean bake',
        bentoable: true,
        url: 'https://www.instagram.com/reel/C2potbMIUoV/?igsh=b2lvdTNnanppZzJw',
      },
      {
        name: 'Lamscurry',
        bentoable: true,
      },
      {
        name: 'Iglo vis met aardappelpartjes en DV groente',
        bentoable: true,
      },

      // Week 8
      {
        name: 'Paratha spanakopita',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DEIGM4UIr76/?igsh=Y3plYmhnZjZmdjR2',
      },
      {
        name: 'Aubergine katsu curry',
        bentoable: true,
        url: 'https://youtube.com/shorts/8U8vFKsoiFA?si=ljh70o38ZknGZ3gV',
      },
      {
        name: 'Nasi met kip en bakabana',
        bentoable: true,
      },
      {
        name: 'Parelcouscous met harissa tempeh',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DFs0msQIpI7/?igsh=MWU3MGhlYmp0aDhtMQ==',
      },
      {
        name: 'Chickenwing night',
        bentoable: true,
      },

      // Week 9
      {
        name: 'Pasta bolognese bake',
        bentoable: true,
      },
      {
        name: 'Iglo vis, DV groente en aardappelpartjes',
        bentoable: true,
      },
      {
        name: 'Pelmeni met creme fraiche, pickles en ei',
        bentoable: true,
      },
      {
        name: 'Zoete aardappel-linzen soep met tosti',
        bentoable: true,
      },
      {
        name: 'Chicken teriyaki udon stirfry',
        bentoable: true,
      },
      {
        name: 'Kipshoarma met salade',
        bentoable: true,
      },

      // Week 10
      {
        name: 'Kip tandoori met rijst en aubergine sambool',
        bentoable: true,
      },
      {
        name: 'Broccoli and cheddar baked orzo met steak',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DFqhmMSxs0R/?igsh=azJwcndmdDNzaGU3',
      },
      {
        name: 'Lamb chops met mint sambool, komkommersalade en rijst',
        bentoable: true,
      },
      {
        name: 'Preistamppot met worst',
        bentoable: true,
      },
      {
        name: 'Thai curry ramen met tauge, shanghai paksoi, komkommer en chilli gehakt',
        bentoable: true,
      },
      {
        name: 'Paneer curry met rode ui en rijst',
        bentoable: true,
      },

      // Week 11
      {
        name: 'Risotto met doperwten en chorizo',
        bentoable: true,
        url: 'https://www.instagram.com/p/BfdlX0pA0KU/?igsh=NnU3cXpjYW5ldWZx',
      },
      {
        name: 'Asian style garlic pasta met kip en bimi',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DBrfHThRQRC/?igsh=eTlvNmg3cnJoZXM4',
      },
      {
        name: 'Parelcouscous met boerenkool, rode ui en Harissa tempeh',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DFs0msQIpI7/?igsh=MWU3MGhlYmp0aDhtMQ==',
      },
      {
        name: 'Hot dogs met them good good toppings',
        bentoable: true,
      },
      {
        name: 'Stoofvlees met aardappelpuree',
        bentoable: true,
      },

      // Week 12
      {
        name: 'Black peper beef met rijst',
        bentoable: true,
        url: 'https://youtube.com/shorts/d6lsWxqMDjw?si=W8dehomYsyGnwGwT',
      },
      {
        name: 'Shanghai fried noodles',
        bentoable: true,
        url: 'https://youtube.com/shorts/_v0Eulx6dTU?si=fDEl1dXXrF1ArY10',
      },
      {
        name: 'Hainanese chicken rice',
        bentoable: true,
        url: 'https://youtube.com/shorts/F6K8Yii4kBk?si=NRNiCZ1K7Vv-EzaY',
      },
      {
        name: 'Crispy pork belly met rijst',
        bentoable: true,
        url: 'https://kwokspots.com/crispy-pork-belly/',
      },

      // Week 13
      {
        name: 'Orzo sausage soup',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DENUHcmojTk/?igsh=MXNxZjR2bXRvMDJzZA==',
      },
      {
        name: 'Spaghetti and meatballs in tomatensaus',
        bentoable: true,
      },
      {
        name: 'Cantonese-style baked mushroom rice met chorizo',
        bentoable: true,
        url: 'https://youtu.be/GHXodSl7nEg?si=tc22kBUxf0I5fDpI',
      },
      {
        name: 'Chicken fajita empanadas',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DGI-w3-uLR5/?igsh=MWtmN3loeHB0b3NhMA==',
      },
      {
        name: 'Loaded baked potatoes met vegan chilli con carne',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DF0yJDAvgRU/?igsh=MXQ2bHhjd3BuYnM1cw==',
      },
      {
        name: 'Roast chicken meatballs, prei en kool, oven roasted aardappels',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DEcBplUIqpy/?igsh=MWh3cGs2ZG1sN2Jleg==',
      },

      // Week 14
      {
        name: "Lentil taco's",
        bentoable: true,
        url: 'https://www.instagram.com/reel/DE2xT_qomkY/?igsh=MjFtaDFqZjNjbHI2',
      },
      {
        name: 'Bolognese ovenschotel',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DFs33VmoXUw/?igsh=cmFtMDR3bHo4dWVh',
      },
      {
        name: 'Cheesy mashed potato bake met vegaworstjes en doperwten',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DFkG-ABISbh/?igsh=MXZsdXk4aWxnZWt0bQ==',
      },
      {
        name: 'Crying tiger steak met fried garlic rice en komkommer',
        bentoable: true,
        url: 'https://youtube.com/shorts/xDrbAOOQ0rc?si=opXWdQBe2qr-dp8Y',
      },

      // Week 15
      {
        name: 'Lentil, potato and feta curry met rijst',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DDSJrZPoLd3/?igsh=MWQzc2dtMDFoNWprNg==',
      },
      {
        name: 'Miso, bacon udon carbonara',
        bentoable: true,
      },
      {
        name: 'Bibimbap met vega gehakt',
        bentoable: true,
      },
      {
        name: 'Halloumi en rode uit plait met lente salade',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DDm8UsAIRO1/?igsh=MXd1cnl1cGtraHg3Yg==',
      },
      {
        name: 'Tjauw min met gebakken ei en airfryer tofu',
        bentoable: true,
      },

      // Week 16
      {
        name: 'Fish pie met witvis en garnaal',
        bentoable: true,
        url: 'https://youtube.com/shorts/vwx5kgl4orc?si=fXGefHzeYC_2NQjX',
      },

      // Week 17 (vacation) - nothing included

      // Week 18 (vacation) - nothing included

      // Week 19
      {
        name: 'Arayes met tatbeeleh',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DCw1qLjPeC8/?igsh=MWs2ajBveHA0aDF6dA==',
      },
      {
        name: 'Schiaffoni met tallegio, courgette en spek',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DGdsYBvtq4O/?igsh=bmt2OXhmZHp0Y2Fx',
      },
      {
        name: 'Bang Bang Shrimp met rijst en bimi',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DGqXylZPKa4/?igsh=amQxdGxxcmJwamJl',
      },
      {
        name: 'Linzen shakshuka met flatbread',
        bentoable: true,
      },
      {
        name: 'Char siew met tjauw min en komkommer salade',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DGxh5swsFmt/?igsh=ZDc4ZXU0bjRtZHBm',
      },
      {
        name: 'Kapsalon met vega shoarma, jalapeños en magere kaas',
        bentoable: true,
      },

      // Week 20
      {
        name: "Pierogi's met worst + vega balletjes en rode kool",
        bentoable: true,
      },
      {
        name: 'Schnitzel met aardappelpuree en boerenkool',
        bentoable: true,
      },
      {
        name: 'Vega balletjes met aardappel roerbak en verse kool',
        bentoable: true,
      },
      {
        name: 'Gemarineerde boterbonen salade met aardappel medaillons',
        bentoable: false,
      },
      {
        name: 'Groentesoep met blokjes vlees, balletjes en kip',
        bentoable: true,
      },
      {
        name: 'Nasi met airfryer tofu, cassave en bakabana',
        bentoable: true,
      },

      // Week 21
      {
        name: 'Marry me mushroom gnocchi met tallegio kaas en cannelini bonen',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DBPoPaIJZ14/?igsh=eGpudG9sdDZzaW5s',
      },
      {
        name: 'Gevulde paprika met ricotta, spinazie en walnoten',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DGJn0FgzSrc/?igsh=czBkbnk4NTRiY29y',
      },
      {
        name: 'Lemon pepper chickpea spagetthi',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DGodrenzTwp/?igsh=MWgwamRqaGpvOGRobQ==',
      },
      {
        name: 'Okonomiyaki met bacon',
        bentoable: true,
        url: 'https://youtube.com/shorts/NmeNIIWEWD0?si=KGMhZ_HGZm4pyxbf',
      },
      {
        name: 'Roasted sweet potato taco bowl met vega gehakt en linzen',
        bentoable: true,
      },
      {
        name: 'Hot honey halloumi and chickpea salad',
        bentoable: false,
        url: 'https://www.instagram.com/reel/DFvsVH_OD9h/?igsh=N2Z3bndhczNnODc3',
      },

      // Week 23
      {
        name: 'Chimmichuri bean salad met asperges op flatbread besmeerd met ricotta',
        bentoable: false,
        url: 'https://www.instagram.com/reel/DIUCZkUP97h/?igsh=MWp0azJ6eWZ6bWQzMg==',
      },
      {
        name: 'Dan dan mien met paksoi en vega gehakt',
        bentoable: true,
        url: 'https://youtube.com/shorts/9d7Xlvr0wuI?si=yBjLs_txsKUwneeB',
      },
      {
        name: 'Smashed bahn mi taco (met vega gehakt)',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DGtcHPTTW1Z/?igsh=ZzhoNnc3djVxOHFl',
      },
      {
        name: 'Curry chicken legs met coconut rice en plantain',
        bentoable: true,
      },
      {
        name: 'Ham, leek and cheese gratin met salade',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DCPd8F0oP5t/?igsh=OTBrbXZuaTgwenk4',
      },

      // Week 24
      {
        name: 'Hoisin Tempeh noodle stir fry',
        bentoable: true,
        url: 'https://www.marionskitchen.com/hoisin-chicken-stir-fry/',
      },
      {
        name: 'Pesto potato chip salad met vega shoarma',
        bentoable: false,
        url: 'https://www.instagram.com/reel/DIG8G8dsprn/?igsh=MXZxMnI0dzlidHl6OQ==',
      },
      {
        name: 'Creamy orzo met spruitjes, rode ui, doperwten en crispy kikkererwten',
        bentoable: true,
      },
      {
        name: 'Lemon&pepper fried halloumi met aardappelpartjes en salade met ajvar',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DHv7n-logrS/?igsh=MWR6bzZ6cmNxa3o5Mw==',
      },
      {
        name: 'Broodje vega shoarma',
        bentoable: false,
      },
      {
        name: 'French onion and boursin pasta met vega kipburger stukjes',
        bentoable: true,
      },

      // Week 25
      {
        name: 'Mint en doperwten risotto met geroosterde kikkererwten en geroosterde groenten',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DHbet9mI_Yw/?igsh=ZDNnZ3ViZzQzcDFw',
      },
      {
        name: 'Halloumi met bonen-gegrilde courgette salade op een bedje van rijst met tahini saus',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DJ6-c5lIngl/?igsh=amkzZ2ZyZXE0eXp2',
      },
      {
        name: 'Vega roast met vega worstjes, gratin, aardappels uit de oven, kaassaus en yorkshire puddings',
        bentoable: true,
        url: 'https://www.ah.nl/allerhande/recept/R-R1195612/yorkshire-pudding',
      },

      // Week 26
      {
        name: 'Okonomiyaki quiche',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DIirVAWqo49/?igsh=MTJnemNwcjlvb21mcQ==',
      },
      {
        name: 'French onion gnocchi met canellini bonen',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DJ48K32OYzb/?igsh=ejZ4NnhpODdyOXJ3',
      },
      {
        name: 'Preistampot met oude kaas en vega kipburger',
        bentoable: true,
      },
      {
        name: 'Pork en squid in zoetzuur saus met groente en tjauwmin',
        bentoable: true,
        url: 'https://youtube.com/shorts/DEMhe49dtD0?si=I4BKz2fbTWqhqKGy',
      },

      // Week 27
      {
        name: 'Courgette en boterbonen lasagna met pesto en salade',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DKr4a8UIN66/?igsh=M3NjeHNuczgxdnNj',
      },
      {
        name: 'Roasted pumpkin and leek risotto',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DJ2Y4zhzcxD/?igsh=N2RveDBkdTJyZnlh',
      },
      {
        name: 'Fish burger met patat, tartaarsaus en salade',
        bentoable: false,
      },
      {
        name: 'Creamy parelcouscous met geroosterde kip en komkommersalade',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DJoya8-xbgd/?igsh=MTdvMml0OXVodTR6cQ==',
      },

      // Week 28
      {
        name: 'Spanakopita',
        bentoable: true,
      },
      {
        name: 'Linzenshakshuka met brood',
        bentoable: true,
        url: 'https://docs.google.com/document/d/10kAqlCVWO9tji1cFpdO0-d9VPnyAOuuOkGzWCBIMCLQ/edit?usp=drivesdk',
      },
      {
        name: 'Smashed potato salad met komkommer, ui, kappertjes, kikkererwten, crispy halloumi, rucola en pesto',
        bentoable: true,
        url: 'https://youtube.com/shorts/vqU6di3nXbQ?si=Uh-YmbeqV5eECnzs',
      },
      {
        name: 'Mushroom rice met aspergetoppen en hamburger met hamburgersauce',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DKSFmDZO4vA/?igsh=Y3lpZnFlY3ZuNDNu',
      },

      // Week 29
      {
        name: 'Orzo broccoli salade met kappertjes citroen dressing en vega worstjes',
        bentoable: false,
        url: 'https://youtube.com/shorts/PezwaeTOzIo?si=2zka--ZG1PLXlRmf',
      },
      {
        name: "Cheesy crispy black bean taco's",
        bentoable: true,
      },
      {
        name: 'Quiche met gekaramelliseerde ui, spekjes en doperwten',
        bentoable: true,
        url: 'https://docs.google.com/document/d/189CrUiZbDAXiS9JlIjOJkq85mE4T8r9hqwPULPI92xA/edit?usp=drive_link',
      },
      {
        name: 'Vega dandan mien (crumbled tempeh?)',
        bentoable: true,
        url: 'https://youtube.com/shorts/9d7Xlvr0wuI?si=yBjLs_txsKUwneeB',
      },

      // Week 30
      {
        name: 'Mushroomrice met kipworstjes en broccoli',
        bentoable: true,
      },
      {
        name: 'Fal Medamas met veggies en rijst',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DHRc5IDRbVW/?igsh=dXFkb25lcHJuMzdl',
      },
      {
        name: 'Chicken McWrap',
        bentoable: false,
      },
      {
        name: 'Pesto potato chip salad met vega shoarma',
        bentoable: false,
        url: 'https://www.instagram.com/reel/DIG8G8dsprn/?igsh=MXZxMnI0dzlidHl6OQ==',
      },
      {
        name: 'Traybake met kip en vriezergroente',
        bentoable: true,
      },

      // Week 31
      {
        name: 'Chilli sin carne mac&cheese',
        bentoable: true,
      },
      {
        name: 'Sheetpan Kebab met flatbread en salade',
        bentoable: true,
        url: 'https://docs.google.com/document/d/1OanX8dwAMzlQG69jNXRWInZVmOz8KsAktkWVujZVh3Q/edit?usp=drive_link',
      },
      {
        name: 'Cheesy lentil bake met veldsla salade en gestoomde zoete aardappel',
        bentoable: true,
        url: 'https://www.instagram.com/reel/C-w1KGlIoSc/?igsh=MWpvMzgyNW94ampzag==',
      },
      {
        name: 'Mexican kipgehakt bowls met mexican rice en mexican streetcorn salad',
        bentoable: true,
      },

      // Week 32
      {
        name: 'Ful medames met gekookte ei, komkommertjes, snack paprika en rijst',
        bentoable: true,
      },
      {
        name: 'Squash and sage beans met vega worstjes en rijst',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DA_MyqCIC9f/?igsh=NHo1bnZ4c2s4dmt4',
      },
      {
        name: 'Boursin spaghetti met spinazie, artisjok, kikkererwten met vega kipsticks',
        bentoable: true,
      },
      {
        name: 'Kutballen met aardappelpuree, doperwtjes en saus',
        bentoable: true,
      },
      {
        name: 'Dubu jorim met rijst',
        bentoable: true,
      },
      {
        name: 'Tjauwmin met kip, bakabana en ingelegde komkommer',
        bentoable: true,
      },
      {
        name: 'LITTEL POOKER HOBBIT FEAST',
        bentoable: false,
      },

      // Week 33
      {
        name: 'Indian butter chicken beans met coconut rice',
        bentoable: true,
      },
      {
        name: 'Veggie, tempeh feta fritters on a bun with salad en aardappelpartjes',
        bentoable: true,
      },
      {
        name: 'Feta en rode ui bladerdeegstam met veldsla',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DMnYGGdIjSw/?igsh=dzRkZWp4a3R3a250',
      },
      {
        name: 'Gegrilde groente lasagne',
        bentoable: true,
      },
      {
        name: 'Broodje kip donner met groente',
        bentoable: true,
      },
      {
        name: 'Bobotie met rijst, beans en bakbanaan',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DKVQ8hjPXNs/?igsh=MW5pc2UxczhrcXV0ag==',
      },

      // Week 34
      {
        name: 'Broodje kaasschnitzel',
        bentoable: false,
      },
      {
        name: 'Dahl met ei, rijst en channa masala',
        bentoable: true,
      },
      {
        name: 'Mushroomrice met gebakken tempeh',
        bentoable: true,
      },
      {
        name: 'Hot honey tofu schnitzel met zomerspaghetti (cherrytomaat en gegrilde courgette)',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DKZ8NFVOa2Y/?igsh=MTZlOHI1YndmNnJucg==',
      },
      {
        name: 'Jjajangmyeon',
        bentoable: true,
      },
      {
        name: "Crispy chicken taco's",
        bentoable: true,
      },

      // Week 35
      {
        name: 'Vega donner kebab pasta',
        bentoable: true,
      },
      {
        name: 'Curry met air fryer tofu met rijst en broccoli',
        bentoable: true,
      },
      {
        name: 'Creamy kimchi orzo met vega shoarma en mushrooms',
        bentoable: true,
      },
      {
        name: 'Kibbeling met krieltjes en groente',
        bentoable: true,
      },
      {
        name: 'Sunday Roast met kip, aardappelpuree, groente en garlic bread',
        bentoable: true,
      },

      // Week 36
      {
        name: 'Curried broccoli, cauliflower ovenschotel met shoarma en aardappelpartjes',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DJ-9mo8ofUy/?igsh=NDc4ZDlhNmN1Ymlv',
      },
      {
        name: 'Hartige linzentaart',
        bentoable: true,
        url: 'https://www.instagram.com/reel/C-w1KGlIoSc/?igsh=MWpvMzgyNW94ampzag==',
      },
      {
        name: 'Tomatenpasta met vegaballetjes',
        bentoable: true,
      },
      {
        name: 'Cheeseburger gepofte aardappel',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DNBLWNLtH_L/?igsh=dzkzcHhjZ3VpcG9z',
      },
      {
        name: 'Steak ramdon met die jus van laatst',
        bentoable: true,
      },

      // Week 37
      {
        name: 'Potato, shalot, bacon en kool pie',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DLwiXkEI9ji/?igsh=MWMyZ2ZhbTRvN3Ztdw==',
      },
      {
        name: 'Halloumi en veggie tikka masala met rijst',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DMdKMh7IOWS/?igsh=MTFuemdqa3I3cHJ4OA==',
      },
      {
        name: 'Gnocchi ovenschotel met vegakip',
        bentoable: true,
        url: 'https://www.ah.nl/allerhande/recept/R-R1192683/gnocchi-ovenschotel-met-romige-kip',
      },
      {
        name: 'Rigotoni met boerenkool en boterbonen',
        bentoable: true,
        url: 'https://www.ah.nl/allerhande/recept/R-R1193405/mezzi-rigatoni-met-boerenkool-ricotta-en-runderworstjes',
      },
      {
        name: 'Pork adobo met rijst en coconut veggies',
        bentoable: true,
      },

      // Week 38
      {
        name: "Crispy black bean taco's",
        bentoable: true,
      },
      {
        name: 'Lentil lasagna soup',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DG07eLvowsa/?igsh=YzZtOWF1dnp5N3d5',
      },
      {
        name: 'Lapcheung carbonara',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DLmW4yIsC4h/?igsh=MWkwb3IxdDFrdjlhdw==',
      },
      {
        name: 'Roasted chicken meatballs in tomatensaus, aardappelpuree en cheesy kool & prei',
        bentoable: true,
      },

      // Week 39
      {
        name: 'Ful Medames met ei, rauwkost en rijst',
        bentoable: true,
      },
      {
        name: 'Spanakopita',
        bentoable: true,
      },
      {
        name: 'Cheesy lentil bake met veldsla salade en gestoomde zoete aardappel',
        bentoable: true,
        url: 'https://www.instagram.com/reel/C-w1KGlIoSc/?igsh=MWpvMzgyNW94ampzag==',
      },
      {
        name: 'Dim sum night',
        bentoable: false,
      },

      // Week 40
      {
        name: 'Aloo palak met dahl en channa',
        bentoable: true,
      },
      {
        name: 'Japanese curry',
        bentoable: true,
      },
      {
        name: 'Lamscurry met roti uit de slowcooker',
        bentoable: true,
      },

      // Week 41
      {
        name: 'Potato, leek and 3 cheese pie',
        bentoable: true,
        url: 'https://www.instagram.com/reel/DJpKK_Roqiv/?igsh=MThzYzdvdnMwZGd6eg==',
      },
      {
        name: 'Broodje kipdonner',
        bentoable: false,
      },
    ];
  }

  getMeal(): Meal {
    return this.mealList[Math.floor(Math.random() * this.mealList.length)];
  }
}
