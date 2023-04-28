import React from "react";

function ModalContent({onClose}) {
  return (
    <div>
      <div>I'm a modal dialog</div>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ModalContent;
