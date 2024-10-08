import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  // backend url
  const url = "http://localhost:4000"

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      //if itemId is not stored in cartItems previouly then count is 1
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      //new entry for our food product
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      // when you are going add the same item to the cart here is going to increment it
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // when you are going remove the item from the cart here is going to decrement it
  };

 const getTotalCartAmount =() => {
   let totalAmount = 0;
   for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];

      }
   }
   return totalAmount;
 }


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;

// props.children is built-in method.
