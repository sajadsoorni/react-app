import React, { useState } from 'react';

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: 'Bob' } });
  };
  return (
    <div>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
