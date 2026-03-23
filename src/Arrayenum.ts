const chaiFlavours: string[] = ['chai', 'chai-latte', 'chai-tea', 'chai-milk'];
const chaiPrices: number[] = [2.5, 3.0, 2.0, 2.75];

const rating: Array<number> = [4.5, 4.0, 3.5, 4.2];

//Array of objects
interface Chai {
    flavour: string;
    price: number;
    rating: number;
}

const chaiMenu: Chai[] = [
    { flavour: 'chai', price: 2.5, rating: 4.5 },
    { flavour: 'chai-latte', price: 3.0, rating: 4.0 },
    { flavour: 'chai-tea', price: 2.0, rating: 3.5 },
    { flavour: 'chai-milk', price: 2.75, rating: 4.2 }
];

console.log(chaiMenu);

//read only array
const readOnlyChaiFlavours:  readonly string[] = ['chai', 'chai-latte', 'chai-tea', 'chai-milk'];
// readOnlyChaiFlavours.push('chai-vanilla'); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Tuple -> ordered list of elements with fixed types
type ChaiTuple = [string, number, number];
const chaiTuple: ChaiTuple = ['chai', 2.5, 4.5];
console.log(chaiTuple);

//read only tuple
type ReadOnlyChaiTuple = readonly [string, number, number];
const readOnlyChaiTuple: ReadOnlyChaiTuple = ['chai', 2.5, 4.5];
// readOnlyChaiTuple[0] = 'chai-latte'; // Error: Cannot assign to '0' because it is a read-only property.


//enums -> a way to define a set of named constants
//enum ka standard convention is that they contain only one data type // not necessary but it is a good practice to keep them consistent
enum ChaiFlavour {  
    CHAI = 'chai', //uppercase is a good convention for enum members
    CHAI_LATTE = 'chai-latte',
    CHAI_TEA = 'chai-tea',
    CHAI_MILK = 'chai-milk'
}

console.log(ChaiFlavour.CHAI); // Output: 'chai'
console.log(ChaiFlavour.CHAI_LATTE); // Output: 'chai-latte'


//tuple
let t: [string, number] = ['hello', 42];
t.push('world'); // This is allowed, but it can lead to unexpected behavior