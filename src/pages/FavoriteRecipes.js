import React from 'react';
import Header from '../components/Header';
import CardReceita from '../components/CardReceita';
import '../assets/css/favorite.css';

function getFavorites() {
  const userFavorites = localStorage.getItem('favoriteRecipes');
  const data = JSON.parse(userFavorites);
  return data;
}

function FavoriteRecipes() {
  const favorites = getFavorites();
  return (
    <>
      <Header pageTitle="Receitas Favoritas" />
      <section className="card-favContainer">
        { favorites.map((recipe, index) => (
          <CardReceita
            pageTitle="Receitas Favoritas"
            key={ index }
            recipe={ recipe }
            index={ index }
          />
        )) }
      </section>
    </>
  );
}

export default FavoriteRecipes;
