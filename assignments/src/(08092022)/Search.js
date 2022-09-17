import React, { useEffect, useState } from 'react'

const Search = () => {
    const [searchValue,setSearchValue] = useState('');
    const [searchResult,setSearchResult] = useState();
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
    <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className='search_input' type="text" placeholder="Search Users by Name" /><i class="fa-solid fa-magnifying-glass search_icon"></i>
    <div className='searchResult'>
        {searchResult?.map((item) =>{
            return <div>{item.name}</div>
        })}
    </div>
    </>
  )
}

export default Search