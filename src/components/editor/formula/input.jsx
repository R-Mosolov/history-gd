import React, { useState } from 'react';

export default function Input() {
  const [inputValue, setInputValue] = useState('E=mc^{2}');

  return (
    <input
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      inputValue={inputValue}
    />
  );
}
