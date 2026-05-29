import { useState } from 'react';
import styles from './Agendamento.module.css';

// Lista de barbeiros disponíveis
const barbeiros = [
  { id: 1, nome: 'Ryan almeida', especialidade: 'Corte e Barba' },
  { id: 2, nome: 'Ryan almeida', especialidade: 'Corte Clássico' },
  { id: 3, nome: 'Ryan almeida', especialidade: 'Corte e Penteado' },
];

// Serviços disponíveis para agendamento
const servicos = [
  { id: 1, nome: 'Corte Clássico', preco: 'R$ 45', tempo: '45–60 min' },
  { id: 2, nome: 'Barba Tradicional', preco: 'R$ 35', tempo: '30–50 min' },
  { id: 3, nome: 'Combo Completo', preco: 'R$ 69', tempo: '75–90 min' },
];

// Horários disponíveis
const horarios = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

// Tela de Agendamento - aparece após o login
// Recebe "onVoltar" para voltar para a página inicial
function Agendamento({ onVoltar }) {
 
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState(null);
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  
  const [confirmado, setConfirmado] = useState(false);

  
  function handleConfirmar() {
    // Verifica se todos os campos foram preenchidos
    if (!servicoSelecionado || !barbeiroSelecionado || !data || !horario) {
      alert('Por favor, preencha todos os campos para agendar.');
      return;
    }

   
    setConfirmado(true);
  }

  // Se o agendamento foi confirmado, mostra a tela de sucesso
  if (confirmado) {
    return (
      <div className={styles.paginaSucesso}>
        <div className={styles.cardSucesso}>
          {/* Ícone de check */}
          <div className={styles.iconeCheck}>✓</div>
          <h2 className={styles.tituloSucesso}>Agendamento Confirmado!</h2>
          <p className={styles.textoSucesso}>
            Seu horário foi reservado com sucesso.<br />
            Até logo!
          </p>
          
          <div className={styles.resumo}>
            <p><strong>Serviço:</strong> {servicos.find(s => s.id === servicoSelecionado)?.nome}</p>
            <p><strong>Barbeiro:</strong> {barbeiros.find(b => b.id === barbeiroSelecionado)?.nome}</p>
            <p><strong>Data:</strong> {data}</p>
            <p><strong>Horário:</strong> {horario}</p>
          </div>
          <button onClick={onVoltar} className={styles.btnVoltar}>
            Voltar para o início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pagina}>

      {/* Cabeçalho da tela de agendamento */}
      <div className={styles.cabecalho}>
        <button onClick={onVoltar} className={styles.btnVoltarTopo}>
          {/* Seta para voltar */}
          ← Voltar
        </button>
        <h1 className={styles.titulo}>Agendar Serviço</h1>
        <p className={styles.subtitulo}>Escolha o serviço, barbeiro, data e horário de sua preferência</p>
      </div>

      <div className={styles.conteudo}>

        {/* Passo 1: Escolher serviço */}
        <div className={styles.passo}>
          <h2 className={styles.passoTitulo}>
            <span className={styles.numeroPasso}>1</span>
            Escolha o Serviço
          </h2>
          <div className={styles.gradeServicos}>
            {servicos.map((servico) => (
              <button
                key={servico.id}
                onClick={() => setServicoSelecionado(servico.id)}
                className={`${styles.cardServico} ${servicoSelecionado === servico.id ? styles.selecionado : ''}`}
              >
                <span className={styles.servicoNome}>{servico.nome}</span>
                <span className={styles.servicoPreco}>{servico.preco}</span>
                <span className={styles.servicoTempo}>{servico.tempo}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Passo 2: Escolher barbeiro */}
        <div className={styles.passo}>
          <h2 className={styles.passoTitulo}>
            <span className={styles.numeroPasso}>2</span>
            Escolha o Barbeiro
          </h2>
          <div className={styles.gradeBarbeiros}>
            {barbeiros.map((barbeiro) => (
              <button
                key={barbeiro.id}
                onClick={() => setBarbeiroSelecionado(barbeiro.id)}
                className={`${styles.cardBarbeiro} ${barbeiroSelecionado === barbeiro.id ? styles.selecionado : ''}`}
              >
                {/* Avatar com a inicial do nome */}
                <div className={styles.avatar}>
                  {barbeiro.nome.charAt(0)}
                </div>
                <span className={styles.barbeiroNome}>{barbeiro.nome}</span>
                <span className={styles.barbeiroEspecialidade}>{barbeiro.especialidade}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Passo 3: Escolher data e horario */}
        <div className={styles.passo}>
          <h2 className={styles.passoTitulo}>
            <span className={styles.numeroPasso}>3</span>
            Data e Horário
          </h2>
          <div className={styles.dataHorario}>

            {/* Campo de data */}
            <div className={styles.campoData}>
              <label className={styles.label}>Selecione a Data</label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                min={new Date().toISOString().split('T')[0]} /* aqui vai proibir datas passadas */
                className={styles.inputData}
              />
            </div>

            {/* Horários disponíveis */}
            <div className={styles.horarios}>
              <label className={styles.label}>Selecione o Horário</label>
              <div className={styles.gradeHorarios}>
                {horarios.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHorario(h)}
                    className={`${styles.btnHorario} ${horario === h ? styles.horarioSelecionado : ''}`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Botão final de confirmar */}
        <div className={styles.rodape}>
          <button onClick={handleConfirmar} className={styles.btnConfirmar}>
            Confirmar Agendamento
          </button>
        </div>

      </div>

    </div>
  );
}

export default Agendamento;
