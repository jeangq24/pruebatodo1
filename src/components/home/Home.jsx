import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import Pokemons from './Pokemons';
import ButtonLoad from './ButtonLoad';
const API_URL = 'https://pokeapi.co/api/v2/pokemon'
const arrayDePruebas = [{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},{"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},{"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},{"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}]
export default ({setUrlTypemon}) => {
    const [pokemons, setPokemons] = useState([])
    const [loadMore, setLoadMore] = useState(true);

    // const getPokemons = async() => {
    //     const res = await axios.get(API_URL)
    //     setPokemons(res.data.results);
    // }

    useLayoutEffect(()=>{ 
        setPokemons(arrayDePruebas);
        //getPokemons();       
    }, [])

    const handleLoadMore = async() => {
        if(loadMore) {
            const res = await axios.get(`${API_URL}?limit=40`)
            setPokemons(res.data.results);
        }else {
            //getPokemons();
            setPokemons(arrayDePruebas);
        }
        setLoadMore(!loadMore);
    };

    return (
        <>
            <h1 className="titulo_pokemons_home">Pokemons</h1>
            <div className='contain_pokemons_home'>
            {pokemons.map(({name, url}, index) => {
                return (
                    <Pokemons key={index} url={url} name={name} setUrlTypemon={setUrlTypemon}/>
                )
            })}
            <ButtonLoad loadMore={loadMore} handleLoadMore={handleLoadMore}/>
            </div>


        </>
    )
}