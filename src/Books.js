import React, { Component } from 'react';
import SearchArea from './SearchArea';
import BookCard from './BookCard';


export default class Books extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             books: [],
             searchFild: '',
             API_BOOKS: "https://www.googleapis.com/books/v1/volumes?q=",
             orderBy: "relevance",
             total: "0",
             filter: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.searchBook = this.searchBook.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.cleanData = this.cleanData.bind(this);
        
    }
    
    handleChange(event) {
        this.setState({
            searchFild: event.target.value
        })
    }
   
    searchBook(event) {
        event.preventDefault();
        //console.log(fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchFild}&orderBy=${this.state.orderBy}&key=AIzaSyDkUSMmubBOpIDh3fmjlyAqMtBXSn4NJ3A`));
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchFild}&key=AIzaSyDkUSMmubBOpIDh3fmjlyAqMtBXSn4NJ3A`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    books: this.cleanData(json),
                    total: json.totalItems
                })
                
            })
            
        
    }

    handleSort(event) {    
        event.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchFild}&orderBy=${event.target.value}&key=AIzaSyDkUSMmubBOpIDh3fmjlyAqMtBXSn4NJ3A`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    books: this.cleanData(json),
                    total: json.totalItems,
                    orderBy: event.target.value
                })
                
            })
    }
    
    cleanData(json) {
        const cleanedData = json.items.map(book => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false ) {
                book.volumeInfo['publishedDate'] = '0000';
            }
            else if (book.volumeInfo.hasOwnProperty('imageLinks') === false ) {
                book.volumeInfo['imageLinks'] = {thumbnail: 'https://socialkids.ca/activities/uploads/noimage.png'}
            }
            return book;
        })
        return cleanedData;
    }
    
    render() {
        
        const {books, total} = this.state;
    
        return (
            
            <div>
                <h1>Found {total} results</h1>
                <SearchArea searchBook={this.searchBook} handleChange={this.handleChange} handleSort={this.handleSort} handleFilter={this.handleFilter}/>
                <div>
                    {books.map((book, index) => (
                        <BookCard 
                            key={index}
                             image={book.volumeInfo.imageLinks.thumbnail}
                             title={book.volumeInfo.title}
                             author={book.volumeInfo.authors}
                             published={book.volumeInfo.publishedDate}
                             description={book.volumeInfo.description}                   
                        />
                    ))}
                </div>
            </div>
        )
    }
}
