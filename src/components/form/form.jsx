import React from 'react';
import './index.scss';

const Form = () => {
  return (
    <section className='form'>
      <form action="">
        <h1>Comece agora mesmo e dê o próximo passo da sua carreira</h1>
        <div className='form__inputs'>
          <input type="text" placeholder='Nome' /> 
          <input type="email" placeholder='E-mail' /> 
          <input type="tel" placeholder='Telefone' /> 
        </div>
        <div className='form__button'>
          <button>Acesse a ementa grátis</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
