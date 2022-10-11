import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Index.css'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Krittesh',
            city:'Nagpur',
            age:22,
        }
        this.setDetails = this.setDetails.bind(this);
    }
    setDetails(){
        if(this.state.name === 'Amit'){
            this.setState({name:'Krittesh',city:'Nagpur',age: 22})
        }
        else{
            this.setState({name:'Amit', city:'Bankok',age:21})
        }
    }
    componentDidUpdate(){
        if(this.state.name === 'Amit'){
            console.log('My Friend')
        }
        else{
            console.log('Me')
        }
    }
   /* componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }*/

    render() {
        return (
            <div className='out_block'>
            <img className='Pic' src={this.props.logo} alt='Image'/>
            <h2>{this.props.text}</h2>
            <div>Name :- {this.state.name}</div>
            <div>City :- {this.state.city}</div>
            <div>Age :- {this.state.age}</div>
            <button onClick={this.setDetails}>Update Data</button>
            </div>
        );
    }
}
Index.propTypes = {

};

export default Index;