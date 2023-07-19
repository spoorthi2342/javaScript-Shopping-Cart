// // Get the necessary DOM elements
// const searchInput = document.getElementById('#searchInput');
// const searchResults = document.getElementById('#searchResults');
// const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
// const cartItems = document.getElementById('#cart-items');
// const subtotal = document.getElementById('#subtotal');
// const checkoutBtn = document.getElementById('#checkout-btn');

// // Create an array to store the cart items
// const cart = [];

// // Function to handle adding items to the cart
// function addToCart(item) {
//   cart.push(item);
//   updateCart();
// }

// // Function to update the cart display
// function updateCart() {
//   cartItems.innerHTML = '';
//   let total = 0;

//   for (const item of cart) {
//     const cartItem = document.createElement('div');
//     cartItem.classList.add('cart-item');
//     cartItem.innerHTML = `
//       <img src="${item.image}" alt="${item.name}">
//       <div class="item-details">
//         <h3>${item.name}</h3>
//         <p>Price: ₹${item.price}</p>
//       </div>
//     `;
//     cartItems.appendChild(cartItem);
//     total += item.price;
//   }

//   subtotal.textContent = `Subtotal: ₹${total.toFixed(2)}`;
// }

// // Event listener for the search input
// searchInput.addEventListener('input', function () {
//   const searchQuery = searchInput.value.toLowerCase();
//   const filteredResults = [];

//   for (const product of products) {
//     const productName = product.name.toLowerCase();
//     if (productName.includes(searchQuery)) {
//       filteredResults.push(product);
//     }
//   }

//   displaySearchResults(filteredResults);
// });

// // Function to display the search results
// function displaySearchResults(results) {
//   searchResults.innerHTML = '';

//   for (const result of results) {
//     const resultItem = document.createElement('div');
//     resultItem.classList.add('search-result');
//     resultItem.textContent = result.name;
//     searchResults.appendChild(resultItem);
//   }
// }

// // Event listener for the add to cart buttons
// for (const button of addToCartButtons) {
//   button.addEventListener('click', function () {
//     const productItem = button.closest('.product-item');
//     const name = productItem.querySelector('h2').textContent;
//     const price = parseFloat(productItem.querySelector('p').textContent.substring(1));
//     const image = productItem.querySelector('img').getAttribute('src');

//     const item = {
//       name: name,
//       price: price,
//       image: image
//     };

//     addToCart(item);
//   });
// }

// // Event listener for the checkout button
// checkoutBtn.addEventListener('click', function () {
//   // Perform checkout logic here
// });
let num=0
let num2=0
let x=0
document.getElementsByClassName("card-body").value=1;
function changeNumAdd(){  
    num+=1
    document.getElementById("num").innerHTML=num;
    x = document.getElementsByClassName("card-body").value;
    num2+=x;
    document.getElementById("num2").innerHTML = num2;
}
function changeNumSub()
{
    if(num>0)
    {
        num-=1
        document.getElementById("num").innerHTML=num;
    }
}