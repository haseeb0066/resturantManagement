import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>  
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft:()=> (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight:()=> (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;



import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Tanawal Restaurant', 'https://scontent.flhe15-1.fna.fbcdn.net/v/t1.0-9/118674653_205664577560204_4075498891986836920_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a26aad&_nc_eui2=AeHiZd4dyzBp6-guLj6lPrKU7bKxi9iQEhDtsrGL2JASEI0QShvp2qGMOslOt8NC3mK8l9YnPklbup2uXhI-HLNT&_nc_ohc=4zW66720bG0AX_F87vC&_nc_ht=scontent.flhe15-1.fna&oh=3534001f585e530437bb6bc18963f096&oe=5FCE383F'),
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

export const MEALS = [
  new Meal(
    'm1a',
    'c1',
    'Deals',
    'Deal 1',
    'For 3 Persons',
    'https://scontent.flhe15-1.fna.fbcdn.net/v/t1.0-9/118653547_205409600919035_5084380285642382220_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeHYYNnOclPF8YY3a9q6CTk5FUt-6Hnnvh4VS37oeee-Hhvs_I5sNrj53633otdUz-TnBZ5ZZ6S5fDEWxx9t59k-&_nc_ohc=FV6xTmY4A10AX8rCsRt&_nc_ht=scontent.flhe15-1.fna&oh=32ece3900c06704b0069a1c0c49a52ad&oe=5FE49F0F',
    499,
    [
      'Chicken Kabab 4 pc',
      'Malai Boti 4 pc',
      'Tikka Boti 6 pc',
      'Drink 1 Liter',
      'Salad',
      'Raita'
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



  new Meal(
    'm1b',
    'c1',
    'Deals',
    'Deal 2', 
    'For 5 Persons',
    'https://scontent.flhe15-1.fna.fbcdn.net/v/t1.0-9/118691355_205431470916848_4451869051084445219_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEwO3GjXRA0MM6Kl2ViFcVaa3MKcOxXQTtrcwpw7FdBO3WlimFAaD7UV7e5m5-tAFpiY1SKOk45tKxgzWt4HtCD&_nc_ohc=_RAbHjXu8-QAX9gKpO3&_nc_oc=AQlR3CKyHFSrL2zE2Hh9uZDS5MR-K2PKGErfzG1hy3Qlmf0WXImv0BfJmK-vrIrXj5c&_nc_ht=scontent.flhe15-1.fna&oh=383c8da8e48ed07f541132c084b6fca3&oe=5FE26DF9',
    999,
    [
      'Chicken Kabab (6 pieces)',
      'Malai Boti (8 pieces)',
      'Chicken Tikka Leg/Breast (1 pieces)',
      'Chicken Boti (8 pieces)',
      'Roghani Nan(4 pieces)',
      'Drink 1.5 Liter'
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

  

  new Meal(
    'm2',
    'c2',
    'Deals',
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

  new Meal(
    'm3',
    'c3',
    'Deals',
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

  new Meal(
    'm4',
    'c4',
    'Deals',
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

  new Meal(
    'm5',
    'c5',
    'Deals',
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

  new Meal(
    'm6',
    'c6',
    'Deals',
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

  new Meal(
    'm7',
    'c7',
    'Deals',
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

  new Meal(
    'm8',
    'c8',
    'Deals',
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

  new Meal(
    'm9',
    'c9',
    'Deals',
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
  new Meal(
    'm10',
    'c10',
    'Deals',
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
  ),


  new Meal(
    'n1a',
    'c1',
    'Pakistani',
    'Chicken Handi',
    'Half KG',
    'https://scontent.flhe15-1.fna.fbcdn.net/v/t1.0-9/117643939_202446297882032_4221326379336286783_o.jpg?_nc_cat=106&ccb=2&_nc_sid=9267fe&_nc_eui2=AeElLJArEI_rVhiDVk1wTR5LlUFYU3xFT0yVQVhTfEVPTO6zv9XDRqUwtNW6vKix_c-4frs0Zj2usKFM7nc9p7ei&_nc_ohc=U0uocgr4a_IAX8i_tgo&_nc_ht=scontent.flhe15-1.fna&oh=f11f8695e15551d680cedd01cd0feca3&oe=5FE3F490',
    400,
    [
      'Chicken Handi without bone',
      'Half KG',
      'Salad',
      'Spices',
      'Butter (optional)'
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

  new Meal(
    'n1b',
    'c1',
    'Pakistani',
    'Mix Vegetable', 
    'For 2 Persons',
    'https://zuranazrecipe.com/wp-content/uploads/2016/01/IMG_0375-copy1.jpg',
    120,
    [
      'Aloo',
      'Matar',
      'Gajar',
      'Spices',
      'Salad',
      'Raita'
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

 

  new Meal(
    'n2',
    'c2',
    'Pakistani',
    'Toast Hawaii',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
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

  new Meal(
    'n3',
    'c3',
    'Pakistani',
    'Classic Hamburger',
    'simple',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
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

  new Meal(
    'n4',
    'c4',
    'Pakistani',
    'Wiener Schnitzel',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
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

  new Meal(
    'n5',
    'c5',
    'Pakistani',
    'Salad with Smoked Salmon',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
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

  new Meal(
    'n6',
    'c6',
    'Pakistani',
    'Delicious Orange Mousse',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
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

  new Meal(
    'n7',
    'c7',
    'Pakistani',
    'Pancakes',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
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

  new Meal(
    'n8',
    'c8',
    'Pakistani',
    'Creamy Indian Chicken Curry',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
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

  new Meal(
    'n9',
    'c9',
    'Pakistani',
    'Chocolate Souffle',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
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
  new Meal(
    'n10',
    'c10',
    'Pakistani',
    'Asparagus Salad with Cherry Tomatoes',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
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
  ),

  new Meal(
    'q1a',
    'c1',
    'Bbq',
    'Chicken Tikka',
    'For 2 Persons',
    'https://www.americangarden.us/wp-content/uploads/2016/11/AG_Chicken-tikka-kebab-1.jpg',
    320,
    [
      'Chicken Tikka 16 pc',
      'Crispy',
      'Spicy (optional)',
      'Salad',
      'Raita'
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

  new Meal(
    'q1b',
    'c1',
    'Bbq',
    'Chicken Kabab', 
    'For 3 Persons',
    'https://www.rowhanisaffron.com/wp-content/uploads/Chicken_Kebab.jpg',
    569,
    [
      'Chicken Kabab (6 pieces)',
      'Juicy',
      'Spice (Optinal)',
      'Chicken Boti (8 pieces)',
      'Salad',
      'Raita'
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

 

  new Meal(
    'q2',
    'c2',
    'Bbq',
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

  new Meal(
    'q3',
    'c3',
    'Bbq',
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

  new Meal(
    'q4',
    'c4',
    'Bbq',
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

  new Meal(
    'q5',
    'c5',
    'Bbq',
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

  new Meal(
    'q6',
    'c6',
    'Bbq',
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

  new Meal(
    'q7',
    'c7',
    'Bbq',
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

  new Meal(
    'q8',
    'c8',
    'Bbq',
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

  new Meal(
    'q9',
    'c9',
    'Bbq',
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
  new Meal(
    'q10',
    'c10',
    'Bbq',
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
  ),



  new Meal(
    'ch1a',
    'c1',
    'Chinese',
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

  new Meal(
    'ch1b',
    'c1',
    'Chinese',
    'Chinese Manchurian', 
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

 

  new Meal(
    'ch2',
    'c2',
    'Chinese',
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

  new Meal(
    'ch3',
    'c3',
    'Chinese',
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

  new Meal(
    'ch4',
    'c4',
    'Chinese',
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

  new Meal(
    'ch5',
    'c5',
    'Chinese',
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

  new Meal(
    'ch6',
    'c6',
    'Chinese',
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

  new Meal(
    'ch7',
    'c7',
    'Chinese',
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

  new Meal(
    'ch8',
    'c8',
    'Chinese',
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

  new Meal(
    'ch9',
    'c9',
    'Chinese',
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
  new Meal(
    'ch10',
    'c10',
    'Chinese',
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
  ),



  new Meal(
    't1a',
    'c1',
    'Tandoor',
    'Simple Naan',
    'For 1 Persons',
    'https://pakwired.com/wp-content/uploads/2015/10/naan.jpg',
    50,
    [
      'Unlimited for 1 Person',
      'Fresh',
      'Crispy',
      'Cooked with Egg',
      'Pieaces (Optional)'
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

  new Meal(
    't1b',
    'c1',
    'Tandoor',
    'Lahori Kulcha', 
    'For 1 Persons',
    'https://pbs.twimg.com/media/D2-G1hEXgAAC2v3?format=jpg&name=large',
    70,
    [
        'Unlimited For 1 Person',
        'Till',
        'Fresh',
        'Crispy',
        'Cooked with Egg',
        'Pieaces (Optional)',
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

 

  new Meal(
    't2',
    'c2',
    'Tandoor',
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

  new Meal(
    't3',
    'c3',
    'Tandoor',
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

  new Meal(
    't4',
    'c4',
    'Tandoor',
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

  new Meal(
    't5',
    'c5',
    'Tandoor',
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

  new Meal(
    't6',
    'c6',
    'Tandoor',
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

  new Meal(
    't7',
    'c7',
    'Tandoor',
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

  new Meal(
    't8',
    'c8',
    'Tandoor',
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

  new Meal(
    't9',
    'c9',
    'Tandoor',
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
  new Meal(
    't10',
    ['c10'],
    'Tandoor',
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
