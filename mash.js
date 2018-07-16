// version 1
function mash (){
    return ("You will live in a"+ getHome()+ "You will have" + getChildrenCount()+ "kids!"+ "and you will drive a" + getCar ());
};
console.log(mash());

// version 2
let future = ["Mansion", "Apartment", "Shack", "House", "Antarctica", process.argv[2]]
function getHome(){
    let randomizer = Math.floor(Math.random() * future.length);
    return future[randomizer];
}
console.log(getHome());

function getChildrenCount(){
    let Fayeem = Math.floor(Math.random() * 100 + 1);
    return (Fayeem);
} 
console.log(getChildrenCount());


function getCar(){
    let thesquad = ["Lamborghini", "Buggati", "IceCream Truck ", "Redbull Car"]

}
