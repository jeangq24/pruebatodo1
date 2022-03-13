import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from './components/home/Home';
import CardPokemonName from "./components/home/PokemonName";
import NotFound from "./components/notfound/NotFound";
export default() =>{
  const [urlTypePokemon, setUrlTypemon] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path='/' element={<Home setUrlTypemon={setUrlTypemon}/>}/>
        <Route  exact path="/typepokemon" element={<CardPokemonName urlTypePokemon={urlTypePokemon}/>}/>
        <Route  path="/*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

