import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Detalle = () => {
  const [pokemon, setPokemon] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  const getPokemon = async() => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json();

    setPokemon(data);
    setCargando(false);
  }
  useEffect(() => {
    getPokemon();
  }, [])



  return (
    cargando ?
    <h1>Cargando Datos...</h1> :
    <div className="detalleView">
      <div>
      <img src={pokemon.sprites.front_default} alt="imagenpokemon"/>
      </div>
      <div className="datosPokemon">
      <p>
        <strong>Nombre: {pokemon.name} </strong>
      </p>
      <p>
      hp: <strong>{pokemon.stats[0].base_stat}</strong>
      </p>
      <p>
        attack: <strong>{pokemon.stats[1].base_stat}</strong>
      </p>
      <p>
        defense: <strong>{pokemon.stats[2].base_stat}</strong>
      </p>
      <p>
        special-attack: <strong>{pokemon.stats[3].base_stat}</strong>
      </p>
      <p>
        special-defense: <strong>{pokemon.stats[4].base_stat}</strong>
      </p>
      <p>
        speed: <strong>{pokemon.stats[5].base_stat}</strong>
      </p>
      </div>
    </div>
  )
}

export default Detalle
