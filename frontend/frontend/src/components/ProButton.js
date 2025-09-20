import React from 'react';
import { motion } from 'framer-motion';

export default function ProButton({ children, onClick, disabled, type = 'button', className = '', ...props }) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.04 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`parse-btn pro-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </motion.button>
  );
}
