import React from 'react';

class FoodWrite extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            ingredient: props.ingredient,
            readMode: props.readMode
        }
        this.handleNewFood = this.handleNewFood.bind(this);
    }
    
    componentDidMount(){
    }
    
    handleNameChange(e){
        // Name 값이 바뀌면 갱신
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }
    
    handleIngredientChange(e){
        // Ingredient 값이 바뀌면 갱신
        console.log(e.target.value)
        this.setState({
            ingredient: e.target.value
        })
    }
    
    handleNewFood(){
        //서버로 값을 전송
        console.log("post")
        this.props.onPost(this.state.name, this.state.ingredient)
        .then(() => {
            console.log("we post!")
            this.setState({
                name: "",
                ingredient: ""
            })
        })
    }
    
    render() {
        const phName = this.state.readMode ? "":"name";
        const phIngredient = this.state.readMode ? "":"ingredient";
        const ableInput = (
                <input 
                    value={this.state.name} 
                    placeholder={phName} 
                    name="name" 
                    id="name" 
                    type="text" 
                    className="validate" 
                    onChange={(e) => this.handleNameChange(e)}/>
            )
        const disableInput = (
                <input
                        value={this.state.name} 
                        placeholder={phName} 
                        name="name" 
                        id="name" 
                        type="text" 
                        onChange={(e) => this.handleNameChange(e)}/>
            )
        
        const ableTextArea = (
                <textarea 
                    className="materialize-textarea validate" 
                    placeholder={phIngredient}
                    name="ingredient" 
                    id="ingredient"
                    value={this.state.ingredient}
                    onChange={(e) => this.handleIngredientChange(e)}></textarea>
            )
        
        const disableTextArea = (
                <textarea
                    className="materialize-textarea" 
                    placeholder={phIngredient}
                    name="ingredient" 
                    id="ingredient"
                    value={this.state.ingredient}
                    onChange={(e) => this.handleIngredientChange(e)}></textarea>
            )
            
        const button = (
            <a 
                href="#!" 
                className="btn btn-small grey darken-4" 
                onClick={this.handleNewFood}>등록</a>
            )
        return (
            <div className="col s3">
                <div className="card hoverable">
                    <div className="card-content row">
                    
                        <div className="input-field col s12">
                            {this.state.readMode  ? disableInput : ableInput}
                            <label htmlFor="name">{this.state.readMode  ? "" : "Name"}</label>
                        </div>
                        <div className="input-field col s12">
                            {this.state.readMode  ? disableTextArea : ableTextArea}
                            <label htmlFor="ingredient">{this.state.readMode  ? "" : "Ingredient"}</label>
                        </div>
                    </div>  
                    <div className="card-action">
                        {this.state.readMode  ? "" : button}
                    </div> 
                </div>
            </div>
        )
    }
}

FoodWrite.PropTypes = {
    onPost: React.PropTypes.func,
    readMode: React.PropTypes.bool
}

FoodWrite.defaultProps = {
    onPost: (name, ingredient) => { console.log("onPost is undefined") },
    readMode: false
}

export default FoodWrite;