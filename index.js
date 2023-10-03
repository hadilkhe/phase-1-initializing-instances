class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
// Lunch 
class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
//dinner 
class Dinner {
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.dessert = dessert;
    }
  }

  const myBreakfast = new Breakfast("toast", "coffee");
const myLunch = new Lunch("caesar salad", "tomato soup", "iced tea");
const myDinner = new Dinner("garden salad", "butternut squash soup", "steak", "chocolate cake");

console.log(myBreakfast); 
console.log(myLunch);     
console.log(myDinner);    