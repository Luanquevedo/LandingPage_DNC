import React from 'react'
import '../header/index.scss'

const Header = () => {
  return (
    <header className='header'>
        <img className='header__logo' src="logo.svg" alt="" />
        <div className='header__informatinaltext'>
            <h1>
                Dê os primeiros passos da<br />
                sua carreira em Tecnologia
            </h1>

            <p>Inscreva-se no curso gratuito de Introdução à <br />
                Tecnologia da DNC School e aprenda os principais <br />
                fundamentos para construir experiências efetivas.</p>
        </div>
    </header>
  )
}

export default Header