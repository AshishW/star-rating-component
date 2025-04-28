// import './App.css';
import StarRating from './StarRatingComponent'
import { useState } from 'react';

function App() {
  const [productRating, setProductRating] = useState(0);

  return (
  <>
    <h1>Product Rating: {productRating}</h1>
    <StarRating maxRating={5} onChange={setProductRating}/>
  </>
  )
}

export default App;
