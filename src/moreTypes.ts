let response: any = "47";

// (response as string) //forceful type assertion
let numericLength: number = (response as string).length

type Book = {
    name: string;
}

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name);

//type assertion -> forcefully
const inputElement = document.getElementById("username") as HTMLInputElement

try {

} catch (error) {
    if (error instanceof Error) {  //Error class banani padegi
        console.log(error.message);
    }
    console.log("Error", error);
}

const data: unknown = "chai aur code"
const strData: string = data as string

//never
type Role = "admin" | "user" | "superAdmin"

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to admin page");
        return;
    }
    if(role === "user"){
        console.log("Redirecting to user page");
        return;
    }
    role;  //agar superadmin nahi hota toh ts isse never leti
}