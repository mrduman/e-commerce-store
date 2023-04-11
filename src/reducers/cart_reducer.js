import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    let tempItem = state.cart.find((i) => i.id === id + color);

    if (tempItem) {
      const tempCart = state.cart.map((newCart) => {
        if (newCart.id === id + color) {
          let newAmount = newCart.amount + amount;
          if (newAmount > newCart.max) {
            newAmount = newCart.max;
          }
          return { ...newCart, amount: newAmount };
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        price: product.price,
        max: product.stock,
        image: product.images[0].url,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (value === "inc") {
          let tempAmount = cartItem.amount + 1;
          if (tempAmount > cartItem.max) {
            tempAmount = cartItem.max;
          }
          return { ...cartItem, amount: tempAmount };
        }
        if (value === "dec") {
          let tempAmount = cartItem.amount - 1;
          if (tempAmount <= 0) {
            tempAmount = 1;
          }
          return { ...cartItem, amount: tempAmount };
        }
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
