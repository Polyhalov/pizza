import Categories from "components/Categories/Categories";
import PizzaBlock from "components/PizzaBlock/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";
import Sort from "components/Sort/Sort";
import { useEffect, useState } from "react";

const Home = () => {

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
        <>
            <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {isLoading ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
              : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
          </div>
        </>
    )
}
export default Home;