import { useCallback, useContext, useState } from 'react';
import styles from './Search.module.scss'
import { AppContext } from 'components/App';
import debounce from 'lodash.debounce';
const Search = () => {
    const [value, setValue] = useState('');
    const { setSearchValue } = useContext(AppContext);

    
    const onChangeInput = event => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }
    // eslint-disable-next-line
    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 1000), [],
    );

    return (
        <input onChange={onChangeInput} value={value} className={styles.root} placeholder="Пошук піцци..."></input>
    )
}

export default Search;