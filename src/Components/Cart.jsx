import React, { useState } from "react";

const Cart = () => {
  const [item, setItem] = useState(0);
  const [status, setStatus] = useState(true);

  const handleDecrement = () => {
    setStatus(true);
    if (item > 0) {
      setItem((val) => val - 1);
    }
  };

  const handleIncrement = () => {
    setStatus(false);
    setItem((val) => val + 1);
  };

  return (
    <div>
      <h1>Cart Component</h1>
      <h1>Cart Value: {item}</h1>
      {status ? (
        <button onClick={handleIncrement}>Add To Cart</button>
      ) : (
        <button onClick={handleDecrement}>Remove From Cart</button>
      )}
    </div>
  );
};

export default Cart;
