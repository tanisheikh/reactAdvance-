import React, { Component } from 'react'

// const FRInput = React.forwardRef((props,inputRef) => {
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//     </div>
//   );
// });
// export default FRInput;

class FRInput extends Component {
  
  render() {
    return (
      <div > <input type="text" ref={this.props.inputRef} /></div>
    )
  }
}
export default  React.forwardRef((props,ref)=><FRInput inputRef={ref} {...props}/>)