import Input from "./components/Input"
import Button from "./components/Button"
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <div className="box-input">
        <p>Formulário de Cadastro</p>
        <div className="input-body">
          <div className="input">
            <Input placeholder="Nome: " />
            <Input placeholder="Email: " />
            <Input placeholder="Senha: " />
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
