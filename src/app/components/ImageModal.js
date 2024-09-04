import React, { useState } from 'react';

const ImageModal = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className="cursor-pointer w-full"
        onClick={toggleModal}
      />

      {/* Modal */}
      {isOpen && (
        <div
          id="modal-overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleOutsideClick}
        >
          <div className="relative max-w-full max-h-full p-4 bg-white rounded shadow-lg">

            <img
              src={src}
              alt={alt}
              className="max-w-screen max-h-screen object-contain"
            />

            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;