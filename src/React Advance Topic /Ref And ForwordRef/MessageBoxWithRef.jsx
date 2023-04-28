import { useState, useRef } from "react";

function MessageBoxWithRef() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef(null);

  const handleSend = () => {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert("send!!!");
      setIsSending(false);
    }, 3000);
  };
  const handleUndo = () => {
    setIsSending(false);
    clearTimeout(timeoutRef.current);
    alert(" undo!!!");
    setText("")
  };
  return (
    <div>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? "....sending" : "send"}
      </button>
      {isSending && <button onClick={handleUndo}>undo </button>}
    </div>
  );
}

export default MessageBoxWithRef;
