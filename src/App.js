import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ListaTV from "./components/ListaTV/ListaTV";
import Footer from "./components/Footer/Footer";
import Favoritos from "./components/Favoritos/Favoritos";
import Resultado from "./components/Resultado/Resultado";
import { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
//CSS
import "./css/bootstrap.min.css";

function App() {
  const [favoritos, setFav] = useState([]);

    useEffect(()=> {

        let moviesStorage = localStorage.getItem('favs');

        if(moviesStorage !== null){
            let movieArray = JSON.parse(moviesStorage);
            setFav(movieArray);
        }
    }, [])

  const favMovies = localStorage.getItem('favs');

  let peliculasFav;

  if (favMovies === null) {
    peliculasFav = [];
  } else {
    peliculasFav = JSON.parse(favMovies);
  }

  
  const addOrRemoveFavs = e => {
    const btn = e.currentTarget;
    const parentBtn = btn.parentElement;

    let img = parentBtn.querySelector('img').getAttribute('src')
    let nombre = parentBtn.querySelector('h5').innerText;

    let movieObj = {
      id: btn.dataset.movieid,
      img, nombre
    };

    let existMovie = peliculasFav.some( pelicula => {
      return pelicula.id === movieObj.id;
    } )

     if(!existMovie){
       peliculasFav.push(movieObj);
       swal('Agregado a favoritos')
       localStorage.setItem('favs', JSON.stringify(peliculasFav));
       setFav(peliculasFav);

     }else{   
        let movieOut = peliculasFav.filter( pelicula => {
          return pelicula.id !== movieObj.id;
        })
        swal('Eliminado de favoritos')
        localStorage.setItem('favs', JSON.stringify(movieOut));
        setFav(movieOut);

     }

  }


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canales" element={<ListaTV addOrRemoveFavs={ addOrRemoveFavs }/>} />
        <Route path="/favoritos" element={<Favoritos favoritos={ favoritos } addOrRemoveFavs={ addOrRemoveFavs } />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
