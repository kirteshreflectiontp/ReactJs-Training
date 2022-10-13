import React, { useEffect, useRef, useState } from 'react'

const Search = () => {
    const [searchValue,setSearchValue] = useState('');
    const [searchResult,setSearchResult] = useState();
    const searchRef = useRef();
    const [searcherror,setSearchError] = useState();
    const SearchOutput = () => {
        if(searchRef.current.value === ''){
            searchRef.current.style.border = '1px solid red';
            setSearchError('Please Enter Profile Name')
        }
        else{
            searchRef.current.style.border = '1px solid darkgrey';
            setSearchError('')
        }
    }
    useEffect(() => {
        if(searchValue.length > 0){
            fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((result)=>{
                var filteredResult = result.filter(item => item.name.includes(searchValue));
                setSearchResult(filteredResult);
            })
            .catch((error) => {
                console.log('error',error)
            })
        }
    })
  return (
    <>
    <input ref={searchRef} value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className='search_input' type="search" placeholder="Search Users by Name" /><i class="fa-solid fa-magnifying-glass search_icon" onClick={SearchOutput} ></i>
    <div className='searchResult'>
        {searcherror}
        {searchResult?.map((item) =>{
            return <div>{item.name}</div>
        })}
    </div>
    </>
  )
}

export default Search