import React, { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const [percentage, setPercentage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setPercentage(value.toString());
  };

  return (
    <div>
      <ProgressBar percentage={parseInt(percentage) || 0} />
      <input
        type="number"
        value={percentage}
        onChange={handleInputChange}
        placeholder="Provide percentage input"
        style={{ marginTop: '20px' }}
      />
    </div>
  );
}

export default App;
