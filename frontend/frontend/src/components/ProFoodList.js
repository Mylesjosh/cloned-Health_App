import React from 'react';
import { motion } from 'framer-motion';

export default function ProFoodList({ items = [], calories }) {
  if (!items.length) return null;
  return (
    <motion.div style={{ marginTop: 16, textAlign: 'left' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
  <strong style={{ color: '#1976d2' }}><i className="fa-solid fa-bowl-food" style={{color:'#1976d2',marginRight:6}}></i> Detected foods:</strong>
      <ul className="pro-food-list">
        {items.map((item, idx) => (
          <li key={item.item + '-' + idx} className="pro-food-item">
            <div>
              <strong><i className="fa-solid fa-apple-whole" style={{color:'#0d47a1',marginRight:4}}></i> {item.item}</strong> <span style={{color:'#888'}}>— {item.quantity}</span>
            </div>
            <div style={{ fontSize: '0.98rem', color: '#888' }}>
              <i className="fa-solid fa-fire" style={{color:'#e53935',marginRight:4}}></i> Total Calories: <span style={{color:'#e53935'}}>{item.total_calories}</span> | <i className="fa-solid fa-calendar-day" style={{color:'#1976d2',marginRight:4}}></i> Calories Eaten Today: <span style={{color:'#1976d2'}}>{item.calories_today}</span>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 8, fontWeight: 'bold', color: '#0d47a1', fontSize: '1.1rem' }}>
        <i className="fa-solid fa-calculator" style={{color:'#0d47a1',marginRight:4}}></i> Total Calories (all foods): <span style={{color:'#e53935'}}>{calories}</span>
      </div>
    </motion.div>
  );
}
