import { useState } from 'react';
import styles from './Login.module.css';

// Tela de Login - aparece quando o usuário clica em "Agendar"
function Login({ onLoginSucesso, onFechar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarMe, setLembrarMe] = useState(false);

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [erro, setErro] = useState('');
  //  alternar entre Login e Cadastro
  const [modoCadastro, setModoCadastro] = useState(false);
  // Função chamada ao clicar em "Entrar"
  function handleLogin(event) {
    event.preventDefault(); 

    
    if (!email || !senha) {
      setErro('Por favor, preencha todos os campos.');
      return;
    }

    // Simula o login com sucesso (sem backend real)
    setErro('');
    console.log('Login simulado com:', email);
    onLoginSucesso();
  }

  return (
   
    <div className={styles.overlay} onClick={onFechar}>

      <div className={styles.card} onClick={(e) => e.stopPropagation()}>

        <button className={styles.btnFechar} onClick={onFechar}>
          ✕
        </button>

        <h1 className={styles.titulo}>{modoCadastro ? 'Cadastro' : 'Login'}</h1>
        <p className={styles.subtitulo}>
          {modoCadastro
            ? 'Crie sua conta para continuar.'
            : 'Bem-vindo de volta!\nFaça login para continuar.'}
        </p>

        <form onSubmit={handleLogin} className={styles.formulario}>

          {modoCadastro && (
            <div className={styles.campoGrupo}>
              <label className={styles.label}>Nome</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className={styles.input}
                />
                {/* Ícone de usuário */}
                <svg className={styles.inputIcone} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* Campo de E-mail */}
          <div className={styles.campoGrupo}>
            <label className={styles.label}>E-mail</label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              {/* Ícone de envelope */}
              <svg className={styles.inputIcone} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Campo de Senha */}
          <div className={styles.campoGrupo}>
            <label className={styles.label}>Senha</label>
            <div className={styles.inputWrapper}>
             
              <input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={styles.input}
              />
              {/* Ícone de cadeado */}
              <svg className={styles.inputIcone} style={{ left: 'auto', right: '44px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {/* Botao para mostrar/ocultar senha */}
              <button
                type="button"
                className={styles.btnVerSenha}
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {/* Ícone d0 olho */}
                {mostrarSenha ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Lembrar-me e Esqueceu a senha (so no login) */}
          {!modoCadastro && (
            <div className={styles.opcoes}>
              <label className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={lembrarMe}
                  onChange={(e) => setLembrarMe(e.target.checked)}
                  className={styles.checkbox}
                />
                Lembrar-me
              </label>
              <button type="button" className={styles.linkEsqueceu}>
                Esqueceu sua senha?
              </button>
            </div>
          )}

          {erro && <p className={styles.erro}>{erro}</p>}

          <button type="submit" className={styles.btnEntrar}>
            {modoCadastro ? 'Criar conta' : 'Entrar'}
          </button>

        </form>

        {/* Link para alternar entre login e cadastro */}
        <p className={styles.rodape}>
          {modoCadastro ? 'Já tem uma conta? ' : 'Ainda não tem uma conta? '}
          <button
            type="button"
            className={styles.linkCadastro}
            onClick={() => {
              setModoCadastro(!modoCadastro);
              setErro('');
            }}
          >
            {modoCadastro ? 'Entrar' : 'Cadastre-se'}
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;
