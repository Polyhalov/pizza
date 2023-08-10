import '../scss/app.scss';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Sort from './Sort/Sort';
import pizzas from './../../src/pizzas.json'

export const App = () => {
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
            {pizzas.map((item) => (<PizzaBlock {...item} />))}
          </div>
        </div>
      </div>
    </div>
  );
};
