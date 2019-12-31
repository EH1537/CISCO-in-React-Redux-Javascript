import React from 'react';
import * as input from '../constants/input.js';

const ConfigurationDisplay = (props) => {
  const handleSubmits = (e) => {
    e.preventDefault();
    props.createInterface();
  }
  function copyStringToClipboard (str) { //copy to clipboard found on the itnernetnet WHOOOOT
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
  }
  console.log(String(props.display))
  return (
    <div id="configDisplay">
      <p>{String(props.display)}</p>
      <button id='copyConfig' type='button' onClick={() => copyStringToClipboard(props.display)}>Copy Configuration</button>
    </div>
  )
}

export default ConfigurationDisplay;