import Categories from "components/Categories/Categories";
import PizzaBlock from "components/PizzaBlock/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";
import Sort from "components/Sort/Sort";
import { useEffect, useState } from "react";

const Home = ({searchValue}) => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryID, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярності',
    sort: 'rating'
  });


  const search = searchValue ? `&search=${searchValue}` : '';
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://64d5f14a754d3e0f13615c96.mockapi.io/items?${categoryID>0?`category=${categoryID}`:''}&sortby=${sortType.sort}&${sortType.sort==='title'? `order=asc`:`order=desc`}${search}`).then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, [categoryID, sortType, searchValue])
    return (
        <>
            <div className="container">
                <div className="content__top">
            <Categories value={categoryID} onClickCategory={(i)=>setCategoryId(i)}></Categories>
            <Sort value={sortType} onChangeSort={(i)=>setSortType(i)}></Sort>
          </div>
          <h2 className="content__title">Всі піцци</h2>
          <div className="content__items">
            {isLoading ? [...new Array(items.length)].map((_, index) => <Skeleton key={index} />)
              : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
          </div>
            </div>
        </>
    )
}
export default Home;
//.filter(obj=>{if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){return true}return false})