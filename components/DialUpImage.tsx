import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "@/styles/DialUpImage.module.css";

interface DialUpImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  loadingSpeed?: number;
  interlace?: boolean;
  pixelated?: boolean;
}

export default function DialUpImage({
  src,
  alt,
  width,
  height,
  className = "",
  style = {},
  priority = false,
  loadingSpeed = 50,
  interlace = false,
  pixelated = true,
}: DialUpImageProps): JSX.Element {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showPixelated, setShowPixelated] = useState(pixelated);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const img = document.createElement('img');
    img.src = src;
    
    const startLoading = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = width;
      canvas.height = height;

      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 1;
        
        if (currentProgress > 100) {
          clearInterval(interval);
          setLoadingProgress(100);
          setTimeout(() => {
            setShowPixelated(false);
          }, 300);
          return;
        }

        ctx.clearRect(0, 0, width, height);
        
        if (interlace) {
          const step = Math.max(1, Math.floor((100 - currentProgress) / 10));
          for (let y = 0; y < height; y++) {
            if (y % step === 0 || currentProgress > 80) {
              ctx.drawImage(
                img,
                0, y, width, 1,
                0, y, width, 1
              );
            }
          }
          
          if (currentProgress > 50) {
            for (let y = 0; y < height; y++) {
              if (y % 2 === 0 || currentProgress > 80) {
                ctx.drawImage(
                  img,
                  0, y, width, 1,
                  0, y, width, 1
                );
              }
            }
          }
        } else {
          const visibleHeight = Math.floor((height * currentProgress) / 100);
          ctx.drawImage(
            img,
            0, 0, width, visibleHeight,
            0, 0, width, visibleHeight
          );
          
          if (currentProgress < 100) {
            const scanlineY = visibleHeight - 1;
            if (scanlineY >= 0 && scanlineY < height) {
              ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
              ctx.fillRect(0, scanlineY, width, 2);
            }
          }
        }

        setLoadingProgress(currentProgress);
      }, loadingSpeed);

      return () => clearInterval(interval);
    };
    
    if (img.complete) {
      startLoading();
    } else {
      img.onload = startLoading;
      img.onerror = () => {
        console.error("Failed to load image:", src);
        setLoadingProgress(100);
      };
    }
  }, [src, width, height, loadingSpeed, interlace, pixelated]);

  return (
    <div className={`${styles.container} ${className}`} style={{ position: "relative", width, height, display: "inline-block" }}>
      <canvas
        ref={canvasRef}
        className={`${styles.canvas} ${showPixelated ? styles.pixelated : ""}`}
        style={{
          display: loadingProgress > 0 && loadingProgress < 100 ? "block" : "none",
          width,
          height,
          ...style,
        }}
      />
      
      <div style={{ display: loadingProgress === 100 && !showPixelated ? "block" : "none" }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={style}
          priority={priority}
        />
      </div>
    </div>
  );
}