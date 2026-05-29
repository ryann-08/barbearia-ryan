import { useState } from 'react';

// Importando todos os componentes da página
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Servicos from './components/Servicos/Servicos';
import Unidade from './components/Unidade/Unidade';
import Contato from './components/Contato/Contato';
import TrabalheConosco from './components/TrabalheConosco/TrabalheConosco';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Agendamento from './components/Agendamento/Agendamento';

function App() {
  const [loginAberto, setLoginAberto] = useState(false);
  const [tela, setTela] = useState('home');

  // Função chamada quando o usuário clica em "Agendar" em qualquer lugar
  function handleAbrirLogin() {
    setLoginAberto(true);
  }

  function handleFecharLogin() {
    setLoginAberto(false);
  }

  // Função chamada quando o login é bem-sucedido
  function handleLoginSucesso() {
    setLoginAberto(false);
    setTela('agendamento');
  }

  // Função para voltar para a página principal
  function handleVoltarParaHome() {
    setTela('home');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

 
  if (tela === 'agendamento') {
    return <Agendamento onVoltar={handleVoltarParaHome} />;
  }

  return (
    <div>
      {/* Navbar fixa no topo */}
      <Header onAgendar={handleAbrirLogin} />

      <Hero onAgendar={handleAbrirLogin} />

      <Servicos onAgendar={handleAbrirLogin} />

      <Unidade onAgendar={handleAbrirLogin} />

      <Contato />

      <TrabalheConosco />

      <Footer />

      {loginAberto && (
        <Login
          onLoginSucesso={handleLoginSucesso}
          onFechar={handleFecharLogin}
        />
      )}
    </div>
  );
}

export default App;
