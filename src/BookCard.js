import React from 'react'
import './BookCard.css'


export default function BookCard(props) {
    return (

        <div className="bookcard">
            <img src={props.image} alt="" className="image"/>
            <div className="desc">
                
                <h2>{props.title}</h2>
                <h3>{props.author} </h3>
                <p>{props.published  === "0000" ? "No published data" : props.published}</p>
                <p>{props.description}</p>
                
            </div>
        </div>
    )
}
