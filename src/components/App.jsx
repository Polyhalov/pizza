import Home from 'pages/Home';
import '../scss/app.scss';
import Header from './Header/Header';
import NotFound from 'pages/NotFound';
// import NotFoundBlock from './NotFound/NotFoundBlock';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from 'pages/Cart';
import { useState } from 'react';
import { createContext } from 'react';



export const AppContext = createContext('');
export const App = () => {
  
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <AppContext.Provider value={{searchValue, setSearchValue}}>
        <Header></Header>
      <div className="content">
          <Routes>
            <Route path='/' element={<Home searchValue={searchValue} />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
      </div>
     </AppContext.Provider>
    </div>
  );
};
