import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
  const [idPokemon, setIdPokemon] = useState("");
  const [listaPokemon, setListaPokemon] = useState([]);
  const navigate = useNavigate();
  
  const getPokemon = async() => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await res.json();

    let dataSelect = [];
    data.results.map((pokemon) => {
      dataSelect.push({url:pokemon.url, nombre: pokemon.name})
    });

    setListaPokemon(dataSelect);

    }

    const verDetalle = () => {

      let id = idPokemon.replace('https://pokeapi.co/api/v2/pokemon/','')
      id = id.replace('/', '')
      navigate(`/pokemones/${id}`);
      
    }

  useEffect(() => {
    getPokemon();
  }, [])
  


  return (
    <div className="pokemonView">
        <h1>Seleciona un Pokemón</h1>
        <select className='picklist' name='id' id='id' onChange={(e) => setIdPokemon(e.target.value)}>
          <option value="">Pokemones</option>
         {
          listaPokemon.map((p) => <option key={p.url} value={p.url}>{p.nombre}</option>)
         }
          
        </select>
        <Button className='botondetalle'  onClick={(e)=> verDetalle()}> Ver detalle </Button>
    </div>
  )
}

export default Pokemones
