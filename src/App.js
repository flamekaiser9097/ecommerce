import logo from './logo.svg';
import './App.css';
import Product from './Product';

function App() {
  
  return (
    <>
    <div className='Navbar' style={{color:"white"}}>
      <span>
      <h1>Products</h1>
      </span>
      
    
    </div>
    <div className="App">
      <Product/>
    </div>
    </>
  );
}

export default App;
