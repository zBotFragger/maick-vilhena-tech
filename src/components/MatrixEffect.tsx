import React, { useEffect, useRef } from 'react';

const MatrixEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const targetText = "Maick Vilhena TECH";
    let columns = 0;
    let drops: number[] = [];
    let fontSize = 20; 

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        
        // Dynamic fontSize to perfectly fit the text in the canvas, min 14, max 32
        fontSize = Math.max(14, Math.min(32, Math.floor(canvas.width / (targetText.length + 4))));
        
        const newColumns = Math.floor(canvas.width / fontSize) + 1;
        if (newColumns > columns) {
           for (let x = columns; x < newColumns; x++) {
             // Drops start at various positions off-screen below
             drops[x] = canvas.height + Math.random() * canvas.height;
           }
        }
        columns = newColumns;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+~`|}{[]:;?><,./-=';
    const charArray = chars.split('');

    let revealedCount = 0;
    let revealTimer = 0;

    // Restart animation when user scrolls to it
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealedCount = 0;
          revealTimer = 0;
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(canvas);

    const draw = () => {
      if (!ctx || !canvas) return;

      // Darker trail to make the red stand out more prominently 
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      
      const startCol = Math.floor((columns - targetText.length) / 2);
      // Center vertically but align to grid
      const targetRowY = Math.floor((canvas.height / fontSize) / 2) * fontSize;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i];

        // Normal green matrix drops
        ctx.fillStyle = '#0f0';
        ctx.shadowColor = '#0f0';
        ctx.shadowBlur = 0; // Removed blur for crisper matrix look
        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        // Move the drop UP
        if (y < 0 && Math.random() > 0.95) {
          drops[i] = canvas.height + Math.random() * 100;
        } else {
          drops[i] -= fontSize;
        }
      }

      // Handle the text reveal decryption effect
      revealTimer++;
      // Every 6 frames we lock in the next letter
      if (revealTimer % 6 === 0 && revealedCount < targetText.length) {
        revealedCount++;
      }

      const isFullyRevealed = revealedCount >= targetText.length;
      // Smooth pulse between 0 and 15 using a sine wave over time
      const pulseBlur = isFullyRevealed ? Math.abs(Math.sin(Date.now() / 500)) * 15 : 4;

      // Draw the target text (decryption animation + locked letters)
      for (let i = 0; i < targetText.length; i++) {
        const x = (startCol + i) * fontSize;
        const y = targetRowY;

        if (i < revealedCount) {
          // Locked character
          if (targetText[i] === ' ') continue;
          ctx.fillStyle = '#0f0'; // Glowing Green
          ctx.shadowColor = '#0f0';
          ctx.shadowBlur = isFullyRevealed ? pulseBlur : 4; 
          ctx.font = `bold ${fontSize}px monospace`;
          ctx.fillText(targetText[i], x, y);
          ctx.shadowBlur = 0;
        } else if (i === revealedCount) {
          // Flickering decryption character
          if (targetText[i] === ' ') {
            revealedCount++; // Skip spaces instantly
          } else {
            const randomChar = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillStyle = '#fff'; // Brilliant white for active decryption
            ctx.shadowColor = '#fff';
            ctx.shadowBlur = 3; // Reduced blur
            ctx.font = `bold ${fontSize}px monospace`;
            ctx.fillText(randomChar, x, y);
            ctx.shadowBlur = 0;
          }
        }
      }
    };

    const intervalId = setInterval(draw, 50);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full h-full relative z-10 rounded-2xl shadow-xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px] border-2 border-cyan/30">
      <canvas ref={canvasRef} className="absolute inset-0 block bg-black w-full h-full" />
    </div>
  );
};

export default MatrixEffect;
