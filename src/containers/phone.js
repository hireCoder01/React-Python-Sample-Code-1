import React,{ Component } from 'react';
import {connect} from 'react-redux';
import { phoneDetail } from '../actions';
import { bindActionCreators } from 'redux';



class Phone extends Component{

    componentDidMount(){
        this.props.phoneDetail(this.props.match.params.name)
    }
    renderDetailsOfPhone = ({phone}) => {
         if(phone){
             return phone.map((item)=>{
                 return(
                    <div key={item.id} className="media border p-3">
                    <h1>hiii1</h1>
                        <img src={item.cover} alt={item[0].name} />
                        <div className="media-body">
                        <h1>{item.name}</h1>
                        <h2><i>{item.release_date}</i></h2>
                        <p>{item.ram} RAM</p>    
                        <p>{item.battery}</p> 
                        <p>{item.screen_size}inch</p>
                        <p>{item.description}</p> 
                        </div>
                        <button className="btn btn-dark"> Back </button>
                    </div>
                 )
                 
             })
         }

     }

    render(){
        return(
            <div>
                {this.renderDetailsOfPhone(this.props.phoneD)}
                <h1>{this.props.phoneD.name}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(">>>>>detail "+JSON.stringify(state));
    return{
        phoneD:state.phone
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({phoneDetail},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Phone);
