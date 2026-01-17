import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface PageWrapperProps {
  // Made optional to fix TS errors where children are passed as nested elements but TS doesn't recognize them
  children?: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "premium" feel
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}