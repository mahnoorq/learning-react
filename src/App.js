import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
const [count, setCount] = useState(0);

function handleClick() { 
  setCount(count+1);
}

  return (
    <div>
      <header>
          <Button count={count} onClick={handleClick}/>
      </header>
    </div>
  );
}

export default App;

