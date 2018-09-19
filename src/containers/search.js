import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCars} from '../actions';
import {getAllPhones} from '../actions';

import { bindActionCreators } from 'redux';

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }

    searchCar =(event) =>{
        event.preventDefault();
        this.props.getCars(this.state.keyword);
        let outres = this.props.getCars()
    }

    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value
        })
    }

    componentDidMount(){
        let outres = this.props.getAllPhones()
    }

    render(){
        return(

            <div className="main_search">
               <form onSubmit={this.searchCar}>
                 
                </form>
            </div>
        )
    }
}

//mapStateToProps
// bind action in props action : getCars
function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars, getAllPhones},dispatch);
}
export default connect(null,mapDispatchToProps) (Search);