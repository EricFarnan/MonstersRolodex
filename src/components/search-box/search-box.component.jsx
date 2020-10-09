import React from 'react'
import './search-box.styles.css'

// functional component instead of a class because we dont care about state or life-cycle methods
export const SearchBox = ({placeholder, handleChange}) => (
    <input className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)