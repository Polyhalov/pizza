import '../scss/app.scss';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Skeleton from './PizzaBlock/Skeleton';
import Sort from './Sort/Sort';
import { useEffect, useState } from 'react';

export const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://64d5f14a754d3e0f13615c96.mockapi.io/items').then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  },[])
  return (
    <div className="wrapper">
     <Header></Header>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
