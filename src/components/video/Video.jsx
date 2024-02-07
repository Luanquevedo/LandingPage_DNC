import React from 'react'
import './index.scss'

const Video = () => {
  return (
    <section className='section'>
        <div className='section__Video'>
            <iframe width="502.6" height="282.8 " src="https://www.youtube.com/embed/_gOO9wnIE3s" title="Depoimento Aluno DNC - Formação em Projetos | Black November 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='section__Text'>
            <h1>Aprenda com especialistas e <br />
                comece seu primeiro projeto</h1>
            <p>Conheça o processo de desenvolvimento e entenda como utilizar <br />
                os principais métodos e ferramentas da área para resolver <br />
                problemas complexos.
                <br />
                <br />
                Conquiste seu certificado e desenvolva um projeto prático para <br /> 
                aplicar seus conhecimentos.</p>
        </div>
    </section>
  )
}

export default Video