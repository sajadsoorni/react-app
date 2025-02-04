import { produce } from 'immer';
import { useState } from 'react';
function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ],
  });

  const handleClick = () => {
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    //   ),
    // });
    setCart(
      produce((draft) => {
        const item = draft.items.find((item) => item.id === 1);
        if (item) {
          item.quantity += 1;
        }
      })
    );
  };
  return (
    <div>
      {cart.items.map((item) => (
        <p key={item.id}>
          {item.title} - Quantity:{item.quantity}
        </p>
      ))}
      <button onClick={handleClick}>Change Quantity</button>
    </div>
  );
}

export default App;
