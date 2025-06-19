import React, { useEffect } from 'react';

type MessageModalProps = {
  show: boolean;
  onClose: () => void;
};

const MessageModal: React.FC<MessageModalProps> = ({ show, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.4)' }}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="messageModalLabel"
      aria-modal="true"
      onClick={onClose} // close modal on clicking backdrop
    >
      <div
        className="modal-dialog modal-sm"
        style={{ position: 'fixed', top: '250px' }}
        onClick={e => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        <div className="modal-content" style={{ width: '41%' }}>
          <button
            className="close"
            onClick={onClose}
            style={{ float: 'right', margin: '5px', fontSize: '1.5rem', border: 'none', background: 'transparent' }}
            aria-label="Close"
          >
            &times;
          </button>
          <div id="message" style={{ padding: '1rem' }}>
            Your message goes here
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
