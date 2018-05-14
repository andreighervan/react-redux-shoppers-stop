import React, {Component} from 'react';
import {connect} from 'react-redux';

class Grocery extends Component{
    render(){
        console.log("this.props ",this.props);
        return(
            <div className="col-md-4">
            <h2 className="text-center">Grocery Items</h2>
                <ul className="list-group">

                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return{

    }
}

export default connect(mapStateToProps,null)(Grocery);