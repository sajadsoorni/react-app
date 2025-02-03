import { useState } from 'react';

function App() {
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      // title: drink.title,
      ...drink,
      price: 6,
    };

    setDrink(newDrink);
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
