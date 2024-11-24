import { useEffect, useState } from 'react';

const useModal = () => {
  
  const [mounted, setMounted] = useState(false);

  const toggleModal = () => {
    setMounted(!mounted);
  };

  const backDropClose = (e) => {
    if (e.target === e.currentTarget) {
      setMounted(!mounted);
    }
  };

  useEffect(() => {
    const handleClose = (e) => {
      if (e.code === "Escape") {
        setMounted(!mounted);
        window.removeEventListener("keydown", handleClose);
      }
    };
    if (mounted) {
      window.addEventListener("keydown", handleClose);
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener("keydown", handleClose);
      document.body.style.overflow = 'auto'; 
    }
  }, [mounted]);

  return { mounted, toggleModal, backDropClose };
};

export default useModal;
