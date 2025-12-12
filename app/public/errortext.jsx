import React, {useState} from 'react';

export default function ErrorText() {
    const [isFocused, setIsFocused] = useState(false);

    const inputStyle = {
        border: isFocused ? '2px solid #f87171' : '1px solid #d1d5db',
        backgroundColor: isFocused ? '#fef2f2' : 'transparent',
    }


  return (
    <input
        type="text"
        style={inputStyle}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Focus State Example"
    />
  );
}