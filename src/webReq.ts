import axios from "axios";

// axios.get("https://vinaydev.in")
// .then(response => {
//     console.log(response.data);
// })


//types for library

// npm i some-library
// npm i -D @types/some-library

interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1")
.then(response => {
    console.log(response.data);
})