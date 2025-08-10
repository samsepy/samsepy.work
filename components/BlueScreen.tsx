import { useEffect, useState } from 'react';

export default function BlueScreen() {
  const [show, setShow] = useState(true);
  const [visibleLines, setVisibleLines] = useState(0);

  const lines = [
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
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    lines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
      timers.push(timer);
    });

    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 3000);
    timers.push(hideTimer);
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  if (!show) return null;

  return (
    <div style={{
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
      cursor: 'none',
      userSelect: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
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
      `}</style>
    </div>
  );
}