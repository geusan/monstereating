import React from 'react';
import { FoodWrite, FoodList } from 'components';
import { connect } from 'react-redux';
import {
    foodNewRequest,
    foodReadRequest
} from 'actions/food';

class Food extends React.Component {
    
    constructor(props){
        super(props);
    
        
    }
    
    componentDidMount(){
        this.props.foodReadRequest().then(() => {
           console.log("items: "+ this.props.items)
        });
    }
    
    render() {
        return (
            <div className="row">
                <FoodList 
                    items={this.props.foods}
                    />
                <FoodWrite
                    onPost={this.props.foodNewRequest}
                    />
            </div>
        )
    }
}

Food.PropTypes = {
}

Food.defaultProps = {
}

const mapStateToProps = (state) => {
    return {
        post: state.food.post,
        foods: state.food.list.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        foodNewRequest: (name, ingredient) => {
            return dispatch(foodNewRequest(name, ingredient));
        },
        foodReadRequest: () => {
            return dispatch(foodReadRequest());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Food);