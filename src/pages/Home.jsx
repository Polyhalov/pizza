import Categories from "components/Categories/Categories";
import PizzaBlock from "components/PizzaBlock/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";
import Sort from "components/Sort/Sort";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "redux/slices/filterSlice";


const Home = ({ searchValue }) => {
  
  const categoryId = useSelector(state => state.filterSlice.categoryId)
  const sortType = useSelector(state => state.filterSlice.sort.sortProp);
  const dispatch = useDispatch()


  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  const search = (searchValue ? `&search=${searchValue}` : '');
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://64d5f14a754d3e0f13615c96.mockapi.io/items?${categoryId>0?`category=${categoryId}`:''}&sortby=${sortType}&${sortType==='title'? `order=asc`:`order=desc`}${search}`).then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, [categoryId, sortType, search])
    return (
        <>
            <div className="container">
                <div className="content__top">
            <Categories value={categoryId} onClickCategory={onClickCategory}></Categories>
            <Sort></Sort>
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