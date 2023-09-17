import { useContext } from 'react';
import styles from './Search.module.scss'
import { AppContext } from 'components/App';
const Search = () => {
    const {searchValue, setSearchValue} = useContext(AppContext);
    return (
        <input onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} className={styles.root} placeholder="Пошук піцци..."></input>
    )
}

export default Search;