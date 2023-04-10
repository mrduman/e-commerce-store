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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
