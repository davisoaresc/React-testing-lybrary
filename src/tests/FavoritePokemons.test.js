import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Teste o componente "FavoritePokemons.js"', () => {
  test('Verifica se é exibido na tela a mensagem "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons />);
    const headingFavorite = screen.getByText('No favorite pokemon found');

    expect(headingFavorite).toBeInTheDocument();
  });

  test('Teste se é exibido todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);

    let moreDetailsEl = screen.getByRole('link', { name: /more details/i });
    expect(moreDetailsEl).toBeInTheDocument();
    userEvent.click(moreDetailsEl);

    let inputFavoritePokemon = screen.getByRole('checkbox');
    expect(inputFavoritePokemon).toBeInTheDocument();
    expect(inputFavoritePokemon.checked).toEqual(false);
    userEvent.click(inputFavoritePokemon);
    expect(inputFavoritePokemon.checked).toEqual(true);

    const homeEl = screen.getByRole('link', { name: /home/i });
    expect(homeEl).toBeInTheDocument();
    userEvent.click(homeEl);

    const nextButton = screen.getByText(/Próximo pokémon/i);
    expect(nextButton).toBeInTheDocument();
    userEvent.click(nextButton);

    moreDetailsEl = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsEl);

    const secondPoke = screen.getByText('Charmander');
    expect(secondPoke).toBeInTheDocument();

    inputFavoritePokemon = screen.getByRole('checkbox');
    expect(inputFavoritePokemon.checked).toEqual(false);
    userEvent.click(inputFavoritePokemon);
    expect(inputFavoritePokemon.checked).toEqual(true);

    const FavotitePokemonsEl = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(FavotitePokemonsEl).toBeInTheDocument();
    userEvent.click(FavotitePokemonsEl);

    const favoriteCards = screen.getAllByTestId('pokemon-name');
    expect(favoriteCards).toHaveLength(2);
  });
});
