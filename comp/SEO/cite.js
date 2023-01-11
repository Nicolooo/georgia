import React, { useState, useRef } from 'react'

const Cite = ({cite2}) => {
    
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div className="cite-wrapper">
        <h2 className="cite-h2">ციტირება/Cite</h2>
      <form>
        <textarea
          ref={textAreaRef}
          className="cite-textarea"
          value={cite2}
        />
      </form>
      <div className="cite-copy">
          <button onClick={copyToClipboard} className='cite-button'>Copy/კოპირება</button> 
          <h2 className='cite-h3'>{copySuccess}</h2>
        </div>
    </div>
  )
}

export default Cite