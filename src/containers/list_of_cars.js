import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListOfPhones extends Component {

    listOfPhones = ({list}) => {
        if(list){
            return list.map((phone)=>{
                var a  = phone.name.replace(/\s/g,'')
                console.log(a);
                 return(
                         <div className="card phone_main" id="card_phone" key={phone.id}>
                            <img className="card-img-top img-fluid" src={phone.cover} alt={phone.name}
                            className="phone_image"/>
                            <div className="card-body text-center">
                                <h4 className="card-title">{phone.name}</h4>
                                <p className="card-text">{phone.ram}RAM</p>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#'+a}>
                                    Show Details
                                </button>
                
                 
                                    <div className="modal fade" id={a}>
                                        <div className="modal-dialog">
                                        <div className="modal-content">
                                        
                                        
                                            <div className="modal-header">
                                            <h4 className="modal-title">{phone.name}</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            
                                        
                                            <div className="modal-body">
                                                <img src={phone.cover} id="model_image"/>
                                                <p>{phone.ram} RAM</p>
                                                <p>{phone.release_date}</p>
                                                <p>{phone.battery}</p>
                                                <p>{phone.screen_size}</p>
                                                <p>{phone.description}</p>
                                            </div>
                                            
                                        
                                            <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                            </div>
                                            
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                )
            })
        }
    }
    render(){
        return(
            <div>
                {this.listOfPhones(this.props.phones)}
            </div>
        )
        
    }
    
}

function mapStateToProps(state){
    console.log(">>>> phone "+ JSON.stringify(state));
    return{
        phones:state.phone
    }
}
export default connect(mapStateToProps,null)(ListOfPhones);
