import ListGroup from './components/ListGroup';
import './App.css';
function App() {
  let items = ['New York', 'Los Angles', 'San Francisco'];

  return (
    <div>
      <ListGroup items={items} heading='Miami' onSelectItem={() => {}} />
    </div>
  );
}

export default App;
