'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import * as THREE from 'three';

// Team Members Data
const TEAM_MEMBERS = [
  {
    name: "Alex Rivera",
    role: "Lead Architect",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Scaling systems beyond the cloud.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Frontend Wizard",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Obsessed with component purity.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    name: "Marcus Johnson",
    role: "DevOps Engineer",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Your server uptime is his heartbeat.",
    socials: { github: "#", linkedin: "#" }
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Making complex flows feel invisible.",
    socials: { github: "#", linkedin: "#" }
  }
];

// Three.js Particle Background Component
const ThreeBackground = ({ currentIndex }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create Particles
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color1 = new THREE.Color('#06b6d4'); // cyan
    const color2 = new THREE.Color('#a855f7'); // purple

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixColor.r;
      colors[i * 3 + 1] = mixColor.g;
      colors[i * 3 + 2] = mixColor.b;

      sizes[i] = Math.random() * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    particlesRef.current = particles;
    scene.add(particles);

    // Create Geometric Shapes
    const shapes = [];
    const geometries = [
      new THREE.TorusGeometry(0.5, 0.2, 16, 100),
      new THREE.OctahedronGeometry(0.6),
      new THREE.IcosahedronGeometry(0.5, 0)
    ];

    geometries.forEach((geo, i) => {
      const mat = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? '#06b6d4' : '#a855f7',
        wireframe: true,
        transparent: true,
        opacity: 0.2
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4
      );
      shapes.push(mesh);
      scene.add(mesh);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight('#06b6d4', 2, 10);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight('#a855f7', 2, 10);
    pointLight2.position.set(-3, -3, 3);
    scene.add(pointLight2);

    // Mouse Movement
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Rotate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
        particlesRef.current.rotation.x += 0.0002;
      }

      // Animate shapes
      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        shape.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001;
      });

      // Mouse parallax
      camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseRef.current.y * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Color transition based on current index
      const progress = currentIndex / (TEAM_MEMBERS.length - 1);
      const newColor = color1.clone().lerp(color2, progress);
      pointLight1.color = newColor;

      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      geometries.forEach(g => g.dispose());
      renderer.dispose();
    };
  }, [currentIndex]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

export default function TeamPage() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isScrolling;
    const handleWheel = (e) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        const delta = e.deltaY || e.deltaX;
        
        if (delta > 0 && currentIndex < TEAM_MEMBERS.length - 1) {
          setIsAnimating(true);
          setCurrentIndex(prev => prev + 1);
          setTimeout(() => setIsAnimating(false), 800);
        } else if (delta < 0 && currentIndex > 0) {
          setIsAnimating(true);
          setCurrentIndex(prev => prev - 1);
          setTimeout(() => setIsAnimating(false), 800);
        }
      }, 50);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [currentIndex, isAnimating]);

  return (
    <div 
      ref={scrollContainerRef}
      className="w-full h-screen bg-[#0a0a0a] relative overflow-hidden"
      style={{ touchAction: 'none' }}
    >
      {/* Three.js Background */}
      <ThreeBackground currentIndex={currentIndex} />

      {/* Static Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header UI */}
      <div className="absolute top-8 left-8 z-50 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
          OUR TEAM<span className="text-cyan-500">.</span>
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mt-3 rounded-full shadow-lg shadow-cyan-500/50"></div>
        <p className="text-zinc-500 text-sm font-mono mt-4 tracking-wider">MEET THE INNOVATORS</p>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 z-50 flex flex-col gap-3">
        {TEAM_MEMBERS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(i);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === currentIndex 
                ? 'bg-cyan-500 scale-150 shadow-lg shadow-cyan-500/50' 
                : 'bg-zinc-700 hover:bg-zinc-500'
            }`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 right-8 z-50 flex flex-col items-end gap-2 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-l from-cyan-500 to-transparent"></div>
          <span className="text-xs font-mono tracking-widest text-cyan-400 font-bold">SCROLL</span>
          <svg className="w-4 h-4 text-cyan-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <span className="text-xs text-zinc-600 font-mono">
          {currentIndex + 1} / {TEAM_MEMBERS.length}
        </span>
      </div>

      {/* Team Members Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {TEAM_MEMBERS.map((member, i) => (
          <div
            key={i}
            className="absolute w-full h-full flex items-center justify-center transition-all duration-800 ease-in-out"
            style={{
              transform: `translateX(${(i - currentIndex) * 100}%)`,
              opacity: i === currentIndex ? 1 : 0,
              pointerEvents: i === currentIndex ? 'auto' : 'none'
            }}
          >
            {/* Image */}
            <div className="absolute left-[10%] w-[350px] h-[480px] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:grayscale-0 grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent hover:border-cyan-500/30 transition-all duration-500 rounded-2xl"></div>
            </div>

            {/* Info Card */}
            <div className="absolute right-[8%] w-[460px]">
              <div className="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:border-cyan-500/30 overflow-hidden hover:shadow-cyan-500/20">
                {/* Animated Background Gradients */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-700 animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700 animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <div className="relative z-10">
                  {/* Member Number Badge */}
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="text-xs font-mono text-cyan-400 tracking-widest font-bold">
                      0{i + 1}
                    </span>
                    <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                    <span className="text-xs font-mono text-zinc-600 tracking-wider">
                      MEMBER
                    </span>
                  </div>
                  
                  <h2 className="text-4xl font-black text-white mb-2 tracking-tight leading-tight">
                    {member.name}
                  </h2>
                  
                  <h3 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8 uppercase tracking-widest">
                    {member.role}
                  </h3>
                  
                  <div className="relative mb-8 pl-5">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent"></div>
                    <p className="text-zinc-300 text-base leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex gap-4 items-center pt-6 border-t border-white/10">
                    <a 
                      href={member.socials.github} 
                      className="text-zinc-400 hover:text-white hover:scale-125 transition-all duration-300 hover:rotate-12"
                    >
                      <Github size={22} strokeWidth={1.5} />
                    </a>
                    <a 
                      href={member.socials.linkedin} 
                      className="text-zinc-400 hover:text-blue-400 hover:scale-125 transition-all duration-300 hover:rotate-12"
                    >
                      <Linkedin size={22} strokeWidth={1.5} />
                    </a>
                    <div className="flex-grow"></div>
                    <button className="flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500 hover:to-purple-500 px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 group/btn">
                      <span>VIEW RESUME</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}