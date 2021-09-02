import React from 'react'

export default function SearchArea(props) {
    return (
        <div>
            <form action="" onSubmit={props.searchBook}>
                <input type="text" onChange={props.handleChange}/>
                <button type="submit">Search</button>

                <select defaultValue="All" onChange={props.handleFilter}>
                    <option value="all">All</option>
                    <option value="art">Art</option>
                    <option value="biography">Biography</option>
                    <option value="copmuters">Computers</option>
                    <option value="history">History</option>
                    <option value="medical">Medical</option>
                    <option value="poetry">Poetry</option>
                </select>
                <button>Load more...</button>
            
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">Sort</option>
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>

            </form>
        </div>
    )
}
