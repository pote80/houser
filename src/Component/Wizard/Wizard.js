import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Wizard extends Component {
    constructor(props){
        super(props)

        this.state = {
            property_name: '',
            address: '',
            city: '',
            what_state: '',
            zip: 0,
        }
         this.handleAddressChange = this.handleAddressChange.bind(this);
         this.handleNameChange = this.handleNameChange.bind(this);
         this.handleCityChange = this.handleCityChange.bind(this);
         this.handleWhatStateChange = this.handleWhatStateChange.bind(this);
         this.handleZipChange = this.handleZipChange.bind(this);
    }

    handleNameChange = (e) =>{
        this.setState({property_name: e.target.value})
    }

    handleAddressChange = (e) =>{
        this.setState({address: e.target.value})
    }

    handleCityChange = (e) =>{
        this.setState({city: e.target.value})
    }

    handleWhatStateChange = (e) =>{
        this.setState({what_state: e.target.value})
    }

    handleZipChange = (e) =>{
        this.setState({zip: e.target.value})
    }

    addNewHouse = () =>{
        axios.post('/api/house',)
        .then()
    }

    render() {
        return (
                <div>
                    <div>Wizard</div>
                    <div><label> Property Name: <input value = {this.state.property_name} onChange={this.handleNameChange}/></label></div>
                    <div><label> Address: <input value = {this.state.address} onChange={this.handleAddressChange}/></label></div>
                    <div><label> City: <input value = {this.state.city} onChange={this.handleCityChange}/></label></div>
                    <div><label> State: <input value = {this.state.what_state} onChange={this.handleWhatStateChange}/></label></div>
                    <div><label> Zip: <input type="number" value = {this.state.zip} onChange={this.handleZipChange}/></label></div>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
        )
    }
}