import React from 'react';
import "./css/SearchBook.css"
import { useState,useEffect } from 'react'
import BooksItems from './BooksItems';


export default function SearchBook(props) {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("name")
    const [books, setBooks] = useState([])
    const [page,setPage]=useState(1)
    const [formSubmit,setFormSubmit]=useState(false)

    const fetchBooks= async ()=>{
        let url=""
        
        if(formSubmit==true){
            props.setProgress(10)
            url =`https://www.anapioficeandfire.com/api/books?${search}=${query}&page=${page}&pageSize=9`
            props.setProgress(30)
            let fetchData = await fetch(url);
            let data = await fetchData.json();
            props.setProgress(60)
            setBooks(data)
            props.setProgress(100)
          
        }else{
            props.setProgress(10)
            url = "https://www.anapioficeandfire.com/api/books?page=1&pageSize=3"
            props.setProgress(30)
            let fetchData = await fetch(url);
            let data = await fetchData.json();
            props.setProgress(60)
            setBooks(data)
            props.setProgress(100)
        }
    }
    useEffect(()=>{
        fetchBooks()
    },[])

    const onChangeSearch = (event) => {
        setFormSubmit(false)
        setSearch(event.target.value)
    }
    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }
    const onSubmitForm = async (event) => {
        event.preventDefault(); 
        setFormSubmit(true)
        fetchBooks()
    }

    const prevPage=()=>{
        setPage(page-1)
        setFormSubmit(true)
        fetchBooks()
    }
    const nextPage=()=>{
        setPage(page+1)
        setFormSubmit(true)
        fetchBooks(true)
    }


    return (
        <>
            <div className="container text-center my-5">

                <h1 className='mb-4' style={{ color: "#6C63FF" }}>Get More Info about your Favorite Book</h1>

                <form onSubmit={onSubmitForm}  className='my-5'>
                    <div className="searchBar" >
                        <select name="toSearch" id="toSearch" onChange={onChangeSearch} value={search} className='px-2'>
                            <option value="name">Book</option>
                            <option value="authors">Authors</option>
                            <option value="publisher">Publisher</option>
                        </select>

                        <input className='w-75 py-3' type="text" placeholder='eg:Game of Thrones' value={query} onChange={onChangeQuery} />
                        <button type="submit" className="btn btn-primary p-3"><i className="fas fa-search"></i></button>
                    </div>
                </form>

                <div className="container my-5">
                    <div className="row">
                        {books.map((book) => {
                            return <div className="col-lg-4 mb-5" key={book.url}>
                                <BooksItems name={book.name} authors={book.authors} numberOfPages={book.numberOfPages} publisher={book.publisher} country={book.country} mediaType={book.mediaType} />
                            </div>
                        })}
                    </div>
                </div>
                {formSubmit && 
                    <div className="d-flex justify-content-between">
                    <button disabled={page<=1} type ="button"  className="btn btn-dark" onClick={prevPage}>&larr; Previous </button>
                    <button type ="button" className="btn btn-dark" onClick={nextPage}>Next &rarr; </button>
                </div>
                }
                

            </div>
        </>)
}
