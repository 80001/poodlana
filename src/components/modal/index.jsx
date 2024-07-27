import React, { useRef, useEffect } from 'react';

const Modal = ({ type, isOpen, onClose, children }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content" ref={modalRef}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
