import styles from "./Footer.module.css";


function Footer() {
  // Função para rolar até seções ao clicar nos links
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className={styles.footer}>
     
      <div className={styles.conteudo}>
        <div className={styles.coluna}>
          <div className={styles.logoArea}>
            <span className={styles.logoTexto}>Barbearia</span>
            <span className={styles.logoDestaque}> Estilo</span>
          </div>
          <p className={styles.descricao}>
            Mais que um corte, uma Experiência.
            <br />
            Estilo que acompanha você.
          </p>
          {/* Ícones de redes sociais */}
          <div className={styles.redesSociais}>
            {/* WhatsApp */}
            <a href="#" className={styles.iconeLink} aria-label="WhatsApp">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.icone}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.12 1.523 5.856L0 24l6.29-1.499A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.518-5.166-1.42l-.371-.22-3.733.889.936-3.612-.242-.381A9.934 9.934 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className={styles.iconeLink} aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.icone}
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ryann_____08?igsh=dW1nODJxNW1vMXcw"
              className={styles.iconeLink}
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.icone}
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna 2: Links rápidos */}
        <div className={styles.coluna}>
          <h4 className={styles.colunaTitulo}>Links Rapidos</h4>
          <ul className={styles.lista}>
            <li>
              <button
                onClick={() => scrollToSection("servicos")}
                className={styles.linkBtn}
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("unidade")}
                className={styles.linkBtn}
              >
                Unidade
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contato")}
                className={styles.linkBtn}
              >
                Contato
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("trabalhe")}
                className={styles.linkBtn}
              >
                Trabalhe conosco
              </button>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className={styles.coluna}>
          <h4 className={styles.colunaTitulo}>Contato</h4>
          <ul className={styles.lista}>
            <li className={styles.itemTexto}>(11) 99999-9999</li>
            <li className={styles.itemTexto}>barbearia2026@gmail.com</li>
            <li className={styles.itemTexto}>Rua Tito, 54 – Lapa</li>
            <li className={styles.itemTexto}>São Paulo – SP</li>
          </ul>
        </div>

        {/* Coluna 4: Horários */}
        <div className={styles.coluna}>
          <h4 className={styles.colunaTitulo}>Funcionamento</h4>
          <ul className={styles.lista}>
            <li className={styles.itemTexto}>Seg a sex 09H Às 20H</li>
            <li className={styles.itemTexto}>Sab 8H Às 18H</li>
            <li className={styles.itemTexto}>Dom Fechado</li>
          </ul>
        </div>
      </div>

      {/* Linha divisória */}
      <div className={styles.divisor}></div>

      {/* Direitos autorais */}
      <p className={styles.copyright}>
        © 2026 Barbearia Estilo. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
