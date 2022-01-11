import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Teste o componente "Pokedex.js"', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  test('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    const headingTitle = screen.getByRole('heading', {
      name: 'Encountered pokémons',
      level: 2,
    });

    expect(headingTitle).toBeInTheDocument();
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão é clicado', () => {
    const buttonValue = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(buttonValue).toBeInTheDocument();
    userEvent.click(buttonValue);

    expect(screen.getByText('Charmander')).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um Pokémon por vez', () => {
    const getNameTestId = screen.getAllByTestId('pokemon-name');

    expect(getNameTestId).toHaveLength(1);
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    const amountButton = 7;
    const buttonDataTestID = screen.getAllByTestId('pokemon-type-button');
    expect(buttonDataTestID).toHaveLength(amountButton);

    const buttonAll = screen.getByRole('button', { name: 'All' });
    expect(buttonAll).toBeInTheDocument(buttonAll);

    pokemons.forEach(({ type }) => {
      const buttonType = screen.getByRole('button', { name: type });
      expect(buttonType).toBeInTheDocument();
    });
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const buttonAll = screen.getByRole('button', { name: 'All' });

    userEvent.click(buttonAll);
    const buttonTestId = screen.getByTestId('pokemon-name');

    expect(buttonTestId).toHaveTextContent('Pikachu');
  });

  test('teste se clicar no botão do elemento renderiza o elemento respectivo', () => {
    const buttonDragon = screen.getByRole('button', { name: 'Dragon' });
    expect(buttonDragon).toBeInTheDocument();
    userEvent.click(buttonDragon);

    const pokemonId = screen.getByTestId(/pokemon-name/i);
    expect(pokemonId).toHaveTextContent('Dragonair');
    expect(pokemonId).toBeInTheDocument();
  });
});
