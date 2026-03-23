//OOPS IN TYPESCRIPT

//1. Class -> In class it is recommended to have constructor
class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = "";
        this.price = 0;   //this ussi ko point karta hai jisne object banaya hai
    }
}

const masalaChai = new Chai("Ginger", 15);
// masalaChai.flavour = "Masala";
// masalaChai.price = 20;

console.log(masalaChai);


//access modifiers -> public, private, protected(only accessible within class and its subclasses(inheritance))

class Coffee {
    public flavour: string;
    private price: number;  //private properties can only be accessed within the class

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }

    getPrice(): number {
        return this.price;  //we can access private property through a public method
    }
}

const espresso = new Coffee("Espresso", 30);
console.log(espresso.flavour); //accessible
// console.log(espresso.price); //error: Property 'price' is private and only accessible within class 'Coffee'.
console.log(espresso.getPrice()); //accessible through public method


//getters and setters -> to access private properties

class Tea {
    private _flavour: string;  //_ is a convention to indicate that this property is private
    private _price: number;

    constructor(flavour: string, price: number) {
        this._flavour = flavour;
        this._price = price;
    }

    getFlavour(): string {
        return this._flavour;
    }

    setFlavour(flavour: string): void {
        this._flavour = flavour;
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(price: number): void {
        this._price = price;
    }
}

const greenTea = new Tea("Green", 25);
console.log(greenTea.getFlavour()); //accessible through getter
greenTea.setFlavour("Lemon"); //setting new flavour through setter
console.log(greenTea.getFlavour()); //accessible through getter


//static members -> static properties and methods belong to the class rather than an instance of the class

class Beverage {
    static category: string = "Hot Drink"; //static property

    static describe(): string { //static method
        return `Beverage category is ${Beverage.category}`;
    }
}

console.log(Beverage.category); //accessing static property without creating an instance
console.log(Beverage.describe()); //accessing static method without creating an instance


//abstract classes -> cannot be instantiated and are meant to be subclassed. They can contain abstract methods that must be implemented by subclasses.

abstract class Drink {
    abstract getDescription(): string; //abstract method
}

class Juice extends Drink {
    getDescription(): string {
        return "This is a juice.";
    }
}

const orangeJuice = new Juice();
console.log(orangeJuice.getDescription()); //This is a juice. 


//composition -> creating complex types by combining simpler types

class Milk {
    type: string;

    constructor(type: string) {
        this.type = type;
    }
}

class CoffeeWithMilk {
    coffee: Coffee;
    milk: Milk;

    constructor(coffee: Coffee, milk: Milk) {
        this.coffee = coffee;
        this.milk = milk;
    }

    getDescription(): string {
        return `This is a ${this.coffee.flavour} coffee with ${this.milk.type} milk.`;
    }
}

const latte = new CoffeeWithMilk(new Coffee("Latte", 35), new Milk("Whole"));
console.log(latte.getDescription()); //This is a Latte coffee with Whole milk.