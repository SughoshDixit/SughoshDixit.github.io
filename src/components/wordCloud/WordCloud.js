import React, { useEffect, useRef, useState } from 'react';
import './WordCloud.scss';

const WordCloud = ({ words, title, type = 'skills' }) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 400 });
  const [hoveredWord, setHoveredWord] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      const container = canvasRef.current?.parentElement;
      if (container) {
        setDimensions({
          width: Math.min(container.offsetWidth - 40, 800),
          height: type === 'skills' ? 400 : 500
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [type]);

  useEffect(() => {
    if (!canvasRef.current || !words) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Word cloud generation
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const placedWords = [];
    
    // Color palette based on type
    const colors = type === 'skills' 
      ? ['#007ACC', '#55198b', '#228B22', '#FFD700', '#FF6B35', '#28A745']
      : ['#007ACC', '#55198b', '#228B22', '#FFD700', '#FF6B35', '#28A745', '#61dafb', '#f80000'];

    const drawWord = (word, weight, color, x, y, fontSize) => {
      ctx.save();
      ctx.font = `bold ${fontSize}px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Add glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      ctx.fillText(word, x, y);
      
      // Add subtle stroke
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.strokeText(word, x, y);
      
      ctx.restore();
      
      return {
        word,
        weight,
        color,
        x,
        y,
        fontSize,
        width: ctx.measureText(word).width,
        height: fontSize
      };
    };

    const checkCollision = (newWord, existingWords) => {
      const margin = 5;
      for (let existing of existingWords) {
        const distance = Math.sqrt(
          Math.pow(newWord.x - existing.x, 2) + Math.pow(newWord.y - existing.y, 2)
        );
        if (distance < (newWord.width + existing.width) / 2 + margin) {
          return true;
        }
      }
      return false;
    };

    const placeWord = (word, weight) => {
      const fontSize = Math.max(12, Math.min(48, weight * 2 + 16));
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      let attempts = 0;
      let placed = false;
      
      while (attempts < 100 && !placed) {
        let x, y;
        
        if (attempts < 30) {
          // Try near center first
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * Math.min(centerX, centerY) * 0.6;
          x = centerX + Math.cos(angle) * radius;
          y = centerY + Math.sin(angle) * radius;
        } else {
          // Try random positions
          x = Math.random() * (canvas.width - 100) + 50;
          y = Math.random() * (canvas.height - 100) + 50;
        }
        
        const wordObj = { word, weight, color, x, y, fontSize };
        
        if (!checkCollision(wordObj, placedWords)) {
          const drawnWord = drawWord(word, weight, color, x, y, fontSize);
          placedWords.push(drawnWord);
          placed = true;
        }
        
        attempts++;
      }
    };

    // Sort words by weight (larger words first)
    const sortedWords = [...words].sort((a, b) => b.weight - a.weight);
    
    // Place words
    sortedWords.forEach(({ text, weight }) => {
      placeWord(text, weight);
    });

    // Add hover detection
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      let found = null;
      for (let word of placedWords) {
        const distance = Math.sqrt(
          Math.pow(x - word.x, 2) + Math.pow(y - word.y, 2)
        );
        if (distance < word.fontSize / 2) {
          found = word;
          break;
        }
      }
      
      setHoveredWord(found);
      canvas.style.cursor = found ? 'pointer' : 'default';
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [words, dimensions, type]);

  return (
    <div className="word-cloud-container">
      <div className="word-cloud-header">
        <h3 className="word-cloud-title">{title}</h3>
        {hoveredWord && (
          <div className="word-tooltip">
            <strong>{hoveredWord.word}</strong>
            <br />
            <span className="tooltip-weight">Weight: {hoveredWord.weight}</span>
          </div>
        )}
      </div>
      
      <div className="word-cloud-canvas-wrapper">
        <canvas
          ref={canvasRef}
          className="word-cloud-canvas"
          width={dimensions.width}
          height={dimensions.height}
        />
        
        {/* Decorative elements */}
        <div className="word-cloud-decoration">
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
          <div className="decoration-circle decoration-3"></div>
        </div>
      </div>
      
      {words && words.length > 0 && (
        <div className="word-cloud-legend">
          <div className="legend-item">
            <div className="legend-color legend-large"></div>
            <span>High Proficiency</span>
          </div>
          <div className="legend-item">
            <div className="legend-color legend-medium"></div>
            <span>Medium Proficiency</span>
          </div>
          <div className="legend-item">
            <div className="legend-color legend-small"></div>
            <span>Basic Knowledge</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WordCloud;
