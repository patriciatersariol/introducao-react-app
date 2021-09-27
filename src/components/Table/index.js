import React from "react"
import "./table.css"
import Button from "../Button"
const Table = ({ users }) => {
    return (
        <table className="table">
            <tr className="table-row">
                <th className="table-column">NOME</th>
                <th className="table-column">EMAIL</th>
                <th className="table-column">SENHA</th>
                <th className="table-column last-column" colspan="2">AÇÕES</th>
            </tr>
            {
                users.map(user => {
                    return (
                        <tr className="user-row">
                            <td className="user-column">{user.name}</td>
                            <td className="user-column">{user.email}</td>
                            <td className="user-column">{user.password}</td>
                            <td className="user-column"><Button classe="btn-edit" text="EDITAR" /></td>
                            <td className="user-column"><Button classe="btn-delete" text="EXCLUIR" /></td>

                        </tr>
                    )
                })
            }
        </table>

    )
}

export default Table
