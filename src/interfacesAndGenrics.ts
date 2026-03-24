interface Chai {
    flavour: string
    price: number
    milk?: boolean //optional property
}

const masalaChai: Chai = {
    flavour: "Masala",
    price: 20,
    milk: true
}

//interfaces object ka structure define karte hai, but code ko js me convert nahi karte && na hi object me data daalte hai

interface Shop{
    readonly id : number //readonly property, once assigned cannot be changed
    name: string
    location: string
    open: boolean
}

const s: Shop = {
    id: 1,
    name: "Tea Shop",
    location: "Delhi",
    open: true
}

// s.id = 2 //error, cannot assign to readonly property

//Function type interface
interface DiscountCalculator {
    (price: number, discount: number): number
}

const apply50 : DiscountCalculator = (price, discount) => {
    return price - (price * discount / 100)
}

console.log(apply50(100, 50)) // Output: 50

//index signature interface
interface StringArray {
    [index: number]: string
}

const myArray: StringArray = ["Hello", "World"]
console.log(myArray[0]) // Output: Hello

//library se aaya hai
interface User{
    name: string
}

//hamne bnaya hai
interface User{
    age: number
}

//dono interfaces merge ho gaye, ab User interface me name aur age dono properties hai
const u: User = {
    name: "Vinay",
    age: 30
}

//extending interfaces

interface A {a: string}
interface B {b: number}

interface C extends A, B {
    c: boolean
}


// ----------------------------------------------------------------------------------------------------------------------------------

//Generics -> code ko reusable banate hai, jisme type ko parameter ke roop me pass karte hai

function wrapInArray<T>(value: T): T[] {
    return [value]
}

const wrappedString = wrapInArray("Hello")
const wrappedNumber = wrapInArray(42)
const wrappedObject = wrapInArray({name: "Vinay", age: 30})

console.log(wrappedString) // Output: ["Hello"]
console.log(wrappedNumber) // Output: [42]
console.log(wrappedObject) // Output: [{name: "Vinay", age: 30}]


function pair<A,B>(a: A, b: B): [A, B] {
    return [a, b] //[b,a] -> wrong
}

const stringNumberPair = pair("Hello", 42)
const booleanObjectPair = pair(true, {name: "Vinay", age: 30})

console.log(stringNumberPair) // Output: ["Hello", 42]
console.log(booleanObjectPair) // Output: [true, {name: "Vinay", age: 30}]


//Generic interfaces
interface Box<T> {
    content: T
}

const stringBox: Box<string> = {content: "Hello"} //content property ka type string hona chahiye, kyunki humne Box<string> likha hai
const numberBox: Box<number> = {content: 42}
const objectBox: Box<{name: string, age: number}> = {content: {name: "Vinay", age: 30}}

console.log(stringBox) // Output: {content: "Hello"}
console.log(numberBox) // Output: {content: 42}
console.log(objectBox) // Output: {content: {name: "Vinay", age: 30}}

//Generic interface uses
interface ApiResponse<T> {
    data: T
    status: number
    error?: string
}

const userResponse: ApiResponse<{name: string, age: number}> = {
    data: {name: "Vinay", age: 30},
    status: 200
}

const errorResponse: ApiResponse<null> = {
    data: null,
    status: 500,
    error: "Internal Server Error"
}

console.log(userResponse) // Output: {data: {name: "Vinay", age: 30}, status: 200}
console.log(errorResponse) // Output: {data: null, status: 500, error: "Internal Server Error"}