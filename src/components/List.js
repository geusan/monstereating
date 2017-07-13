import React from 'react';
import { Item, Write } from 'components';

class List extends React.Component {
    
    
    showPost(arr){
        if( arr == null || arr.length < 1) return null;
        return arr.map((item,i) =>
            <Item 
            deleteMethod={this.props.deleteMethod}
            updateMethod={this.props.updateMethod}
            field={item} 
            key={"item-" + i} 
            unmountMe={this.handleRemove} />
        );
    }
    
    handleRemove(){
        this.setState({
            renderChild: false
        });
    }
    
    
    
    render() {
        const postArr = this.showPost(this.props.posts);
        
        return (
            <div>
                {postArr}
                <Write onPost={this.props.createMethod}/>
            </div>
        );
    }
}

List.propTypes = {
    posts: React.PropTypes.array,
    createMethod: React.PropTypes.func,
    updateMethod: React.PropTypes.func,
    deleteMethod: React.PropTypes.func
    
}

List.defaultProps = {
    posts: [],
    createMethod: () => { console.log("createMethod is not defined")},
    updateMethod: () => { console.log("updateMethod is not defined")},
    deleteMethod: () => { console.log("deleteMethod is not defined")}
}


export default List;