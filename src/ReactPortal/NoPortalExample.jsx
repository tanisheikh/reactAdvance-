import { useState } from "react";
import ModalContent from './ModalContent'

function NoPortalExample() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModel(true)}>
        Show modal without a portal
      </button>
      {showModel && ( <ModalContent onClose={()=>{setShowModel(false)}}/>)}
        </div>
  );
}

export default NoPortalExample;
