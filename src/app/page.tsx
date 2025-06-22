"use client";

import { useState } from "react";

export default () => {
  const [userName, setUserName] = useState('marcos');
  const [password, setPassword] = useState('123');

  const doSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);

    // validar dados de login useState já executa as linhas abaixo
    // let _userName = e.target.txtUser.value;
    // let _userPwd = e.target.txtPassword.value;

    let accessGranted = validateLogin(userName, password);

    if (accessGranted) console.log("Acesso liberado!");
    else console.log("Acesso negado!");

    MainPage();
  };

  return (
    <form onSubmit={doSubmit}>
      <div className="" id="divMain">
        <div className="" id="divLogin">
          <div className="" id="divInputUser">
            <label htmlFor="txtUser" className="">
              <input id="txtUser" value={userName} type="text" placeholder="nome usuário" />
            </label>
          </div>
          <div className="" id="divInputPwd">
            <label htmlFor="txtPassword" className="">
              <input id="txtPassword" value={password} type="password" placeholder="senha" />
            </label>
          </div>
          <div className="">
            <button type="submit">Entrar</button>
          </div>
        </div>
      </div>
    </form>
  );
};

function validateLogin(_userName: any, _userPwd: any) {
  if (!_userName || !_userPwd) {
    console.log("Erro de login: Usuário ou senha invalidos");
    return false;
  }

  // validação do dev
  if (_userName === "marcos" && _userPwd === "123") return true;
  return false;
}
function goOtherPage() {
  throw new Error("Function not implemented.");
}
