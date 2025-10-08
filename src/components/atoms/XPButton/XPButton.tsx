import React from 'react';
import { cn } from '../../../utils/cn';
import styles from './XPButton.module.css';

interface XPButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'close' | 'minimize' | 'maximize';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const XPButton: React.FC<XPButtonProps> = ({ 
  variant = 'default', 
  size = 'md', 
  className,
  children,
  ...props 
}) => {
  const getButtonClasses = () => {
    const baseClass = styles.button;
    const variantClass = variant === 'close' ? styles.closeButton : 
                        variant === 'minimize' || variant === 'maximize' ? styles.windowControl : '';
    const sizeClass = size === 'sm' ? styles.small : size === 'lg' ? styles.large : '';
    
    return cn(baseClass, variantClass, sizeClass, className);
  };

  return (
    <button
      className={getButtonClasses()}
      {...props}
    >
      {children}
    </button>
  );
};

export default XPButton;