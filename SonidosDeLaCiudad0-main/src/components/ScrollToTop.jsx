// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // va al principio de la página
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null; // este componente no pinta nada
};

export default ScrollToTop;
