/* global Materialize */
/* global $ */
import React from 'react';
import { FoodWrite } from 'components';

class FoodList extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
       
    }
    
    showList(dataArr){
        if(typeof dataArr === "undefined" || dataArr.length === 0 ) return "";
        return dataArr.map((item,index) => 
            <FoodWrite 
                key={item._id}
                name={item.name}
                ingredient={item.ingredient}
                readMode={true}
            />
        );
    }
    
    render() {
        
        const show = this.showList(this.props.items);
        
        return (
            <div>
                {show}
            </div>
        )
    }
}

FoodList.PropTypes = {
    items: React.PropTypes.array
}

FoodList.defaultProps = {
    items: []
}

export default FoodList;