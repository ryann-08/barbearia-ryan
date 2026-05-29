import { useState, useEffect } from 'react';
import styles from './Header.module.css';


function Header({ onAgendar }) {
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    function handleScroll() {
      // Se rolou mais de 50px, ativa o fundo escuro na navbar
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

   
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        {/* Logo no canto esquerdo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>Barbearia</span>
          <span className={styles.logoDestaque}> Ryan</span>
        </div>

        {/* Links de navegação no canto direito */}
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('home')} className={styles.navLink}>
            Home
          </button>
          <button onClick={() => scrollToSection('servicos')} className={styles.navLink}>
            Serviços
          </button>
          <button onClick={() => scrollToSection('unidade')} className={styles.navLink}>
            Unidade
          </button>
          <button onClick={() => scrollToSection('contato')} className={styles.navLink}>
            Contato
          </button>
          {/* Botão "Faça parte" leva para a seção de trabalhe conosco */}
          <button onClick={() => scrollToSection('trabalhe')} className={styles.navLink}>
            Faça parte
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Header;
