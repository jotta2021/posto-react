import Background from '../../assets/images/background.svg'
import React from 'react'

import './cadastro.css'
export default function Cadastro() {
  return (
    <div className="container">
      <div className="foto">
        <img src={Background} />
      </div>

      <div className="cadastro">
        <div className="title">
          <h2>Criar conta</h2>
          <p>Crie sua conta e aproveite nossos serviços</p>
        </div>
        <div className="form">
          <form>
            <div className="espac-box">
              <input type="text" placeholder="Nome" />
            </div>
            <div className="espac-box">
              <input type="email" placeholder="Email" />
            </div>
            <div className="espac-box">
              <input type="text" name='cpf' placeholder="000.000.000-00" />
            </div>
            <div className="espac-box">
              <input type="number" name='unidade-atendimento' placeholder="Unidade de atendimento" />
            </div>
            <div className="espac-box">
              <input type="text" name='nascimento' placeholder="Data de nascimento" />
            </div>
            <div className="espac-box">
              <input type="password" placeholder="Crie uma senha" />
            </div>

            <div className="button-cad">
              <input type="submit" value="Criar conta" />
            </div>

            <div className="footer">
              <p>Já possui uma conta?</p>
         <a href='/login'>Entrar</a>
        
         
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
