import axios from "axios";
import Categories from "components/Categories/Categories";
import PizzaBlock from "components/PizzaBlock/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";
import Sort, { list } from "components/Sort/Sort";
import qs from 'qs';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setFilters } from "redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";


const Home = ({ searchValue }) => {
  
  const categoryId = useSelector(state => state.filterSlice.categoryId)
  const sortType = useSelector(state => state.filterSlice.sort.sortProp);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);


  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  }
  const fetchPizzas = () => {
    setIsLoading(true) 
    axios.get(`https://64d5f14a754d3e0f13615c96.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortby=${sortType}&${sortType === 'title' ? `order=asc` : `order=desc`}${search}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
    })
  }

  const search = (searchValue ? `&search=${searchValue}` : '');
  useEffect(() => {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1))
      const sort = list.find(obj=>obj.sortProp===params.sortType)
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      )
      isSearch.current = true;
    }
    // eslint-disable-next-line
  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
    // eslint-disable-next-line
  }, [categoryId, sortType, search])
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
      sortType,
      categoryId
    })
    navigate(`?${queryString}`)
    }
    isMounted.current = true;
  }, [categoryId, sortType, navigate]);
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