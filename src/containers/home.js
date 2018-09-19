import React,{Component} from 'react';
import { connect } from 'react-redux';


class Home extends Component {

    
    render(){
        return(
            <div>
               <div className="jumbotron">
                    <h1>Mobile Phone Wiki</h1>
                    <div className="col-md-12">
                        <img src="../images/home.jpg" className="img-thumbnail"/>

                    </div>
                </div>
            </div>
        )
        
    }
    
}

function mapStateToProps(state){
    console.log( state);

}
export default connect(mapStateToProps,null)(Home);