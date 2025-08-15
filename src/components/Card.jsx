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
    if (overlayRef.current && window.html2canvas) {
      const originalStyles = {
        overlay: {
          background: overlayRef.current.style.background || '',
          color: overlayRef.current.style.color || '',
        },
        children: {},
      };

      const children = overlayRef.current.querySelectorAll('*');
      children.forEach((el) => {
        if (el.style.background || el.style.color) {
          originalStyles.children[el] = {
            background: el.style.background || '',
            color: el.style.color || '',
          };
        }
      });

      overlayRef.current.style.background = 'linear-gradient(90deg, #ff6b6b, #8e2de2)';
      overlayRef.current.style.color = '#ffffff';
      children.forEach((el) => {
        el.style.color = '#ffffff';
        el.style.background = 'transparent';
      });

      window.html2canvas(overlayRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      }).then((canvas) => {
        const dataUrl = canvas.toDataURL('image/png');

        Object.assign(overlayRef.current.style, originalStyles.overlay);
        Object.entries(originalStyles.children).forEach(([el, styles]) => {
          if (el && styles) Object.assign(el.style, styles);
        });

        const link = document.createElement('a');
        link.download = `${name}-card.png`;
        link.href = dataUrl;
        link.click();
      }).catch((error) => {
        console.error('Error generating canvas:', error);
        Object.assign(overlayRef.current.style, originalStyles.overlay);
        Object.entries(originalStyles.children).forEach(([el, styles]) => {
          if (el && styles) Object.assign(el.style, styles);
        });
      });
    } else {
      console.error('html2canvas or overlayRef missing');
    }
  };

  return (
    <>
      <div
        className={`glass-card rounded-2xl aspect-[30/31] p-6 flex flex-col items-center justify-between text-center bg-white/15 cursor-pointer transform transition-transform duration-500 ${isFlipped ? '' : 'scale-100'}`}
        onClick={handleCardClick}
        role="button"
        aria-expanded={isFlipped}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      >
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mt-10">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-white mb-1">{name}</h3>
          <p className="text-white/80 text-sm font-medium">{position}</p>
        </div>
      </div>

      {isFlipped && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={overlayRef}
            className="animated-bg rounded-2xl p-8 w-full max-w-md transform transition-transform duration-500"
            style={{ transform: isFlipped ? 'rotateY(360deg)' : 'rotateY(180deg)' }}
          >
            <div className="flex justify-end">
              <button
                onClick={handleClose}
                className="text-white hover:text-gray-300 focus:outline-none"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
              <p className="text-white/80 mb-6">{message}</p>
              <div className="flex justify-end">
                <button
                    onClick={handleDownload}
                    className="text-white hover:text-gray-300 focus:outline-none"
                    aria-label={`Download ${name}'s card image`}
                >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                </svg>
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