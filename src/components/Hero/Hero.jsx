import styles from './Hero.module.css';

function Hero({ onAgendar }) {
  return (
    <section id="home" className={styles.hero}>

      <div className={styles.overlay}></div>

      {/*  texto sobre a imagem */}
      <div className={styles.conteudo}>
        <h1 className={styles.titulo}>
          Atendimento de{' '}
          <strong>qualidade</strong>, que<br />
         <strong> cabe no seu bolso</strong>
        </h1>

        {/* Botões de ação */}
        <div className={styles.botoes}>
          {/* Ao clicar em Agendar, abre a tela de login */}
          <button onClick={onAgendar} className={styles.btnAgendar}>
            Agendar
          </button>
          {/* Botão "Faça Parte" rola até a seção de trabalhe conosco */}
          <button
            onClick={() => {
              const el = document.getElementById('trabalhe');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={styles.btnFacaParte}
          >
            Faça Parte
          </button>
        </div>
      </div>

    </section>
  );
}

export default Hero;
