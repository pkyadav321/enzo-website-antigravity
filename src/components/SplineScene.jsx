import React, { Suspense, lazy, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

/**
 * SplineScene — Production-ready lazy-loaded Spline wrapper
 */
export function SplineScene({ scene, className, style, onLoad }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (splineApp) => {
    setIsLoaded(true);
    if (onLoad) onLoad(splineApp);
  };

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      position: 'relative',
      ...style 
    }}>
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'transparent',
          zIndex: 1
        }}>
          <div className="spline-spinner" />
        </div>
      )}

      <Suspense fallback={null}>
        <div style={{ 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.8s ease',
          width: '100%',
          height: '100%'
        }}>
          <Spline 
            scene={scene} 
            className={className} 
            onLoad={handleLoad} 
          />
        </div>
      </Suspense>

      <style dangerouslySetInnerHTML={{ __html: `
        .spline-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-top-color: #e8352a;
          border-radius: 50%;
          animation: spline-spin 1s linear infinite;
        }
        @keyframes spline-spin {
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}

export default SplineScene;
