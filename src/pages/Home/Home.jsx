import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container, Movie, Title } from './Home.styled';
import { API_KEY, BASE_URL } from 'components/API/API';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  async function fetchPopularMovies() {
    const searchParams = new URLSearchParams({
      api_key: API_KEY
    });

    const url = `${BASE_URL}/movie/popular?${searchParams}`;
    const response = await axios.get(url);
    const { data } = response;
    setPopularMovies(data.results);
  }
    
  return (
    <Container>
      <Title>Trending Today</Title>
      <div>
        {popularMovies.map(movie => (
            <Link key={movie.id} to={`movies/${movie.id}`} state={{ from: location }}><Movie>&bull; {movie.title}</Movie></Link>
        ))}   
      </div>
    </Container>
  );
};

Home.propTypes = {
  popularMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default Home;