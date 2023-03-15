import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [category, setCategory] = useState('');

  const connect = () => console.log('connecting')
  const disconnect = () => console.log('disconnecting')

  return (
    <div> 
    </div>
  );
}

export default App;
