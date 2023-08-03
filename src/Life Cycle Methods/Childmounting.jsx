import React, { Component } from 'react'

 class ChildMounting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"tani"
        }
        console.log(" ChildMounting constructor called");
    }
    static getDerivedStateFromProps(props,state){
        console.log(" ChildMounting getDerivedStateFromProps called");
        return null
    }
    componentDidMount(){
        console.log(" ChildMountingcomponentDidMount called");

    }
    shouldComponentUpdate(){
        console.log(" Child shouldComponentUpdate called");
  return true
  
      }
      getSnapshotBeforeUpdate(preProps,preState){
          console.log(" Child getSnapshotBeforeUpdate called");
      return null
      }
      componentDidUpdate(){
        console.log(" ChildcomponentDidUpdate called");
  
      }
    render() {
    console.log(" ChildMountingrenderMethod  called");

    return (
      <div> ChildMounting Mounting Methods</div>
    )
  }
}

export default ChildMounting;