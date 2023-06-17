import React from 'react';
import TextComponent from './textComponent';
import Button from './button';

function App() {
  return (
    <div className="App">
      <TextComponent color="blue" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fugit ratione beatae quis facilis maiores, voluptatum dignissimos obcaecati hic at ipsam mollitia nihil perspiciatis quia. Aliquid nobis provident exercitationem magni." />
      <Button label="Clique aqui" />
    </div>
  );
}

export default App;
