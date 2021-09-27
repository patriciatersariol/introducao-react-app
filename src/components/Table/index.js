import React from "react"
import "./table.css"
import Button from "../Button"
const Table = ({ users, setUsers }) => {
  const handleDelete = (indice) => {
    const newUsers = users.filter((user, i) => i !== indice)
    setUsers(newUsers)
  }

  const handleEdit = () => {
    console.log("EDIT CLICADO")
  }

  return (
    <table className="table">
      <thead>
        <tr className="table-row">
          <th className="table-column">NOME</th>
          <th className="table-column">EMAIL</th>
          <th className="table-column">SENHA</th>
          <th className="table-column last-column" colSpan="2">
            AÇÕES
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, indice) => {
          return (
            <tr key={user.email} className="user-row">
              <td className="user-column">{user.name}</td>
              <td className="user-column">{user.email}</td>
              <td className="user-column">{user.password}</td>
              <td className="user-column">
                <Button classe="btn-edit" text="EDITAR" onClick={handleEdit} />
              </td>
              <td className="user-column">
                <Button
                  classe="btn-delete"
                  text="EXCLUIR"
                  onClick={() => handleDelete(indice)}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
