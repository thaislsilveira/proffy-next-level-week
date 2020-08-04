import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/34002389?s=460&u=87794bfaceacc304760b3329b20af09ed10e2c1b&v=4"
          alt="Thaís Silveira"
        />
        <div>
          <strong>Thais Silveira</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>Apaixonada por números.</p>
      <br />
      <br />
      <p>Focada em sempre proporcionar o melhor conteúdo para seus alunos</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00 </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
