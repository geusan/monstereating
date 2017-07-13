import React from 'react';
import { List } from 'components';
import { connect } from 'react-redux';
import {
    postCreateRequest,
    postReadRequest,
    postUpdateRequest,
    postDeleteRequest
} from 'actions/post';

class Home extends React.Component {
    
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.postReadRequest().then(
            () => {
               console.log("get post : " + this.props.posts); 
            });
    }
    
    componentDidUpdate(){
        if(this.props.pstatus.success){
            this.props.postReadRequest()
            this.props.pstatus.success = false;
        }
    }
    
    createMethod(title, content){
        this.props.postCreateRequest(title, content).then(
            () => {
               console.log("create " + title + "//" + content);
            });
    }
    
    updateMethod(id,title,content){
        this.props.postUpdateRequest(id, title, content).then(
            () => {
               console.log("update " + id + "//" + title + "//" + content); 
            });
    }
    
    deleteMethod(id){
        this.props.postDeleteRequest(id).then(
            () => {
               console.log("delete " + id); 
            });
    }
    
    render() {
        return (
            <div>
                <List 
                posts={this.props.posts} 
                updateMethod={this.updateMethod} 
                createMethod={this.createMethod} 
                deleteMethod={this.deleteMethod} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.list.data,
        pstatus: state.post.post.status    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postCreateRequest: (title, content) => {
            return dispatch(postCreateRequest(title, content));
        },
        postReadRequest: () => {
            return dispatch(postReadRequest());
        },
        postUpdateRequest: (id, title, content) => {
            return dispatch(postUpdateRequest(id, title, content));
        },
        postDeleteRequest: (id) => {
            return dispatch(postDeleteRequest(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);