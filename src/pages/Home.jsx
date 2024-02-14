// import axios from "axios";
import Categories from "components/Categories/Categories";
import PizzaBlock from "components/PizzaBlock/PizzaBlock";
import Skeleton from "components/PizzaBlock/Skeleton";
import Sort, { list } from "components/Sort/Sort";
import qs from 'qs';
import { useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import { fetchPizzas, selectPizza } from "../redux/slices/pizzasSlice";


const Home = () => {
  const categoryId = useSelector(state => state.filterSlice.categoryId)
  const sortType = useSelector(state => state.filterSlice.sort.sortProp);
  const searchValue = useSelector(state => state.filterSlice.searchValue);
  const {items, status} = useSelector(selectPizza);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);


  // const [isLoading, setIsLoading] = useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  }
  const getPizzas = async () => {
    // setIsLoading(true) 
  
    dispatch(fetchPizzas({
        categoryId,
        sortType,
        search,
      }));
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
  }, [])
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
    // eslint-disable-next-line
  }, [categoryId, sortType, search])
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
      sortType,
        categoryId: categoryId > 0 ? categoryId : null
      },{skipNulls:true})
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
          {status === 'error' ? <div>
            <h2>Піцци не завантажились!</h2>
            <p>Будь-ласка спробуйте ще раз!</p>
         </div>:<div className="content__items">
            {status==='loading' ? [...new Array(items.length)].map((_, index) => <Skeleton key={index} />)
              : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
          </div>}
            </div>
        </>
    )
}
export default Home;
//.filter(obj=>{if(obj.title.toLowerCase().includes(searchValue.toLowerCase())){return true}return false})