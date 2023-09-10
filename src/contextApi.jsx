import React, { createContext, useState } from "react";
export const DataContext = createContext(null);

const DataStore = (props) => {
  const [cartValue, setcartValue] = useState(0);
  const [cartData, setcartData] = useState([]);

  const addToCart = (product) => {
    setcartData([...cartData, product]);
  };

  const contextValues = {
    cartValue,
    setcartValue,
    cartData,
    setcartData,
    addToCart,
  };

  return (
    <DataContext.Provider value={contextValues}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataStore;
