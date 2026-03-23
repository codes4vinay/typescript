type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50
}

type CupSize = "small" | "large"  //this is known as literal types

// class Chai implements CupSize{  //Gives error -> can only implement if the cupSize is a object

// }

//to solve this issue we can use interface

// interface cupSize = "small" | "large" //wrong

interface cupSize  {
    size: "small" | "large"
}

class Chai implements cupSize {   //correct
    size: "small" | "large" = "large";
}  

//classes me use karna hai toh interface hi banao

//   | -> union , & -> intersection

//intersection

type BaseChai = {teaLeaves : number};
type Extra = {masala: number};

type masalaChai = BaseChai & Extra; //intersection

const cup : masalaChai = {
    teaLeaves: 5,
    masala: 2
}

//optional cases
type User = {
    username : string;
    bio?: string    //bio is optional , agar hogi toh string 
}
