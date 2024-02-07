import React, { useState } from 'react'; // Importação do React e do useState para gerenciar o estado
import './index.scss'; // Importação do estilo SCSS associado

// Componente funcional Carrossel
const Carrossel = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Estado para controlar o índice do cartão atual

  // Função para avançar para o próximo cartão
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % 3); // Incrementa o índice atual e garante que permaneça dentro do intervalo 0-2
  };

  // Função para retroceder para o cartão anterior
  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1)); // Se o índice atual for 0, retorna 2; caso contrário, decrementa o índice atual
  };

  // Retorno do JSX com a estrutura do carrossel
  return (
    <section className='carrosel'>
      {/* Botão para retroceder para o cartão anterior, chamando a função prevCard quando clicado */}
      <button className="prev" onClick={prevCard}><img src="setaddireita.svg" alt="" /></button>
      {/* Div para conter os cartões */}
      <div className='carrosel__cards'>
        {/* Mapeamento dos índices dos cartões */}
        {[0, 1, 2].map((index) => (
          <img className='carrosel__img' // Imagem do cartão
            key={index} // Chave única para o mapeamento
            src={`card${index === 0 ? 'Bruna' : index === 1 ? 'Leonardo' : 'Samantha'}.svg`} // Fonte da imagem com base no índice
            alt="Error" // Texto alternativo da imagem
            style={{
              display: Math.abs(currentCardIndex - index) < 2 ? 'block' : 'none' // Determina se o cartão deve ser exibido com base no índice atual
            }}
          />
        ))}
      </div>
      {/* Botão para avançar para o próximo cartão, chamando a função nextCard quando clicado */}
      <button className="next" onClick={nextCard}><img src="setaesquerda.svg" alt="" /></button>
    </section>
  );
};

export default Carrossel; // Exporta o componente Carrossel
