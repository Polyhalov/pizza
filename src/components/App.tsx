import Home from 'pages/Home';
import '../scss/app.scss';
import Header from './Header/Header';
import NotFound from 'pages/NotFound';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from 'pages/Cart';



export const App = () => {
  
  return (
    <div className="wrapper">
        <Header></Header>
      <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
      </div>
    </div>
  );
};
