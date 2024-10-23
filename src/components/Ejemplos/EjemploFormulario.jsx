import { useState } from "react"

const EjemploFormulario = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const user = { name, email }

    console.log(user)
  }

  return (
    <form onSubmit={handleSubmitForm} >
      <input type="text" value={name} onChange={handleChangeName}  placeholder="nombre..." />
      <input type="email" value={email} onChange={handleChangeEmail} placeholder="email..." />

      <button type="submit">Enviar formulario</button>
    </form>
  )
}
export default EjemploFormulario