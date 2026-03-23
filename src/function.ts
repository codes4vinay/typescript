function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala" , 5)

//return ka type
function getChai(type: string, cups: number):number {
    return cups;
}

//agar kuch return nahi kar rahe to type :void hoga

//default values
function orderChai(type: string = "Masala"){
    console.log(`Making chai cups of ${type}`);
}