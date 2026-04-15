import React, { useState } from 'react'
import "../../styles/adminUsers.css"
import { useGetUsers } from "../../hooks/useGetUsers";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import UserFormAdmin from "../UserFormAdmin";



function AdminUsuarios() {
  const { users, error, refetch } = useGetUsers();
  
  const { deleteUser, loading: deleting } = useDeleteUser();

  const [showForm, setShowForm] = useState(false)

  const handleDelete = async (id) => {
       const result = await deleteUser(id)
       
       
       if(result.success){
        refetch()
       } else {
        alert(result.error)
       }
  }
  
  const handleSuccess = () => {
    setShowForm(false)
    refetch()
  }
  if (error)
    return (
      <div className="admin-page">
        
        <p className="error-text">Error: {error}</p>
      </div>
    );
  return (
    <>
      <div class="admin-page">
        <h2>Administración de Usuarios</h2>
        <div class="form-head-users">
          <button className="btn-add" onClick={() => setShowForm(true)} >+ Nuevo usuario</button>
        </div>
        {showForm && (
        <div className="admin-modal">
          <div className="modal-content">
            <UserFormAdmin 
              onSuccess={handleSuccess} 
              onCancel={() => setShowForm(false)} 
            />
          </div>
        </div>
      )}

      <table className="admin-table">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {users.map((u) => (
                <tr key={u._id}>
                    <td> {u.name} {u.lastName} </td>
                    <td> {u.email} </td>
                    <td> <span className={`role-badge role-${u.role}`}> {u.role} </span> </td>
                    <td> <button onClick={() => handleDelete(u._id)} disabled={deleting} > { deleting ? "..." : "Eliminar" } </button> </td>
                </tr>
            ) )}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default AdminUsuarios
