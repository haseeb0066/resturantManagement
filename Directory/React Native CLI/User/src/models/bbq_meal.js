class Bbq_Meal {
    constructor( 
      id,
      categoryIds,
      title,
      persons,
      imageUrl,
      price,
      dealDetail,
      // steps,
      // isGlutenFree,
      // isVegan,
      // isVegetarian,
      // isLactoseFree
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.dealDetail = dealDetail;
      //this.steps = steps;
      this.price = price;
      this.persons = persons;
      //this.isGlutenFree = isGlutenFree;
      //this.isVegan = isVegan;
      //this.isVegetarian = isVegetarian;
     // this.isLactoseFree = isLactoseFree;
    }
  }
  
  export default Bbq_Meal;
  