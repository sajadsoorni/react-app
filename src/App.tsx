function App() {
  const [pizza, setPizaa] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom'],
  });

  const handleClick = () => {
    setPizaa({ ...pizza, toppings: [...pizza.toppings, 'Cheese'] });
  };
  return (
    <div>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
