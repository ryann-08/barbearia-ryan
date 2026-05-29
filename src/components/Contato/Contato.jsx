import styles from './Contato.module.css';


function Contato() {
  return (
    <section id="contato" className={styles.contato}>
     
    
      <div className={styles.cardsContainer}>

        {/* Card do WhatsApp */}
        <div className={styles.card}>
          <div className={styles.cardTopo}>
            <h3 className={styles.cardTitulo}>WhatsApp</h3>
          </div>
          <div className={styles.cardConteudo}>
            <p className={styles.cardTexto}>
              Atendimento direto<br />pelo WhatsApp
            </p>
            {/* Ícone de WhatsApp usando SVG */}
            <svg className={styles.icone} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.12 1.523 5.856L0 24l6.29-1.499A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.518-5.166-1.42l-.371-.22-3.733.889.936-3.612-.242-.381A9.934 9.934 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </div>
        </div>

        {/* Card do Endereço */}
        <div className={styles.card}>
          <div className={styles.cardTopo}>
            <h3 className={styles.cardTitulo}>Endereço</h3>
          </div>
          <div className={styles.cardConteudo}>
            <p className={styles.cardTexto}>
              Rua Tito, 54 – Lapa<br />São Paulo – SP
            </p>
            {/* Ícone de mapa */}
            <svg className={styles.icone} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
        </div>

        {/* Card de Funcionamento */}
        <div className={styles.card}>
          <div className={styles.cardTopo}>
            <h3 className={styles.cardTitulo}>Funcionamento</h3>
          </div>
          <div className={styles.cardConteudo}>
            <p className={styles.cardTexto}>
              Seg a sex 09H Às 20H<br />Sab 8H Às 18H
            </p>
            {/* Ícone de relógio */}
            <svg className={styles.icone} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
        </div>

      </div>

      {/* Mapa do Google Maps*/}
      <div className={styles.mapaContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1227833051876!2d-46.69433512489202!3d-23.528085878822672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1780002077223!5m2!1spt-BR!2sbr"
          className={styles.mapa}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

       <div className={styles.entreContato}>
        <h2 className={styles.botaoContatos}>Entre em contato</h2>
      </div>


    </section>
  );
}

export default Contato;
