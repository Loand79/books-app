import React, { Component } from 'react'

export default class Api extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error: null,
             isLoaded: false,
             items: [],
        }
    }
    componentDidMount(){
        fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .catch(
            (res) => res.json(),
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            },

        )
    }
    render() {
        const { error, isLoaded, items} = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.strDrink}    
                        </li>
                    ))}
                </ul>
            )
        }
    }
}
