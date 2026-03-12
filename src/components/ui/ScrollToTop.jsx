import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força a página a voltar para o topo (x: 0, y: 0) sempre que o caminho mudar
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}