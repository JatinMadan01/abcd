
  const generateLoremIpsum = () => {
    const numParagraphs = parseInt(document.getElementById('paragraphs').value);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    for (let i = 0; i < numParagraphs; i++) {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
      outputDiv.appendChild(paragraph);
    }
  };

  document.getElementById('generate').addEventListener('click', generateLoremIpsum);
  import React, { useState } from 'react';

const LoremGenerator = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [generatedText, setGeneratedText] = useState('');

  const generateLoremIpsum = () => {
    fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${numParagraphs}`)
      .then(response => response.json())
      .then(data => setGeneratedText(data.join('\n\n')))
      .catch(error => console.error('Error fetching Lorem Ipsum:', error));
  };

  return (
    <div>
      <h1>Lorem Generator</h1>
      <label htmlFor="numParagraphs">Number of Paragraphs:</label>
      <input
        type="number"
        id="numParagraphs"
        value={numParagraphs}
        onChange={e => setNumParagraphs(parseInt(e.target.value))}
        min={1}
        max={10}
      />
      <button onClick={generateLoremIpsum}>Generate Lorem Ipsum</button>
      <div>
        <textarea
          rows={10}
          cols={50}
          value={generatedText}
          readOnly
          style={{ marginTop: '10px' }}
        />
      </div>
    </div>
  );
};

export default LoremGenerator;

