import React, { useState, useEffect, useRef } from 'react';
import styles from './ProjectsContent.module.css';



// Definición de tipos
interface ProjectsContentProps {
  onContentSizeChange?: (size: { width: number; height: number }) => void;
}

type ProjectKey = 'portfolio' | 'reloj' | 'temporizador' | 'fanpage' | 'googleforms';

const ProjectsContent: React.FC<ProjectsContentProps> = ({ onContentSizeChange }) => {
  const [activeProject, setActiveProject] = useState<ProjectKey>('portfolio');
  const contentRef = useRef<HTMLDivElement>(null);

  // Datos de los proyectos
  const projects = {
    portfolio: {
      title: 'Mi Portafolio - Windows XP',
      description: 'Una recreación nostálgica del clásico Windows XP, diseñada para mostrar mis proyectos y habilidades de manera interactiva. Incluye elementos auténticos de la interfaz XP con funcionalidades modernas.',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'CSS Modules', 'Vite'],
      features: [
        'Interfaz auténtica de Windows XP',
        'Ventanas arrastables y redimensionables',
        'Menú de inicio funcional con juegos',
        'Sistema de iconos del escritorio',
        'Reproductor de música integrado',
        'Juego Space Invaders funcional',
        'Animaciones suaves con Framer Motion',
        'Código modularizado con CSS Modules'
      ],
      video: null
    },
    reloj: {
      title: 'Reloj Digital - Python',
      description: 'Reloj básico desarrollado con Python. Muestra la fecha y hora actual en tiempo real con interfaz simple de consola.',
      technologies: ['Python'],
      features: [
        'Mostrar fecha y hora actual',
        'Actualización en tiempo real',
        'Interfaz de consola',
        'Código Python básico'
      ],
      video: '/Reloj_vid.mp4'
    },
    temporizador: {
      title: 'Temporizador de Cocción de Huevos',
      description: 'Proyecto personal para cronometrar la cocción perfecta de huevos. Desarrollado con HTML, CSS y JavaScript con interfaz web intuitiva.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Temporizador específico para huevos',
        'Interfaz web intuitiva',
        'Contador regresivo visual',
        'Proyecto personal útil'
      ],
      video: '/temporizador_vid.mp4'
    },
    fanpage: {
      title: 'Fanpage - Proyecto Escolar',
      description: 'Fanpage desarrollada como proyecto para la escuela. Sitio web completo creado con HTML, CSS y JavaScript con diseño responsivo y funcionalidades interactivas.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Diseño web completo',
        'Proyecto escolar',
        'Interfaz interactiva',
        'Código bien estructurado'
      ],
      video: '/chsm_vid.mp4'
    },
    googleforms: {
      title: '📋 Google Forms Clone - Enterprise System',
      description: 'Sistema empresarial completo de gestión de formularios con roles de usuario, integración a Salesforce y panel administrativo. Incluye sistema de likes, compartir, gestión de permisos y sistema de tickets para quejas de usuarios.',
      technologies: ['React', 'Vite', 'Node.js', 'Salesforce', 'SQL Workbench', 'Sequelize', 'JWT', 'TailwindCSS', 'Dropbox API'],
      features: [
        'Sistema de roles: Usuario/Administrador',
        'Creación y edición de formularios',
        'Sistema de likes y compartir',
        'Solo propietarios pueden modificar sus forms',
        'Panel administrativo completo',
        'Gestión total de formularios (Admin)',
        'Integración con Salesforce (Admin)',
        'Sistema de tickets de quejas',
        'Autenticación JWT y permisos',
        'Base de datos SQL con Sequelize'
      ],
      video: 'https://www.youtube.com/embed/SvnHSSDBb70',
      isYouTube: true
    }
  };

  // Efecto para ajustar el tamaño de la ventana automáticamente
  useEffect(() => {
    if (contentRef.current && onContentSizeChange) {
      const resizeObserver = new ResizeObserver(() => {
        if (contentRef.current) {
          onContentSizeChange({
            width: Math.max(800, contentRef.current.scrollWidth + 40),
            height: Math.max(600, contentRef.current.scrollHeight + 40)
          });
        }
      });

      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [onContentSizeChange, activeProject]);

  return (
    <div ref={contentRef} className={styles.tabsContainer}>
      {/* XP Style Tabs Navigation */}
      <ul className={styles.tabs}>
        {Object.entries(projects).map(([key, project]) => (
          <li key={key} className={styles.tab}>
            <button
              onClick={() => setActiveProject(key as ProjectKey)}
              className={`${styles.tabButton} ${activeProject === key ? styles.active : ''}`}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>



      {/* Tab Content */}
      <div className={styles.tabContent}>
        <div className={styles.contentContainer}>
          <div className={styles.projectHeader}>
            <h3 className={styles.projectTitle}>{projects[activeProject].title}</h3>
            <p className={styles.projectDescription}>
              {projects[activeProject].description}
            </p>
          </div>

          {/* Technologies Section */}
          <div className={styles.technologiesSection}>
            <h4 className={styles.sectionTitle}>🛠️ Tecnologías utilizadas:</h4>
            <div className={styles.techContainer}>
              {projects[activeProject].technologies.map((tech, index) => (
                <span
                  key={index}
                  className={styles.techTag}
                >
                  {tech}
                </span>
              ))}
            </div>



            {/* Features Section */}
            <h4 className={styles.sectionTitle}>✨ Características principales:</h4>
            <div className={styles.featuresGrid}>
              {projects[activeProject].features.map((feature, index) => (
                <div
                  key={index}
                  className={styles.featureItem}
                >
                  <div className={styles.featureIndicator}></div>
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Video Demo Section */}
            {projects[activeProject].video && (
              <div className={styles.videoSection}>
                <h4 className={styles.sectionTitle}>🎬 Demostración:</h4>
                <div className={styles.videoContainer}>
                  <div className={styles.videoFrame}>
                    {(projects[activeProject] as any).isYouTube ? (
                      <iframe
                        src={projects[activeProject].video}
                        className={styles.video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Demostración del proyecto"
                      />
                    ) : (
                      <video
                        src={projects[activeProject].video}
                        controls
                        className={styles.video}
                        preload="metadata"
                        onError={(e) => console.log('Error cargando video:', e)}
                      >
                        <source src={projects[activeProject].video} type="video/mp4" />
                        Tu navegador no soporta el elemento video.
                      </video>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Special Message for Portfolio */}
            {activeProject === 'portfolio' && (
              <div className={styles.specialMessage}>
                <p className={styles.specialMessageText}>
                  ¡Estás viendo este proyecto en acción! 🚀
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;