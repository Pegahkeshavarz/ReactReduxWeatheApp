import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            term: ''
        }
    }

    onInputChange(e){
        this.setState({term: e.target.value})
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input placeholder="get a 5 days forecast in your favorite city"
                className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange.bind(this)}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn tn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}



function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar)
