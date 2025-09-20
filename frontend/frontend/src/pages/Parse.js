import React, { useState } from 'react';
import ProButton from '../components/ProButton';
import ProCard from '../components/ProCard';
import ProFoodList from '../components/ProFoodList';
import ProMessage from '../components/ProMessage';

const NIGERIAN_FOODS = [
  'Eba', 'Egusi Soup', 'Jollof Rice', 'Fried Rice', 'Yam', 'Pounded Yam',
  'Amala', 'Efo Riro', 'Moi Moi', 'Akara', 'Suya', 'Ofada Rice', 'Beans',
  'Plantain', 'Okra Soup', 'Ogbono Soup', 'Starch', 'Banga Soup', 'Nkwobi',
  'Pepper Soup', 'Oha Soup', 'Nsala Soup', 'Fufu', 'Ogi', 'Stew', 'Chicken',
  'Fish', 'Goat Meat', 'Beef', 'Ponmo', 'Snail', 'Semo', 'Tuwo', 'Gbegiri',
  'Ewedu', 'Ogbono', 'Ofe Akwu', 'Ofe Onugbu', 'Ofe Nsala', 'Ofe Oha', 'Ofe Egusi',
  // Add all backend foods for full sync
  'Starch', 'Banga Soup', 'Nkwobi', 'Pepper Soup', 'Oha Soup', 'Nsala Soup',
  'Fufu', 'Ogi', 'Stew', 'Chicken', 'Fish', 'Goat Meat', 'Beef', 'Ponmo', 'Snail',
  'Semo', 'Tuwo', 'Gbegiri', 'Ewedu', 'Ogbono', 'Ofe Akwu', 'Ofe Onugbu', 'Ofe Nsala',
  'Ofe Oha', 'Ofe Egusi'
];

export default function Parse() {
  const [foodLog, setFoodLog] = useState('');
  const [selectedFood, setSelectedFood] = useState('');
  const [message, setMessage] = useState('');
  const [calories, setCalories] = useState(null);
  const [parsedItems, setParsedItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleParse = async () => {
    setMessage('');
    setCalories(null);
    setParsedItems([]);
    setLoading(true);
    let log = foodLog;
    if (selectedFood) {
      log = selectedFood + (foodLog ? (', ' + foodLog) : '');
    }
    if (log.trim() === '') {
      setMessage('Please select or enter your food log first.');
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/parse-log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ foodLog: log }),
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
    <div className="parse-page">
      <ProCard>
        <h1 className="card-title pro-title">
          <i className="fa-solid fa-utensils" style={{ color: '#1976d2', marginRight: 10 }}></i>
          Parse Your Food Log
        </h1>
        <div className="food-selector-row">
          <select
            className="food-dropdown"
            value={selectedFood}
            onChange={e => setSelectedFood(e.target.value)}
          >
            <option value="">Select a Nigerian food...</option>
            {NIGERIAN_FOODS.map((food, idx) => (
              <option key={food + '-' + idx} value={food}>{food}</option>
            ))}
          </select>
          <span style={{margin: '0 10px', color: '#888'}}>or</span>
          <input
            className="food-input"
            type="text"
            placeholder="Type your own food..."
            value={foodLog}
            onChange={e => setFoodLog(e.target.value)}
            disabled={loading}
          />
        </div>
        <ProButton onClick={handleParse} disabled={loading}>
          {loading ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-magic-wand-sparkles"></i>} Parse
        </ProButton>
        {message && <ProMessage>{message}</ProMessage>}
        <ProFoodList items={parsedItems} calories={calories} />
      </ProCard>
    </div>
  );
}
