import React from 'react'
import Background from './../../assets/images/background.svg'

const Login = () => {
  return (
    <div className="container">
    <div className="foto">
      <img src={Background} />
    </div>

    <div className="cadastro">
      <div className="title">
        <h2>Entrar</h2>
        <p>Seja bem vindo!</p>
      </div>
      <div className="form">
        <form>
          
          <div className="espac-box">
            <input type="email" placeholder="Email" />
          </div>

          <div className="espac-box">
            <input type="password" placeholder="Senha" />
          </div>

          <div className="chek-box">
            <input type="checkbox" value="Lembrar minha senha"  />
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

export default Login
