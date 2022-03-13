import {useNavigate} from 'react-router-dom'
export default ({ name, url, setUrlTypemon }) => {
    
    const navigate = useNavigate();

    const handleTypePokemon = () => {
        setUrlTypemon(url);
        navigate('/typepokemon');
    }
    return (
        <>
            <div onClick={handleTypePokemon} className='contain_pokemons'>
                <h1 className='contain_pokemons_h1'>{name}</h1>
            </div>
        </>
    )
};