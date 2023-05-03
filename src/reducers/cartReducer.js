import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

import bonusItems from "../data/bonusItems";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, number, bird } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === bird.id) {
          let newNumber = cartItem.number + number;
          return { ...cartItem, number: newNumber };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name: bird.name,
        number,
        img: bird.img,
        price: bird.amount,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newNumber = item.number + 1;
          if (newNumber > item.max) {
            newNumber = item.max;
          }
          return { ...item, number: newNumber };
        }
        if (value === "dec") {
          let newNumber = item.number - 1;
          if (newNumber < 1) {
            newNumber = 1;
          }
          return { ...item, number: newNumber };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { totalItems, totalAmount } = state.cart.reduce(
      (total, cartItem) => {
        const { number, price } = cartItem;
        total.totalItems += number;
        total.totalAmount += price * number;
        return total;
      },
      { totalItems: 0, totalAmount: 0, discount: 0, bonus: [] }
    );

    let totalBonus = 0;
    if (totalAmount >= 100 && totalAmount < 300) {
      totalBonus = 1;
    } else if (totalAmount >= 300 && totalAmount < 500) {
      totalBonus = 2;
    } else if (totalAmount >= 500 && totalAmount < 1000) {
      totalBonus = 3;
    } else if (totalAmount >= 1000) {
      totalBonus = 4;
    }

    let updatedDiscount = 0;
    if (totalItems >= 3) {
      updatedDiscount = 10;
    }

    const discountedTotalAmount = totalAmount - totalAmount * 0.1;
    const bonusItemsToAdd = bonusItems.slice(0, totalBonus);

    return {
      ...state,
      totalItems,
      totalAmount,
      updatedTotal: discountedTotalAmount,
      discount: updatedDiscount,
      bonus: bonusItemsToAdd,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cartReducer;
