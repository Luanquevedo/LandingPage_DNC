import React from 'react'
import '../header/index.scss'
import './index.scss'


const Info = () => {
  return (
    <section className='geral'>
        <div className='geral__info'>
            <div className='geral__itens'>
                <img src='certificado.svg' alt="Error" />
                <p>Certificado de conclusão</p>
            </div>
            <div className='geral__itens'>
                <img src='relogio.svg' alt="Error" />
                <p>4 horas de conteúdo</p>
            </div>
            <div className='geral__itens'>
                <img src='camera.svg' alt="Error" />
                <p>Aulas online gravadas</p>
            </div>
        </div>
    </section>
  )
}

export default Info