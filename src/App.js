import Input from "./components/Input"
import Button from "./components/Button"
import "./App.css"
import Table from "./components/Table"

const App = () => {
  const initUser = [{
    name: "ciclano da Silva",
    email: "fulana@gmail.com",
    password: "123abc"
  }]

  const onSubmit = () => {
    console.log("fUI APERTADO")
  }
  return (
    <div className="app">
      <div className="box-input">
        <p className="title">Formulário de Cadastro</p>
        <div className="input-body">
          <div className="box-inputs">
            <Input placeholder="Nome: " type="text" />
            <Input placeholder="Email: " type="email" />
            <Input placeholder="Senha: " type="password" />
            <Button text="ENVIAR" onClick={onSubmit} />
          </div>
        </div>
      </div>
      <Table users={initUser}></Table>
    </div>
  )
}


export default App