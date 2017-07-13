import React from 'react';


class Write extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: this.props.field.title,
            content: this.props.field.content
        }
        this.handleCreate = this.handleCreate.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
    }
    
    handleCreate(){
        const title = this.state.title;
        const content = this.state.content;
        
        this.props.onPost(title, content).then(
            () => {
               console.log("itme create");
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
    
  
    render() {
    
        return (
            <div className="col s12 m6">
                <div className="card hoverable">
                    <div className="card-content row">
                        <div className="input-field col s12">
                            <input placeholder="title" name="title" id="title-c" value={this.props.field.title} />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s12">
                            <input placeholder="content" name="content" id="content-c" value={this.props.field.content} />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>  
                    <div className="card-action">
                        <a href="#!" className="btn btn-small grey darken-4" onClick={this.handleCreate}>등록</a>
                    </div> 
                </div>
            </div>
        );
    }
}

Write.propTypes = {
    onPost: React.PropTypes.func
}

Write.defaultProps = {
    onPost: (title, content) => { console.error('post function is not define'); }
}

export default Write;