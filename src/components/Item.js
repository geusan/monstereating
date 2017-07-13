import React from 'react';

class Item extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            is_editable: false,
            title: this.props.field.title,
            content: this.props.field.content
        }
        this.handleEditable = this.handleEditable.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }
    
    handleEditable(){
        this.setState({
           is_editable: !this.state.is_editable 
        });
    }
    
    handleTitleChange(e){
        this.setState({
           title: e.target.textContent
        });
    }
    
    handleContentChange(e){
        this.setState({
           content: e.target.textContent
        });
    }
    
    handleUpdate(e){
        const id = e.target.dataset.id;
        const title = this.state.title;
        const content = this.state.content;
        
        this.props.updateMethod(id, title, content).then(
            () => {
                console.log("update item");
                this.props.field.content = content;
                this.props.field.title = title;
            });
    }
    
    handleDelete(e){
        const id = e.target.dataset.id;
        this.props.deleteMethod(id).then(
            () => {
                console.log("delete item");
                this.props.unmountMe();        
            });
    }
    
    
    render() {
        
        const editBox = (
            <div className="card-content row">
                <div className="input-field">
                    <input onChange={(e) => this.handleTitleChange(e)} placeholder="title" name="title" id="title" value={this.props.field.title} />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="input-field">
                    <input onChange={(e) => this.handleContentChange(e)} placeholder="content" name="content" id="content" value={this.props.field.content} />
                    <label htmlFor="title">Title</label>
                </div>
            </div>  
        );
        
        const normalBox = (
            <div className="card-content row">
                <div className="card-title">{this.props.field.title}</div>
                <p>{this.props.field.content}</p>
            </div>  
        );
        
        const editBtn = (
            <div className="card-action">
                <a href="#!" onClick={this.handleEditable}>취소</a>
                <a href="#!" onClick={this.handleUpdate}>수정</a>
                <a href="#!" onClick={this.handleDelete}>삭제</a>
            </div>
        );
            
        const normalBtn = (
            <div className="card-action">
                <a href="#!" onClick={this.handleEditable}>수정</a>
            </div>        
        );
        
        return (
            <div className="col s12 m6">
                <div className="card hoverable">
                    {this.state.is_editable ? editBox:normalBox}
                    {this.state.is_editable ? editBtn:normalBtn}
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    field: React.PropTypes.object,
    updateMethod: React.PropTypes.func,
    deleteMethod: React.PropTypes.func,
    unmountMe: React.PropTypes.func
}

Item.defaultProps = {
    field: {
        title: "newTitle",
        content: "newContent",
        created: Date.now()
    },
    updateMethod: () => { console.log("updateMethod is not defined")},
    deleteMethod: () => { console.log("deleteMethod is not defined")},
    unmountMe: () => { console.log("unmountMe is not defined")}
}

export default Item;