import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import {Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Product from './components/Product';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './Auth/pages/SignIn'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect } from 'react';


// Configure Firebase.
const config = {
  apiKey: 'AIzaSyDudyapHZPwnJG3NMzwTuQRBVklCSB0edc',
  authDomain: 'react-shop-be269.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);
function App() {
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged( async (user) => {
      if(!!user){
        console.log('not login')
        return;
      };
     
      const token =await user.getIdToken()
      console.log(token)
    });
    return () => unregisterAuthObserver(); 
  }, []);
  return (
   <>
   <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/product/:id" element={<Product/>}/>
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/checkout" element={<Checkout/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/sign-in" element={<SignIn/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
