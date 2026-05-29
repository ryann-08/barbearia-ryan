import styles from './Unidade.module.css';
import cortandoBarba from '../../../assets/Rectangle14.png';
import barbearia from '../../../assets/barbearia1.jpg';
import cortandoCabelo from '../../../assets/Rectangle13.png'
const fotos = [
  {
    id: 1,
    url: cortandoBarba,
    alt: 'Barbeiro cortando barba',
  },
  {
    id: 2,
    url: barbearia,
    alt: 'estrutura barbearia',
  },
  {
    id: 3,
    url: cortandoCabelo,
    alt: 'Barbeiro cortando cabelo',
    
  },
];

function Unidade({ onAgendar }) {
  return (
    <section id="unidade" className={styles.unidade}>

      <div className={styles.cabecalho}>
        <h2 className={styles.titulo}>
          Explore a nossa<br />Unidade
        </h2>
        <p className={styles.subtitulo}>
          Cada detalhe foi pensado para refletir sofisticação,
          autenticidade e conforto. <br />Veja um pouco do ambiente
          que vai receber você na Barbearia Ryan.
        </p>
      </div>

      <div className={styles.galeria}>
        {fotos.map((foto) => (
          <div key={foto.id} className={styles.fotoContainer}>
            <img src={foto.url} alt={foto.alt} className={styles.foto} />
          </div>
        ))}
      </div>

      <div className={styles.botaoContainer}>
        <button onClick={onAgendar} className={styles.btnAgendar}>
          Agendar
        </button>
      </div>

    </section>
  );
}

export default Unidade;
