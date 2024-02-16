import React, { useCallback, useState } from 'react';
import styles from './Search.module.scss'
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
const Search:React.FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    
    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }
    // eslint-disable-next-line
    const updateSearchValue = useCallback(
        debounce((str:string) => {
            dispatch(setSearchValue(str))
        }, 1000), [],
    );

    return (
        <input onChange={onChangeInput} value={value} className={styles.root} placeholder="Пошук піцци..."></input>
    )
}

export default Search;