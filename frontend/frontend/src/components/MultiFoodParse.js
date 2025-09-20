import React, { useState } from 'react';
import ProButton from './ProButton';
import ProCard from './ProCard';
import ProFoodList from './ProFoodList';
import ProMessage from './ProMessage';

export default function MultiFoodParse() {
  const [foodLog, setFoodLog] = useState('');
  const [message, setMessage] = useState('');
  const [calories, setCalories] = useState(null);
  const [parsedItems, setParsedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleParse = async () => {
    setMessage('');
    setCalories(null);
    setParsedItems([]);
    setLoading(true);
    if (foodLog.trim() === '') {
      setMessage('Please enter your food combinations.');
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/parse-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ foodLog }),
      });
      const data = await response.json();
      if (!response.ok) {
        setMessage(data.error || 'Error parsing food log.');
      } else {
        setParsedItems(data.parsed_items);
        setCalories(data.total_calories);
        setMessage('Parsed successfully!');
      }
    } catch (err) {
      setMessage('Could not connect to backend.');
    }
    setLoading(false);
  };

  return (
    <ProCard>
      <h1 className="card-title pro-title">
        <i className="fa-solid fa-bowl-food" style={{ color: '#1976d2', marginRight: 10 }}></i>
        Parse Multiple Food Combinations
      </h1>
      <textarea
        value={foodLog}
        onChange={e => setFoodLog(e.target.value)}
        className="food-textarea pro-textarea"
        placeholder="E.g. 2 plates of jollof rice and 1 cup of efo riro, 1 piece of chicken..."
        disabled={loading}
        rows={4}
      />
      <ProButton onClick={handleParse} disabled={loading}>
        {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-magic-wand-sparkles"></i>} Parse
      </ProButton>
      {message && <ProMessage>{message}</ProMessage>}
      <ProFoodList items={parsedItems} calories={calories} />
    </ProCard>
  );
}
