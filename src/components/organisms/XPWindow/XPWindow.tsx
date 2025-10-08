import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { X, Minus, Square } from 'lucide-react';

import { cn } from '../../../utils/cn';

import { XPButton } from '../../atoms/XPButton';

import styles from './XPWindow.module.css';

interface XPWindowProps {

  title: string;

  icon?: string;

  isOpen: boolean;

  onClose: () => void;

  onMinimize?: () => void;

  onMaximize?: () => void;

  children: React.ReactNode;

  className?: string;

  width?: number;

  height?: number;

}

const XPWindow: React.FC<XPWindowProps> = ({

  title,

  icon,

  isOpen,

  onClose,

  onMinimize,

  onMaximize,

  children,

  className,

  width = 800,

  height = 600,

}) => {

  const handleOverlayClick = (e: React.MouseEvent) => {

    if (e.target === e.currentTarget && onMinimize) {

      onMinimize();

    }

  };

  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div

          className={styles.overlay}

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          onClick={handleOverlayClick}

        >

          <motion.div

            className={cn(styles.window, className)}

            style={{ width, height }}

            initial={{ scale: 0.8, opacity: 0 }}

            animate={{ scale: 1, opacity: 1 }}

            exit={{ scale: 0.8, opacity: 0 }}

            transition={{ type: "spring", damping: 20, stiffness: 300 }}

            onClick={(e) => e.stopPropagation()}

          >

            <div className={styles.titleBar}>

              <div className={styles.titleSection}>

                {icon && <img src={icon} alt="" className={styles.icon} />}

                <span className={styles.title}>{title}</span>

              </div>

              <div className={styles.controls}>

                {onMinimize && (

                  <XPButton 

                    variant="minimize" 

                    onClick={onMinimize}

                    size="sm"

                  >

                    <Minus size={12} />

                  </XPButton>

                )}

                {onMaximize && (

                  <XPButton 

                    variant="maximize" 

                    onClick={onMaximize}

                    size="sm"

                  >

                    <Square size={12} />

                  </XPButton>

                )}

                <XPButton 

                  variant="close"

                  onClick={onClose}

                  size="sm"

                >

                  <X size={12} />

                </XPButton>

              </div>

            </div>

            <div className={styles.content}>

              {children}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

};

export default XPWindow;