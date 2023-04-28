import { useRef } from 'react';

function ReferencingValuewithRefs() {
     let ref=useRef(0);

     const handleClick =()=>{
        ref.current=ref.current +  1 ;
        alert(` you Cliked ${ref.current} times`)
     }
  return (
    <div><button onClick={handleClick}> Click Me </button> </div>
  )
}

export default ReferencingValuewithRefs;