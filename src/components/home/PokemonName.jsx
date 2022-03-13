import {useState, useLayoutEffect} from 'react';
import axios from 'axios';
import PokemonNameCard from './PokemonNameCard';

export default ({urlTypePokemon}) => {
    const [namePokemon, setnamePokemon] = useState({});
    
    useLayoutEffect(()=> {
        const getTypePokemon = async() => {
            const result = await axios.get(urlTypePokemon);
            setnamePokemon({...result.data});
        };
        getTypePokemon(); 
        console.log(namePokemon)
    }, []);

    return (
        <PokemonNameCard namePokemon={namePokemon}/>
    )
}