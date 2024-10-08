import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ContadorContainer from './components/Ejemplos/ContadorContainer'
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos a la semana 2"} />

      <ContadorContainer />
    </div>
  )
}

export default App
