import { useState } from 'react';
import styles from './TrabalheConosco.module.css';
import cortandoTesoura from '../../../assets/Rectangle33.png'

function TrabalheConosco() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    mensagem: '',
  });

  //  mostrar uma mensagem de sucesso após enviar
  const [enviado, setEnviado] = useState(false);

  // Atualiza o campo do formulário quando o usuário digita
  function handleChange(e) {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  }

  // Simular o envio do formulário
  function handleSubmit(event) {
    event.preventDefault(); 
    console.log('Formulário enviado:', formulario);
    setEnviado(true); 

    // Limpa o formulário após 3 segundos
    setTimeout(() => {
      setFormulario({ nome: '', email: '', telefone: '', cidade: '', mensagem: '' });
      setEnviado(false);
    }, 3000);
  }

  return (
    <section id="trabalhe" className={styles.secao}>

      <h2 className={styles.titulo}>Trabalhe conosco</h2>

      <p className={styles.descricao}>
        Quer fazer parte do nosso time? Se você é apaixonado por estilo, cortes impecáveis
        e quer crescer junto com a gente, preencha os campos abaixo. Estamos sempre em
        busca de novos talentos!
      </p>

      <div className={styles.layout}>

        <div className={styles.fotoContainer}>
          <img
            src={cortandoTesoura}
            alt="Barbeiro trabalhando"
            className={styles.foto}
          />
        </div>

        <form onSubmit={handleSubmit} className={styles.formulario}>

          {/* Campo Nome */}
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formulario.nome}
            onChange={handleChange}
            required
            className={styles.campo}
          />

          {/* Campo E-mail */}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formulario.email}
            onChange={handleChange}
            required
            className={styles.campo}
          />

          {/* Campo Telefone */}
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formulario.telefone}
            onChange={handleChange}
            className={styles.campo}
          />

          {/* Campo Cidade */}
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={formulario.cidade}
            onChange={handleChange}
            className={styles.campo}
          />

          {/* Campo Mensagem */}
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={formulario.mensagem}
            onChange={handleChange}
            rows={5}
            className={`${styles.campo} ${styles.textarea}`}
          ></textarea>

          {/* Mensagem de sucesso */}
          {enviado && (
            <p className={styles.mensagemSucesso}>
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          )}

          <div className={styles.botaoContainer}>
            <button type="submit" className={styles.btnEnviar}>
              Enviar
            </button>
          </div>

        </form>

      </div>

    </section>
  );
}

export default TrabalheConosco;
