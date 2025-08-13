import { useEffect, useState, useMemo, useRef } from 'react';

export default function BlueScreen(): JSX.Element | null {
  const [show, setShow] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const lines = useMemo(() => [
    { type: 'header', content: 'Windows', delay: 100 },
    { type: 'text', content: 'A problem has been detected and Windows has been shut down to prevent damage', delay: 200 },
    { type: 'text', content: 'to your computer.', delay: 250 },
    { type: 'blank', content: '', delay: 300 },
    { type: 'strong', content: 'SAMSEPY_HOMEPAGE_TOO_AWESOME', delay: 400 },
    { type: 'blank', content: '', delay: 450 },
    { type: 'text', content: 'If this is the first time you\'ve seen this Stop error screen,', delay: 500 },
    { type: 'text', content: 'restart your computer. If this screen appears again, follow', delay: 550 },
    { type: 'text', content: 'these steps:', delay: 600 },
    { type: 'blank', content: '', delay: 650 },
    { type: 'text', content: 'Check to make sure this website is not too nostalgic for your system.', delay: 700 },
    { type: 'text', content: 'If this is a new installation, ask your hardware or software manufacturer', delay: 750 },
    { type: 'text', content: 'for any Windows updates you might need.', delay: 800 },
    { type: 'blank', content: '', delay: 850 },
    { type: 'text', content: 'Technical information:', delay: 900 },
    { type: 'blank', content: '', delay: 950 },
    { type: 'mono', content: '*** STOP: 0x00000050 (0xFD3094C2, 0x00000001, 0xFBFE7617, 0x00000000)', delay: 1000 },
    { type: 'blank', content: '', delay: 1050 },
    { type: 'mono', content: '*** SAMSEPY.SYS - Address FBFE7617 base at FBFE5000, DateStamp 3d6dd67c', delay: 1100 },
    { type: 'blank', content: '', delay: 1150 },
    { type: 'blink', content: 'Beginning dump of physical memory', delay: 1200 },
    { type: 'blink', content: 'Physical memory dump complete.', delay: 1400 },
    { type: 'blink', content: 'Contact your system administrator or technical support group for further assistance.', delay: 1600 },
  ], []);

  const handleInteraction = (): void => {
    if (!hasInteracted && audioRef.current) {
      setHasInteracted(true);
      audioRef.current.play().catch(error => {
        console.log('Audio play failed:', error);
      });
    }
  };

  useEffect(() => {
    const audio = new Audio('/sounds/dialup.m4a');
    audioRef.current = audio;
    audio.loop = false;
    audio.volume = 1.0;
    
    const playAudio = async (): Promise<void> => {
      try {
        await audio.play();
        setHasInteracted(true);
      } catch (error) {
        console.log('Audio autoplay was blocked. Click anywhere to play sound:', error);
      }
    };
    
    void playAudio();
    
    const timers: NodeJS.Timeout[] = [];
    
    lines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
      timers.push(timer);
    });

    // 3秒後にブルースクリーンを非表示（音声は継続再生）
    const hideTimer = setTimeout(() => {
      setShow(false);
      // 音声はそのまま最後まで再生される
    }, 3000);
    timers.push(hideTimer);
    
    return (): void => {
      // コンポーネントがアンマウントされる時だけ音声を停止
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [lines]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <>
      {show && (
        <div 
          onClick={handleInteraction}
          style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#0000AA',
      color: '#FFFFFF',
      fontFamily: 'Lucida Console, Courier New, monospace',
      fontSize: '14px',
      padding: '20px',
      zIndex: 9999,
      cursor: 'pointer',
      userSelect: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {!hasInteracted && (
        <div style={{
          position: 'absolute',
          top: '20px',
          backgroundColor: '#FFFF00',
          color: '#0000AA',
          padding: '10px 20px',
          fontWeight: 'bold',
          animation: 'pulse 1s infinite'
        }}>
          CLICK ANYWHERE TO HEAR DIAL-UP SOUND
        </div>
      )}
      
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        minHeight: '500px'
      }}>
        {lines.slice(0, visibleLines).map((line, index) => {
          if (line.type === 'header') {
            return (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                color: '#0000AA',
                padding: '2px 8px',
                display: 'inline-block',
                marginBottom: '20px'
              }}>
                {line.content}
              </div>
            );
          } else if (line.type === 'blank') {
            return <div key={index} style={{height: '10px'}} />;
          } else if (line.type === 'strong') {
            return (
              <p key={index} style={{marginBottom: '10px', lineHeight: '1.5'}}>
                <strong>{line.content}</strong>
              </p>
            );
          } else if (line.type === 'mono') {
            return (
              <p key={index} style={{marginBottom: '10px', lineHeight: '1.5', fontFamily: 'monospace'}}>
                {line.content}
              </p>
            );
          } else if (line.type === 'blink') {
            return (
              <p key={index} style={{
                marginBottom: '5px', 
                lineHeight: '1.5',
                animation: 'blink 0.5s infinite'
              }}>
                {line.content}
              </p>
            );
          } else {
            return (
              <p key={index} style={{marginBottom: '10px', lineHeight: '1.5'}}>
                {line.content}
              </p>
            );
          }
        })}
      </div>
      <style jsx>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
      
        </div>
      )}
      
      {/* ミュートボタンは常に表示 */}
      {audioRef.current && (
        <button
          onClick={(): void => setIsMuted(!isMuted)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: 'rgba(0, 0, 170, 0.8)',
            border: '2px solid #FFFFFF',
            color: '#FFFFFF',
            padding: '8px 16px',
            fontFamily: 'Lucida Console, Courier New, monospace',
            fontSize: '12px',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.2s',
            zIndex: 10000
          }}
          onMouseOver={(e): void => { e.currentTarget.style.opacity = '1'; }}
          onMouseOut={(e): void => { e.currentTarget.style.opacity = '0.7'; }}
        >
          {isMuted ? '🔇 UNMUTE' : '🔊 MUTE'}
        </button>
      )}
    </>
  );
}