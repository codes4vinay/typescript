const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

//declaring object types

let tea: {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name : "MasalaChai",
    price: 30,
    isHot: true
}

type Tea = {
    name: string;
    price: number;
    isHot: boolean
}

const gingerTea: Tea = {
    name: "GingerTea",
    price : 80,
    isHot : true
}

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew: Brew = coffee //no error becz we have given extra fields BUT kam fields honge toh issue hoga 

//separation for code clarity

type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

//if we have use partial updates for types in objects

type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>)  => {
    console.log("updating chai with" , updates);
}

updateChai({price: 80}) //we have given less properties but no error becz we used Partial
updateChai({})

//Required
type ChaiOrder = {
    name?:string;
    quantity?:number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log("order");
    
}

placeOrder({name: "MasalaChai", quantity: 8})

//pick
type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 80
}

//omit  -> price likhne ki jaraurat nhi hai ab
type BasicChaiInfo2 = Omit<Chai, "price">;