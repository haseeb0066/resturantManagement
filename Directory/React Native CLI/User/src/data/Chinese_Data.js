import Category from '../models/category';
import Chinese_Meal from '../models/chinese_meal';

export const CATEGORIES = [
  new Category('c1', 'Tanawal Restaurant', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqXJ2dAfwsEfPtKMY9Hx9B0ljQVtfFUHIV6A&usqp=CAU'),
  new Category('c2', 'Lahore Hotel', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg'),
  new Category('c3', 'Burger King', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBOI7bg-cgtWA6BuiXbbBzy0w8QfW8FEIiyg&usqp=CAU'),
  new Category('c4', 'Bandu Khan', 'https://cbsnews3.cbsistatic.com/hub/i/r/2015/11/19/643ee752-384b-4e87-acc7-4bad9ec230b3/resize/620x465/50c8bd937542d550e768eb6321847f34/fake-food-display-09.jpg'),
  new Category('c5', 'Yasir Broast', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3jtoqFY7Pd904Nog8q2kAbpWKA8UXtLDnnA&usqp=CAU'),
  new Category('c6', 'Chinese Hotel', 'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg'),
  new Category('c7', 'Shah Alam Restaurant', 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665__340.jpg'),
  new Category('c8', 'Ziafat', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdiQAnL0jUgNatq6kIETpwcxaHrPGsZp8ipg&usqp=CAU'),
  new Category('c9', 'X2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ69VCwGVDkpxamr-2n9NrM197yDFFe6Xfliw&usqp=CAU'),
  new Category('c10', 'Howdy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcMuljBrWL7jyb3NpwG7d6N0Eo1-G1uxWdLg&usqp=CAU')
];

export const Chinese_MEALS = [
  new Chinese_Meal(
    'ch1a',
    ['c1'],
    'Chowmein',
    'For 3 Persons',
    'https://www.recipetineats.com/wp-content/uploads/2018/08/Chow-Mein_0.jpg',
    189,
    [
      'Chowmein for 2 persons',
      'Chicken',
      'Vegetable',
      'Souces',
    ],
    // [
    //   'Cut the tomatoes and the onion into small pieces.',
    //   'Boil some water - add salt to it once it boils.',
    //   'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
    //   'In the meantime, heaten up some olive oil and add the cut onion.',
    //   'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
    //   'The sauce will be done once the spaghetti are.',
    //   'Feel free to add some cheese on top of the finished dish.'
    // ],
    // false,
    // true,
    // true,
    // true
  ),

  new Chinese_Meal(
    'ch1b',
    ['c1'],
    'Vegetable Chinese Manchurian', 
    'For 3 Persons',
    'http://1.bp.blogspot.com/-zV8X0FusfL8/UpRocUQCrgI/AAAAAAAABqA/FbbkN4Ct3n4/s1600/SDC13277-001.JPG',
    610,
    [
      'Spicy',
      'Vegetable',
      'Chicken',
      'Noodles',
    ],
    // [
    //   'Cut the tomatoes and the onion into small pieces.',
    //   'Boil some water - add salt to it once it boils.',
    //   'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
    //   'In the meantime, heaten up some olive oil and add the cut onion.',
    //   'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
    //   'The sauce will be done once the spaghetti are.',
    //   'Feel free to add some cheese on top of the finished dish.'
    // ],
    // false,
    // true,
    // true,
    // true
  ),

 

  new Chinese_Meal(
    'ch2',
    ['c2'],
    'Deal 1',
    'For 2 Persons',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    699,
    [
      'Toast Hawaii',
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    // [
    //   'Butter one side of the white bread',
    //   'Layer ham, the pineapple and cheese on the white bread',
    //   'Bake the toast for round about 10 minutes in the oven at 200°C'
    // ],
    // false,
    // false,
    // false,
    // false
  ),

  new Chinese_Meal(
    'ch3',
    ['c3'],
    'Deal 1',
    'For 2 Persons',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    625,
    [
      'Classic Hamburger',
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    // [
    //   'Form 2 patties',
    //   'Fry the patties for c. 4 minutes on each side',
    //   'Quickly fry the buns for c. 1 minute on each side',
    //   'Bruch buns with ketchup',
    //   'Serve burger with tomato, cucumber and onion'
    // ],
    // false,
    // false,
    // false,
    // true
  ),

  new Chinese_Meal(
    'ch4',
    ['c4'],
    'Deal 1',
    'For 2 Persons',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    1299,
    [
      'Wiener Schnitzel',
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    // [
    //   'Tenderize the veal to about 2–4mm, and salt on both sides.',
    //   'On a flat plate, stir the eggs briefly with a fork.',
    //   'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
    //   'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
    //   'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
    //   'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
    //   'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    // ],
    // false,
    // false,
    // false,
    // false
  ),

  new Chinese_Meal(
    'ch5',
    ['c5'],
    'Deal 1',
    'For 3 Persons',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    99,
    [
      'Salad with Smoked Salmon',
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    // [
    //   'Wash and cut salad and herbs',
    //   'Dice the salmon',
    //   'Process mustard, vinegar and olive oil into a dessing',
    //   'Prepare the salad',
    //   'Add salmon cubes and dressing'
    // ],
    // true,
    // false,
    // true,
    // true
  ),

  new Chinese_Meal(
    'ch6',
    ['c6'],
    'Deal 1',
    'For 4 Persons',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    1899,
    [
      'Delicious Orange Mousse',
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    // [
    //   'Dissolve gelatine in pot',
    //   'Add orange juice and sugar',
    //   'Take pot off the stove',
    //   'Add 2 tablespoons of yoghurt',
    //   'Stir gelatin under remaining yoghurt',
    //   'Cool everything down in the refrigerator',
    //   'Whip the cream and lift it under die orange mass',
    //   'Cool down again for at least 4 hours',
    //   'Serve with orange peel'
    // ],
    // true,
    // false,
    // true,
    // false
  ),

  new Chinese_Meal(
    'ch7',
    ['c7'],
    'Deal 1',
    'For 5 Persons',
    'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.mamachocolateblog.com%2Fdelicious-dish-tuesday-recipe-link-up-4th-of-july-edition.html&psig=AOvVaw1sKnUBlo2FDArMPjoU2Prp&ust=1603872528167000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIix7Pio1OwCFQAAAAAdAAAAABAJ',
    1500,
    [
      'Pancakes',
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    // [
    //   'In a large bowl, sift together the flour, baking powder, salt and sugar.',
    //   'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
    //   'Heat a lightly oiled griddle or frying pan over medium high heat.',
    //   'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    // ],
    // true,
    // false,
    // true,
    // false
  ),

  new Chinese_Meal(
    'ch8',
    ['c8'],
    'Deal 1',
    'For 5 Persons',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    1100,
    [
      'Creamy Indian Chicken Curry',
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    // [
    //   'Slice and fry the chicken breast',
    //   'Process onion, garlic and ginger into paste and sauté everything',
    //   'Add spices and stir fry',
    //   'Add chicken breast + 250ml of water and cook everything for 10 minutes',
    //   'Add coconut milk',
    //   'Serve with rice'
    // ],
    // true,
    // false,
    // false,
    // true
  ),

  new Chinese_Meal(
    'ch9',
    ['c9'],
    'Deal 1',
    'For 4 Persons',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    800,
    [
      'Chocolate Souffle',
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    // [
    //   'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
    //   'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
    //   'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
    //   'Place chocolate pieces in a metal mixing bowl.',
    //   'Place bowl over a pan of about 3 cups hot water over low heat.',
    //   'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
    //   'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
    //   'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
    //   'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
    //   'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
    //   'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
    //   'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
    //   'Transfer a little less than half of egg whites to chocolate.',
    //   'Mix until egg whites are thoroughly incorporated into the chocolate.',
    //   'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
    //   'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
    //   'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    // ],
    // true,
    // false,
    // true,
    // false
  ),
  new Chinese_Meal(
    'ch10',
    ['c10'],
    'Deal 1',
    'For 2 Perons',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    1900,
    [
      'Asparagus Salad with Cherry Tomatoes',
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    // [
    //   'Wash, peel and cut the asparagus',
    //   'Cook in salted water',
    //   'Salt and pepper the asparagus',
    //   'Roast the pine nuts',
    //   'Halve the tomatoes',
    //   'Mix with asparagus, salad and dressing',
    //   'Serve with Baguette'
    // ],
    // true,
    // true,
    // true,
    // true
  )
];
