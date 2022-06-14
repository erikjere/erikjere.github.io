import { useReducer } from "react"

import CartContext from "./cart-context"

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //gets executed when Add to cart button is clicked

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    )
    const existingCartItem = state.items[existingCartItemIndex]

    if (
      existingCartItem &&
      existingCartItem.quantity < existingCartItem.amount + action.item.amount
    ) {
      // if there is not enough stock to add more items, don't add anything
      return {
        ...state,
      }
    }
    const updatedTotalAmount =
      state.totalAmount + parseInt(action.item.price) * action.item.amount

    let updatedItems
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  if (action.type === "REMOVE") {
    //gets executed when item x button in cart is clicked
    const item = state.items.find((item) => item.id === action.id)
    const updatedTotalAmount = state.totalAmount - item.price * item.amount

    const itemIndex = state.items.indexOf(item)
    const updatedItems = [...state.items]
    updatedItems.splice(itemIndex, 1)

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  if (action.type === "INCREMENT") {
    //gets executed when + button in cart is clicked
    const item = state.items.find((item) => item.id === action.id)
    if (item.amount === item.quantity) {
      return {
        ...state,
      }
    }
    const updatedTotalAmount = state.totalAmount + item.price
    const itemIndex = state.items.indexOf(item)
    const updatedItem = {
      ...item,
      amount: item.amount + 1,
    }
    let updatedItems = [...state.items]
    updatedItems[itemIndex] = updatedItem
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }

  if (action.type === "DECREMENT") {
    //gets executed when - button in cart is clicked
    const item = state.items.find((item) => item.id === action.id)
    const updatedTotalAmount = state.totalAmount - item.price
    const itemIndex = state.items.indexOf(item)
    let updatedItems = [...state.items]
    //if only one item in cart, remove it
    if (item.amount === 1) {
      updatedItems.splice(itemIndex, 1)
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }
    }
    //if more than one item in cart, decrement amount by 1
    const updatedItem = {
      ...item,
      amount: item.amount - 1,
    }
    updatedItems[itemIndex] = updatedItem
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id })
  }

  const incrementItemHandler = (id) => {
    dispatchCartAction({ type: "INCREMENT", id: id })
  }

  const decrementItemHandler = (id) => {
    dispatchCartAction({ type: "DECREMENT", id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    incrementItem: incrementItemHandler,
    decrementItem: decrementItemHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
