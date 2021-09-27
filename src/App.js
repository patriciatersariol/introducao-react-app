import React from "react"
import { useState } from "react"
import Input from "./components/Input"
import Button from "./components/Button"
import "./App.css"
import Table from "./components/Table"

const App = () => {
  const initUser = [
    {
      name: "ciclano da Silva",
      email: "fulana@gmail.com",
      password: "123abc"
    }
  ]

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState(initUser)

  const onChangeName = ({ target }) => {
    setName(target.value)
    console.log(name)
  }

  const onChangeEmail = ({ target }) => {
    setEmail(target.value)
    console.log(email)
  }

  const onChangePassword = ({ target }) => {
    setPassword(target.value)
    console.log(password)
  }

  const handleSend = () => {
    console.log("fUI APERTADO")
    const itensCopy = Array.from(users)
    // itensCopy.push({
    //   name: name,
    //   email: email,
    //   password: password
    // })
    // setUsers(itensCopy)
    fetch("http://localhost:3030/usuario", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: {
        name: name,
        email: email,
        password: password
      }
    })
      .then((res) => res.json())
      .then((res) =>
        fetch("http://localhost:3030/usuario")
          .then((res) => res.json())
          .then((res) => setUsers(res.users))
      )

    setName("")
    setPassword("")
    setEmail("")
  }

  return (
    <div className="app">
      <div className="box-input">
        <p className="title">Formulário de Cadastro</p>
        <div className="input-body">
          <div className="box-inputs">
            <Input
              placeholder="Nome: "
              type="text"
              value={name}
              onChange={onChangeName}
            />
            <Input
              placeholder="Email: "
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
            <Input
              placeholder="Senha: "
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            <Button text="ENVIAR" onClick={handleSend} />
          </div>
        </div>
      </div>
      <Table setUsers={setUsers} users={users}></Table>
    </div>
  )
}

export default App
