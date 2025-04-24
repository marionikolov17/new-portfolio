import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface SceneRef {
  animationId: number;
  renderer: THREE.WebGLRenderer;
}

export default function useFloatingBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneRef | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);

    // Monochromatic color palette from theme
    const colors = [
      0xb8b8b8, // --color-accent-100
      0xa8a8a8, // --color-accent-300
      0x888888, // --color-accent-500
      0x686868, // --color-accent-900
      0x525252, // --color-border-300
    ];

    // Create floating elements - using only simple shapes
    const elements: THREE.Mesh[] = [];
    const geometries = [
      new THREE.SphereGeometry(0.4, 8, 8), // Simplified sphere
      new THREE.BoxGeometry(0.6, 0.6, 0.6), // Simple cube
      new THREE.PlaneGeometry(0.7, 0.7), // Simple plane
    ];

    // Create only 10 elements for better performance
    for (let i = 0; i < 10; i++) {
      const geometry =
        geometries[Math.floor(Math.random() * geometries.length)];

      // Use MeshBasicMaterial instead of MeshStandardMaterial for better performance
      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: Math.random() * 0.5 + 0.25, // Between 0.25 and 0.75
      });

      const element = new THREE.Mesh(geometry, material);

      // Random positions
      element.position.x = Math.random() * 30 - 15;
      element.position.y = Math.random() * 30 - 15;
      element.position.z = Math.random() * 10 - 15;

      // Varied speeds - some elements move faster
      const speedFactor = Math.random() < 0.3 ? 3 : 1; // 30% chance of faster elements

      element.userData = {
        rotationSpeed: {
          x: (Math.random() * 0.005 - 0.0025) * speedFactor,
          y: (Math.random() * 0.005 - 0.0025) * speedFactor,
          z: (Math.random() * 0.005 - 0.0025) * speedFactor,
        },
        movementSpeed: {
          x: (Math.random() * 0.01 - 0.005) * speedFactor,
          y: (Math.random() * 0.01 - 0.005) * speedFactor,
        },
      };

      scene.add(element);
      elements.push(element);
    }

    // Position camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);

      // Update element positions and rotations
      elements.forEach((element) => {
        // Rotation
        element.rotation.x += element.userData.rotationSpeed.x;
        element.rotation.y += element.userData.rotationSpeed.y;
        element.rotation.z += element.userData.rotationSpeed.z;

        // Movement
        element.position.x += element.userData.movementSpeed.x;
        element.position.y += element.userData.movementSpeed.y;

        // Wrapping - if element goes off screen, wrap to the other side
        if (element.position.x > 15) element.position.x = -15;
        if (element.position.x < -15) element.position.x = 15;
        if (element.position.y > 15) element.position.y = -15;
        if (element.position.y < -15) element.position.y = 15;
      });

      renderer.render(scene, camera);

      // Store reference to the animation frame
      sceneRef.current = { animationId, renderer };
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.renderer.dispose();
      }
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      elements.forEach((element) => {
        element.geometry.dispose();
        if (Array.isArray(element.material)) {
          element.material.forEach((material) => material.dispose());
        } else {
          element.material.dispose();
        }
      });
    };
  }, []);

  return { containerRef };
}
