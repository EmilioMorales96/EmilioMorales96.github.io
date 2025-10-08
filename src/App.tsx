import React, { useState, useEffect } from 'react';
import DesktopIcon from './components/atoms/DesktopIcon/DesktopIcon';
import { XPWindow } from './components/organisms/XPWindow';
import StartMenu from './components/molecules/StartMenu/StartMenu';
import ProjectsContent from './components/organisms/ProjectsContent/ProjectsContent';
import './index.css';

// Temporary placeholders for missing components
const SpaceInvaders = () => <div style={{ padding: '20px' }}>Space Invaders - En desarrollo</div>;
const SpotifyPlayer = () => <div style={{ padding: '20px' }}>Spotify Player - En desarrollo</div>;

// Portfolio icons using original images
const ABOUT_ICON = '/sobre_mi.gif';
const SKILLS_ICON = '/skills.gif';
const PROJECTS_ICON = '/proyectos.gif';
const CONTACT_ICON = '/contacto.gif';

interface WindowState {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  content: React.ReactNode;
  width?: number;
  height?: number;
  autoResize?: boolean;
}

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'about',
      title: 'Sobre Mi - Mi Portafolio',
      icon: ABOUT_ICON,
      isOpen: false,
      content: (
        <div className="p-6">
          <div className="flex items-start space-x-4 mb-4">
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-4 text-blue-600">¡Hola! Soy Emilio Morales</h2>
              <p className="mb-4 text-sm leading-relaxed">
                Desarrollador apasionado por crear experiencias digitales únicas, 
                como este portfolio retro inspirado en Windows XP.
              </p>
              <p className="text-sm leading-relaxed">
                Con experiencia en React, TypeScript, y tecnologías modernas, 
                combino nostalgia con innovación para crear proyectos memorables.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="/abt_me.gif" alt="About Me Pokémon" style={{ imageRendering: 'pixelated', maxWidth: '120px' }} />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'skills',
      title: 'Skills - Mi Portafolio',
      icon: SKILLS_ICON,
      isOpen: false,
      content: (
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4 text-blue-600">Habilidades Técnicas</h2>
          
          <div className="mb-6">
            <h3 className="font-bold mb-3">Tecnologías Frontend</h3>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <img src="/React.png" alt="React" className="w-6 h-6" style={{ imageRendering: 'pixelated' }} />
                <span className="text-sm">React</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/TS.png" alt="TypeScript" className="w-6 h-6" style={{ imageRendering: 'pixelated' }} />
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/JS.png" alt="JavaScript" className="w-6 h-6" style={{ imageRendering: 'pixelated' }} />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/HTML.png" alt="HTML" className="w-6 h-6" style={{ imageRendering: 'pixelated' }} />
                <span className="text-sm">HTML5</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/CSS.png" alt="CSS" className="w-6 h-6" style={{ imageRendering: 'pixelated' }} />
                <span className="text-sm">CSS3</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-bold mb-3">Herramientas de Desarrollo</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <img src="/git.png" alt="Git" className="w-6 h-6" style={{ imageRendering: 'pixelated' }} />
                <span className="text-sm">Git</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/github.png" alt="GitHub" className="w-6 h-6" style={{ imageRendering: 'pixelated' }} />
                <span className="text-sm">GitHub</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <img src="/skills_blvs.gif" alt="Pokémon Skills" className="mx-auto" style={{ imageRendering: 'pixelated', maxWidth: '150px' }} />
          </div>
        </div>
      ),
    },
    {
      id: 'projects',
      title: 'Proyectos - Mi Portafolio',
      icon: PROJECTS_ICON,
      isOpen: false,
      width: 900,
      height: 600,
      content: (
        <ProjectsContent />
      ),
    },
    {
      id: 'contact',
      title: 'Contacto - Mi Portafolio',
      icon: CONTACT_ICON,
      isOpen: false,
      content: (
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-4 text-blue-600">Contacto</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="font-bold">Email:</span>
                  <span>emilio.morales@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold">GitHub:</span>
                  <span>github.com/emiliomorales96</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold">LinkedIn:</span>
                  <span>linkedin.com/in/emiliomorales</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img src="/contact_pkmn.gif" alt="Contact Pokémon" style={{ imageRendering: 'pixelated', maxWidth: '120px' }} />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'spaceinvaders',
      title: 'Space Invaders - Juego',
      icon: '/folder.png',
      isOpen: false,
      width: 600,
      height: 550,
      content: (
        <SpaceInvaders />
      ),
    },
    {
      id: 'spotify',
      title: 'Reproductor de Música - Spotify',
      icon: '/folder.png',
      isOpen: false,
      width: 800,
      height: 600,
      content: (
        <SpotifyPlayer />
      ),
    },
  ]);

  const openWindow = (windowId: string) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === windowId 
          ? { ...window, isOpen: true }
          : window
      )
    );
  };

  const closeWindow = (windowId: string) => {
    setWindows(prev => 
      prev.map(window => 
        window.id === windowId 
          ? { ...window, isOpen: false }
          : window
      )
    );
  };

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen crt-effect relative overflow-hidden">
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4">
        <div className="flex flex-col space-y-2">
          <DesktopIcon
            icon={ABOUT_ICON}
            label="Sobre Mi"
            onClick={() => openWindow('about')}
          />
          <DesktopIcon
            icon={SKILLS_ICON}
            label="Skills"
            onClick={() => openWindow('skills')}
          />
          <DesktopIcon
            icon={PROJECTS_ICON}
            label="Proyectos"
            onClick={() => openWindow('projects')}
          />
          <DesktopIcon
            icon={CONTACT_ICON}
            label="Contacto"
            onClick={() => openWindow('contact')}
          />
        </div>
      </div>

      {/* Windows */}
      {windows.map((window) => (
        <XPWindow
          key={window.id}
          title={window.title}
          isOpen={window.isOpen}
          onClose={() => closeWindow(window.id)}
          width={window.width || 800}
          height={window.height || 600}
        >
          {window.content}
        </XPWindow>
      ))}

      {/* Start Menu */}
      <StartMenu 
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onOpenWindow={openWindow}
      />

      {/* Taskbar */}
      <div className="xp-taskbar">
        <div className="flex items-center">
          <button 
            className="xp-start-button"
            onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
          >
            inicio
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* System Tray */}
          <div className="text-white text-sm font-bold px-2" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.8)' }}>
            {currentTime.toLocaleTimeString('es-ES', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: true 
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;