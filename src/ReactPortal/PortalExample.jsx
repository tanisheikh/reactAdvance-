import { useState } from "react";
import ModalContent from './ModalContent';
import { createPortal } from 'react-dom';

function PortalExample() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModel(true)}>
        Show modal using  a portal
      </button>
      {console.log("showModel",showModel)}
      {showModel && createPortal( <ModalContent onClose={()=>setShowModel(false)}/>,document.body)}
        </div>
  );
}

export default PortalExample;
