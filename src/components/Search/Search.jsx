import styles from './Search.module.scss'
 const Search = ({searchValue, setSearchValue}) => {
    return (
        <input onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} className={styles.root} placeholder="Пошук піцци..."></input>
    )
}

export default Search;