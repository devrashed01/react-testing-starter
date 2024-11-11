import { useEffect, useRef, useState } from "react";
import TermsAndConditions from "../components/TermsAndConditions";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PlaygroundPage = () => {
  const [quillRef, setQuillRef] = useState(null);
  let reactQuillRef = useRef(null);

  useEffect(() => {
    if (typeof reactQuillRef.getEditor !== "function") return;
    setQuillRef(reactQuillRef.getEditor());
  }, [reactQuillRef, setQuillRef]);

  const insertText = () => {
    const range = quillRef.getSelection();
    quillRef.insertText(range.index, "Hello, World!");
  };

  const checkCharacterCount = (event) => {
    // prevent if control and v is pressed
    console.log(event.ctrlKey, event.key);
    if (event.ctrlKey && event.key === "v") {
      event.preventDefault();
    }
  };

  return (
    <div>
      <ReactQuill
        ref={(el) => {
          reactQuillRef = el;
        }}
        value="hi there"
        onChange={checkCharacterCount}
        theme={"snow"}
      />
      <button onClick={insertText}>Insert Text</button>
    </div>
  );
};

export default PlaygroundPage;
