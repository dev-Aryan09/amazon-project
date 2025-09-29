export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionsId: '1',
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionsId: '2',
    },
  ];
}

// When we refresh the page or navigate to another page then the variable will also be refreshed, so, to avoid this behaviour, we should use local storage.
function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;
  // checking that item is present in cart ot not
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionsId: '1'  // 1 as default value 
    }); 
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  //updated cart saved to local storage again
  saveToStorage();
}
