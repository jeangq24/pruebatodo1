import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('render title Pokemons', () => {
    render(<App/>)
    const title = screen.getByText('Pokemons');
    expect(title).toBeInTheDocument();
})

test('render names of  Pokemons', () => {
    render(<App/>)
    const name1 = screen.getByText('charmander');
    const name2 = screen.getByText('bulbasaur');
    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
})

test('render button of load more', () => {
    render(<App/>)
    screen.debug()
    const load = screen.getByRole('button',{name:'Load more...'});
    expect(load).toBeInTheDocument();
})

test('render button of Home and Tearms & Conditions', () => {
    render(<App/>)
    screen.debug()
    const home = screen.getByRole('button',{name:'Home'});
    const termn = screen.getByRole('button',{name:'Terms & Conditions'});
    expect(home).toBeInTheDocument();
    expect(termn).toBeInTheDocument();
})