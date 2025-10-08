import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';
import styles from './DesktopIcon.module.css';

interface DesktopIconProps {
  icon: string;
  label: string;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({
  icon,
  label,
  onClick,
  selected = false,
  className,
}) => {
  return (
    <motion.div
      className={cn(styles.desktopIcon, selected && styles.selected, className)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={icon} 
        alt={label}
        className={styles.iconImage}
        draggable={false}
      />
      <span className={styles.iconText}>
        {label}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;