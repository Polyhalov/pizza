import { useCallback, useState } from 'react';
import styles from './Search.module.scss'
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    
    const onChangeInput = event => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }
    // eslint-disable-next-line
    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 1000), [],
    );

    return (
        <input onChange={onChangeInput} value={value} className={styles.root} placeholder="Пошук піцци..."></input>
    )
}

export default Search;