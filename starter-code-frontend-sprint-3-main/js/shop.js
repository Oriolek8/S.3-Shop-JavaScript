// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [ ];

var subtotal = {
    grocery:  {
        value: 0, 
        discount: 0

    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1

function buy(id) {
    let product;
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
   for(let i = 0; i < products.length; i++){
        
        if( id === products[i].id){
            product = products[i];
        }
   }
   
    cartList.push( product)
    console.log("Llista" , cartList)
    }


// Exercise 2   
function cleanCart() {
    cartList.splice(0, cartList.length);
    console.log(cartList);
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    for(let i = 0; i < cartList.length; i++){
    if ( cartList[i].type === "grocery"){
       subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
    }else if ( cartList[i].type === "beauty"){
        subtotal.beauty.value = subtotal.beauty.value + cartList[i].price;
    }else if ( cartList[i].type === "clothes") {
        subtotal.clothes.value = subtotal.clothes.value + cartList[i].price;
    }else {
        return "No existe este producto"
    }
    console.log("Subtotal por tipo" ,subtotal);
    return subtotal.type.value;
    }
}
    
    
    
    


// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    
    for( let prop in cartList){
    total += cartList[prop].price;
    }
    console.log(total)
}

// Exercise 5


function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
    let quantity;
    
    for(let i = 0; i < cartList.length; i++){
       let productIsInCart = false;
        let j = 0;
        for( j = 0; j <cart.length; j++){
        
           if(cart[j].name === cartList[i].name){
               productIsInCart = true;
               break;
           }
            
        }
        if(productIsInCart){
            
            //console.log("Ya existe")
           

            quantity =  cart[j].quantity + 1;
            subtotal = cartList[i].price * quantity ;
            const newProduct = {...cart[j], quantity, subtotal }
            

            cart[j] = newProduct;
            
            
        }else{
            
           // console.log("No existe");
            //console.log("cartList[i].type", cartList[i].type)
            //console.log("cartList[i].price", cartList[i].price)
            quantity = 1;
            subtotal = cartList[i].price  ;
            
            const newProduct = {...cartList[i], quantity, subtotal};
            

            cart.push(newProduct)
            
            
        }
    }
   console.log("generateCart()" , cart)

   console.log("------------")
        
}
    
       

// Exercise 6
function applyPromotionsCart() {
    
    // Apply promotions to each item in the array "cart"
    
console.log("cart", cart);

    for(let i = 0; i < cart.length; i++){
        console.log("cart[i]", cart[i]);
    

        if(cart[i].name === "cooking oil" && cart[i].quantity >= 3){
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
            
        }else if ( cart[i].name === "Instant cupcake mixture" && cart[i].quantity >= 10){
            cart[i].subtotalWithDiscount = cart[i].price * 2/3
        }else{
            cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price ;
        }
        

       //subtotal = price - subtotalWithDiscount;
        
    }  
   
   
   
    
    
    console.log("cart tttt", cart)
}



// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
