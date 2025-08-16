import { useState, useRef } from 'react';

const Card = ({ image, name, position, title, message }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const overlayRef = useRef(null);

    const handleCardClick = () => {
        setIsFlipped(true);
    };

    const handleClose = () => {
        setIsFlipped(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
        setIsFlipped(false);
        }
    };
  
    const handleDownload = () => {
        if (!overlayRef.current || !window.html2canvas) return;

        const overlay = overlayRef.current;
        const buttons = overlay.querySelectorAll('button');
        buttons.forEach(btn => btn.style.display = 'none');
    
        const scrollable = overlay.querySelector('.scrollable-message');
        const backgroundOverlay = overlay.querySelector('.bg-black\\/40')

        const prevStyle = {
            maxHeight: scrollable.style.maxHeight,
            overflowY: scrollable.style.overflowY,
        };
        const prevClassName = overlay.className;
        const prevBgImage = overlay.style.backgroundImage;
        const prevBgColor = overlay.style.backgroundColor;
        const prevOverlayBg = backgroundOverlay ? backgroundOverlay.style.backgroundColor : null;

        const initialBlackLayer = document.createElement('div');
        initialBlackLayer.style.position = 'absolute';
        initialBlackLayer.style.inset = '0';
        // initialBlackLayer.style.background = 'rgba(0, 0, 0, 1)';
        initialBlackLayer.style.background = 'linear-gradient(90deg, #ff6b6b, #8e2de2)';
        initialBlackLayer.style.zIndex = '-1';
        overlay.insertBefore(initialBlackLayer, overlay.firstChild);

        scrollable.style.maxHeight = 'none';
        scrollable.style.overflowY = 'visible';
        
        overlay.className = overlay.className.replace('animated-bg', '').trim();

        const overriddenElements = [];
        const fixColors = (el) => {
            const children = el.querySelectorAll('*');
            [...children, el].forEach((child) => {
            const computed = getComputedStyle(child);
            const original = {
                color: child.style.color,
                backgroundColor: child.style.backgroundColor,
                borderColor: child.style.borderColor,
            };
            overriddenElements.push({ el: child, original });
            if (computed.color.includes('oklab')) child.style.color = '#ffffff';
            if (computed.backgroundColor.includes('oklab')) child.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
            if (computed.borderColor.includes('oklab')) child.style.borderColor = '#000000';
            });
        };
        fixColors(overlay);

        requestAnimationFrame(() => {
            setTimeout(() => {
            window.html2canvas(overlay, {
                backgroundColor: null,
                scale: 2,
                useCORS: true,
            })
            .then((canvas) => {
                Object.assign(scrollable.style, prevStyle);
                buttons.forEach(btn => btn.style.display = '');
                overlay.className = prevClassName;
                overlay.style.backgroundImage = prevBgImage;
                overlay.style.backgroundColor = prevBgColor;
                if (backgroundOverlay) {
                backgroundOverlay.style.backgroundColor = prevOverlayBg;
                }
                overriddenElements.forEach(({ el, original }) => {
                el.style.color = original.color;
                el.style.backgroundColor = original.backgroundColor;
                el.style.borderColor = original.borderColor;
                });
                overlay.removeChild(initialBlackLayer);

                const dataUrl = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = `${name}-card.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Error generating canvas:', error);
                
                buttons.forEach(btn => btn.style.display = '');
                Object.assign(scrollable.style, prevStyle);
                overlay.className = prevClassName;
                overlay.style.backgroundImage = prevBgImage;
                overlay.style.backgroundColor = prevBgColor;
                if (backgroundOverlay) {
                backgroundOverlay.style.backgroundColor = prevOverlayBg;
                }
                overriddenElements.forEach(({ el, original }) => {
                el.style.color = original.color;
                el.style.backgroundColor = original.backgroundColor;
                el.style.borderColor = original.borderColor;
                });
                overlay.removeChild(initialBlackLayer);
            });
            }, 100);
        });
    };

    return (
    <>
    <div
    className={`glass-card rounded-2xl p-6 flex flex-col items-center justify-between text-center bg-gradient-to-br from-gray-900/20 to-black/20 border border-white/10 shadow-lg hover:shadow-xl cursor-pointer transform transition-all duration-300 ${isFlipped ? '' : 'scale-100 hover:scale-105'}`}
    onClick={handleCardClick}
    role="button"
    aria-expanded={isFlipped}
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}>
        <div className="w-30 h-30 rounded-full overflow-hidden mb-6 mt-4 border-2 border-white/20 bg-white/10">
            <img src={image} alt={name} className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90" />
        </div>
        <div className="px-4 py-2 bg-black/30 rounded-lg">
            <h3 className="font-bold text-xl text-white mb-2 tracking-wide">{name}</h3>
            <p className="text-white/70 text-base font-semibold">{position}</p>
        </div>
    </div>
      
{isFlipped && (
  <div
    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    onClick={handleOverlayClick}
    role="dialog"
    aria-modal="true"
    style={{ padding: '15px' }}
  >
    <div
      ref={overlayRef}
      className="animated-bg rounded-2xl p-6 w-full max-w-lg transform transition-transform duration-500 relative"
      style={{
        transform: isFlipped ? 'rotateY(360deg)' : 'rotateY(180deg)',
        maxHeight: 'calc(100vh - 30px)',
        minHeight: '250px',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <img src="/public/isaca.ico" alt="ISACA Logo" className="w-8 h-8 object-contain" />
            <h2 className="text-3xl font-extrabold text-white drop-shadow-md">{title}</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-white hover:text-red-400 focus:outline-none transition-colors duration-200 p-2 rounded-full hover:bg-red-500/20"
            aria-label="Close"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto scrollable-message" style={{ maxHeight: 'calc(60vh - 100px)', paddingRight: '10px' }}>
          <p className="text-white/90 text-lg leading-relaxed whitespace-pre-wrap p-4 bg-animated rounded-lg">{message}</p>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleDownload}
            className="text-white hover:text-green-400 focus:outline-none transition-colors duration-200 p-2 rounded-full hover:bg-green-500/20 flex items-center"
            aria-label={`Download ${name}'s card image`}
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="text-sm font-medium">Download</span>
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default Card;