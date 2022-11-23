import AgregarUsuario from "./AgregarUsuario";
import "./App.css";
import EditarUsuario from "./EditarUsuario";
import ListaUsuarios from "./ListaUsuarios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN STACK</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />}></Route>
          <Route path="/agregarusuario" element={<AgregarUsuario />}></Route>
          <Route path="/editarusuario" element={<EditarUsuario />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
