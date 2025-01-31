import ListGroup from './components/ListGroup/ListGroup';
function App() {
  // let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  let countries = [
    'Kurdistan',
    'United State of America',
    'United Kingdom',
    'France',
    'Germany',
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={countries}
        heading='Countries'
        onSelectItem={handleSelectItem}
      />
      {/* <ListGroup items={items} heading="Cities" /> */}
    </div>
  );
}

export default App;
