"use client"

import { useEffect, useState, useMemo } from "react"
import { useColorScheme } from '@mui/material/styles';
import "./interactive-icon-cloud.css";
import React from "react";

const techIcons = [
  { name: "Flask", icon: "Flask", color: "#000000" },
  { name: "Python", icon: "Python", color: "#3776AB" },
  { name: "Kafka", icon: "Kafka", color: "#231F20" },
  { name: "LightGBM", icon: "LGBM", color: "#8E44AD" },
  { name: "XGBoost", icon: "XGB", color: "#2C3E50" },
  { name: "SHAP", icon: "SHAP", color: "#E74C3C" },
  { name: "ONNX", icon: "ONNX", color: "#9B59B6" },
  { name: "React", icon: "React", color: "#61DAFB" },
  { name: "Chart.js", icon: "Charts", color: "#FF6384" },
  { name: "Plotly", icon: "Plotly", color: "#3F51B5" },
  { name: "D3.js", icon: "D3", color: "#F9A03C" },
  { name: "Pandas", icon: "Pandas", color: "#150458" },
  { name: "NumPy", icon: "NumPy", color: "#013243" },
  { name: "REST APIs", icon: "APIs", color: "#34495E" },
  { name: "SDKs", icon: "SDKs", color: "#7F8C8D" },
];

export function IconCloud() {
  const [mounted, setMounted] = useState(false);
  const { mode } = useColorScheme();
  const theme = mode ?? 'light';

  useEffect(() => {
    setMounted(true);
  }, []);

  const animatedIcons = useMemo(() => {
    return techIcons.map((tech, index) => {
      const angle = (index / techIcons.length) * 2 * Math.PI;
      return { ...tech, angle };
    });
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {animatedIcons.map((tech) => (
        <AnimatedIcon key={tech.name} tech={tech} />
      ))}
      <div 
        className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse top-[20%] left-[30%] opacity-60"
      />
      <div 
        className="absolute w-1 h-1 bg-green-400 rounded-full animate-ping bottom-[25%] right-[35%] opacity-50"
      />
    </div>
  );
} 

const AnimatedIcon = ({ tech }: { tech: { name: string; icon: string; color: string; angle: number } }) => {
  const iconRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iconRef.current) return;

    iconRef.current.style.setProperty('--bg-color', tech.color);
    iconRef.current.style.setProperty('--shadow-color', `${tech.color}40`);

    const animate = () => {
      const time = Date.now() * 0.0002;
      const angle = tech.angle + time;
      const radius = 120;
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = Math.sin(angle) * 25;
      const scale = (z + 40) / 65;
      
      if (iconRef.current) {
        iconRef.current.style.setProperty('--x', `${x}px`);
        iconRef.current.style.setProperty('--y', `${y}px`);
        iconRef.current.style.setProperty('--scale', `${scale}`);
        iconRef.current.style.setProperty('--z-index', `${Math.round(z + 100)}`);
        iconRef.current.style.setProperty('--opacity', `${scale * 0.8 + 0.2}`);
      }
      
      requestAnimationFrame(animate);
    };
    const animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [tech.angle, tech.color]);

  return (
    <div
      ref={iconRef}
      className="dynamic-icon-style absolute flex items-center justify-center p-2 rounded-lg text-white font-bold text-sm shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
      title={tech.name}
    >
      {tech.icon}
    </div>
  );
};
