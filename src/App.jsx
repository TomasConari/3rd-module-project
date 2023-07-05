import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import { Content } from './components/Content';

const App = () => {

  const [search, setSearch] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Header searchState={search} setSearchState={setSearch} />
      <Content searchState={search} />
    </div>
  );
};
export default App;