import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name:""
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, PrevState) {
    if(PrevState.count !== this.state.count){
        console.log("Updating document Title")
        document.title = `Clicked ${this.state.count} times`;
    }
   
  }
  
  render() {
    const onClickHandler =(e)=>{
this.setState({
    name:e.target.value
})
    }
    return (
      <div>
        <input type="text" onChange={onClickHandler}/>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter;
