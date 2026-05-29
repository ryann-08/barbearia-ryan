import styles from './Servicos.module.css';

// Lista de serviços da barbearia
// Cada serviço tem: nome, descrição, preço, tempo e id único
const listaServicos = [
  {
    id: 1,
    nome: 'Corte Clássico',
    descricao: 'Corte personalizado com acabamento impecável e lavagem inclusa.',
    preco: 'R$ 45',
    tempo: '45 – 60 Minutos',
  },
  {
    id: 2,
    nome: 'Barba Tradicional',
    descricao: 'Toalha quente, navalha e finalização com óleo premium.',
    preco: 'R$ 35',
    tempo: '30 – 50 Minutos',
  },
  {
    id: 3,
    nome: 'Combo Completo',
    descricao: 'Corte + barba + hidratação capilar. A experiência completa.',
    preco: 'R$ 69',
    tempo: '75 – 90 Minutos',
  },
];

function Servicos({ onAgendar }) {
  return (
    <section id="servicos" className={styles.servicos}>

      <h2 className={styles.titulo}>Escolha o serviço</h2>

      <div className={styles.grade}>
        {listaServicos.map((servico) => (
          <div key={servico.id} className={styles.card}>

            <h3 className={styles.cardNome}>{servico.nome}</h3>

            <p className={styles.cardDescricao}>{servico.descricao}</p>

            <div className={styles.cardRodape}>
              <span className={styles.preco}>{servico.preco}</span>
              <button onClick={onAgendar} className={styles.btnAgendar}>
                Agendar
              </button>
            </div>

            <span className={styles.tempo}>{servico.tempo}</span>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Servicos;
