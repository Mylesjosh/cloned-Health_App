import React from 'react';
import { motion } from 'framer-motion';

export default function ProMessage({ children }) {
  return (
    <motion.div className="message pro-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <i className="fa-solid fa-circle-info" style={{color:'#1976d2',marginRight:8}}></i>
      {children}
    </motion.div>
  );
}
