import React from 'react';
import { motion } from 'framer-motion';

export default function ProCard({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`card pro-card ${className}`}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
