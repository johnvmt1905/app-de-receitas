import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explorer() {
  return (
    <section>
      <Header pageTitle="Explorar" />
      <section>
        <Link to="/explorar/comidas">
          <button data-testid="explore-food" type="button">
            Explorar Comidas
          </button>
        </Link>

        <Link to="/explorar/bebidas">
          <button data-testid="explore-drinks" type="button">
            Explorar Bebidas
          </button>
        </Link>
      </section>
      <Footer />
    </section>
  );
}

export default Explorer;
