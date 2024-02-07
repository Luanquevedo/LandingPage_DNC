import React from 'react'
import './index.scss'
import Header from '../../components/header/Header'
import Info from '../../components/info/info'
import Video from '../../components/video/Video'
import Carrosel from '../../components/carrosel/carrosel'
import Form from '../../components/form/form'

const Home = () => {
  return (
    <section>
        <Header/>
        <Info/>
        <Video/>
        <Carrosel/>
        <Form/>    
    </section>
  )
}

export default Home
