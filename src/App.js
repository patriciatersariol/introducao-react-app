import Input from "./components/Input"
import Button from "./components/Button"
import "./App.css"
import Table from "./components/Table"

const App = () => {
  return (
    <div className="app">
      <div className="box-input">
        <p className="title">Formulário de Cadastro</p>
        <div className="input-body">
          <div className="box-inputs">
            <Input placeholder="Nome: " type="text" />
            <Input placeholder="Email: " type="email" />
            <Input placeholder="Senha: " type="password" />
            <Button />
          </div>
        </div>
      </div>
      <Table></Table>
    </div>
  )
}

export default App
