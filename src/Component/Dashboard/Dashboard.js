import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state={
            houses: []
        }
    }
    componentDidMount(){
        axios.get('/api/house')
        .then(res => this.setState({ houses: res.data }))
    }
    render() {
        const house = this.state.houses
        return (
                <div>
                    <div>Dashboard</div>
                    <div>
                        <ul>
                    {house.map(house=> {
                        console.log(house)
                     return <House house={house}/>
                    })}
                    </ul>
                    </div>
                    
                    <Link to='/wizard'><button>Add New Property</button></Link>
                </div>
        )
    }
}