import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './StartMenu.module.css';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWindow: (windowId: string) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose, onOpenWindow }) => {
  const menuItems = [
    {
      id: 'spaceinvaders',
      label: 'Space Invaders',
      description: 'Mini juego clásico',
      icon: '🚀'
    },
    {
      id: 'spotify',
      label: 'Reproductor Música',
      description: 'Spotify Player',
      icon: '�'
    },
    {
      id: 'about',
      label: 'Sobre Mi',
      description: 'Información personal',
      icon: '�'
    },
    {
      id: 'projects',
      label: 'Proyectos',
      description: 'Portfolio de trabajos',
      icon: '�'
    }
  ];

  const handleItemClick = (itemId: string) => {
    onOpenWindow(itemId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className={styles.backdrop}
            onClick={onClose}
          />
          
          {/* Start Menu */}
          <motion.div
            className={styles.startMenu}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.avatar}>
                <span className={styles.avatarText}>EM</span>
              </div>
              <div className={styles.userInfo}>
                <div className={styles.userName}>Emilio Morales</div>
                <div className={styles.userSubtitle}>Windows XP Portfolio</div>
              </div>
            </div>

            {/* Menu Items */}
            <div className={styles.menuItems}>
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className={styles.menuItem}
                  onClick={() => handleItemClick(item.id)}
                >
                  <div className={styles.iconContainer}>
                    {item.icon}
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.itemTitle}>{item.label}</div>
                    <div className={styles.itemDescription}>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <button 
                className={styles.footerButton}
                onClick={onClose}
              >
                Cerrar sesión
              </button>
              <button 
                className={styles.footerButton}
                onClick={onClose}
              >
                Apagar
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default StartMenu;