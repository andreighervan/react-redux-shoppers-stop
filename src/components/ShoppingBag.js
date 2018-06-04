import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGroceryById,removeGroceryById} from '../actions';

class ShoppingBag extends Component {
    render() {
        console.log("Shopping bag props", this.props);
        return (
            <div className="col-md-4">
                <h1 className="text-center">ShoppingBag</h1>
                <ul className="list-group">
                    {this.props.shoppingBag.map((item) => {
                        return <li onClick={() => this.props.addGroceryById(item.id)} className="list-group-item"
                                   key={item.id}><b>{item.name}</b> <label className="label label-info">
                            ${item.cost}</label> - <label className="label label-primary">{item.weight}mg</label> <label
                            className="label label-warning">{item.calories} kcal</label></li>
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps, {addGroceryById})(ShoppingBag);