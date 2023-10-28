import "./App.css";
import { NavBar } from "./components/NavBar";
import { QuienesSomos } from "./components/QuienesSomos";
import { Formulario } from "./components/Formulario";
import { Footer } from "./components/Footer";
import { Portada } from "./components/Portada";



function App() {
  return (
    <>
      {/* <AppRoutes /> */}
      <NavBar />
      <Portada />
      <QuienesSomos />
      <Formulario />
      <Footer />
    </>
  );
}

export default App;
