import React, { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Search.css";
import Metadata from '../layout/MetaData';

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    console.log(keyword);
    e.preventDefault();
    if(keyword.trim()){
        navigate(`/products/${keyword}`)
    }else {
        navigate(`/products`)
    }
  }

  return (
    <Fragment>
        <Metadata title={`Search A Product - - ECOMMERCE`}/>
        <form className='searchBox' onSubmit={searchSubmitHandler}>
            <input 
                type = "text" 
                placeholder='Search A Product..'
                onChange={(e) => setKeyword(e.target.value)}
            />
            <input type="submit" value = "Search"/>
        </form>
    </Fragment>
  )
}

export default Search