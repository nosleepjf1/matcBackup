/**
 * Created by bobnweave on 10/15/16.
 */

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}



var mango = {
  name: "mango",
   price: .75,
    amount: 0,
    totalPrice: 0
};
var chocolate = {
    name: "chocolate",
    price: .75,
    amount: 0,
    totalPrice: 0
};

var cartItems = localStorage.getObj("cart") || [];

console.log(cartItems);



function addToCart(flavor){
    if(document.getElementById(flavor.name + "Amount").value >= 1) {
        var itemAdded = false;
        for(var i = 0; i < cartItems.length; i++){
            if(cartItems[i].name === flavor.name){
               itemAdded = true;
            }
        }
        if(itemAdded){
            alert('you have already added this flavor to your cart.')
        }
        else {
            flavor.amount = Number(document.getElementById(flavor.name + "Amount").value);
            flavor.totalPrice = flavor.price * flavor.amount;
            cartItems.push(flavor);
            localStorage.setObj("cart", cartItems);
            console.log(cartItems);
            document.getElementById("myCart").innerHTML = cartItems.length + " flavors";
        }
    }
    else{
        alert('Please choose an amount to add to your cart')
    }
}


function fillCart(){

    for(var i = 0; i < cartItems.length; i++){
        document.getElementById('cartContainer').innerHTML += "<div class='item " + i + "'><div>" + cartItems[i].name + "</div>";
        document.getElementById('cartContainer').innerHTML += "<div>" + cartItems[i].amount + "</div>";
        document.getElementById('cartContainer').innerHTML += "<div>" + cartItems[i].totalPrice + "</div></div>";
    }
}