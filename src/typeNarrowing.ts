// Type narrowing is the process in TypeScript where the compiler refines the type of a variable from a broad type (like a union type, such as string | number) to a more specific type within a certain code block or context, based on runtime checks and control flow analysis. 

function processValue(value: string | number) {
  if (typeof value === "string") {
    // value is narrowed to string here
    console.log(value.toUpperCase());
  } else {
    // value is narrowed to number here
    console.log(value.toFixed(2));
  }
}

// typeof type guards


function getData(data: string | number){
    if(typeof data === 'string'){
        return `Getting ${data}`;
    }
    return `Order ${data}`;
}

type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:chaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {type: "masala"; spiceLevel: number};
type GingerChai = {type: "ginger"; amount: number};
type ElaichiChai = {type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function brew(order: MasalaChai | GingerChai){
    if("spiceLevel" in order){
        return `The type of chai ${order.type}`
    }
}

//we can use unknown instead of any (in api calls) becz we do not know what type of data will come but unknown is safer than any
//any use karne ke baad check nahi kar sakte

