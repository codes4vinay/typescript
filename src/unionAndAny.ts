//union is used to give more than 1 type

let subs: number | string = "1M"

//usage of union

let apiReqStatus: 'pending' | 'success' | 'error' = 'pending'

// apiReqStatus = 'vinay' //error

const orders = ['12', '20', '29', '89']

let currentOrder: string | undefined ;

for (const order of orders) {
    if(order === '20'){
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);

//any type -> mujhe prwaah nahi hai
//avoid any if possible


