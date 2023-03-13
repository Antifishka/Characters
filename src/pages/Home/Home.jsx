import { useState, useEffect, useMemo } from "react";
import API from 'services/api';
import { Helmet } from 'react-helmet';
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { CharactersList } from "./Home.styled";
import { CharactersItem } from "components/CharactersItem/CharactersItem";
import { Title } from "components/Title/Title";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    setIsLoading(true);
    getCharaters();

    async function getCharaters() {
      try {
        const fetchCharacters = await API.fetchCharaters();
        console.log(fetchCharacters);
        setCharacters(fetchCharacters);

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      };
    };
  }, []);

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const sortedCharacters = [...characters].sort((first, second) =>
    first.name.localeCompare(second.name));

  const visibleCharacters = useMemo(() => {
    console.log("Not memoized!");
    const normalizedFilter = filter.toLowerCase();

    return sortedCharacters.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, sortedCharacters]);

  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Title />

      <Filter filter={filter} onChange={changeFilter} />

      {isLoading && <Loader />} 

      <CharactersList>
        {visibleCharacters.map(({ id, image, name, species }) => (
          <CharactersItem 
            key={id}
            id={id}
            image={image}
            name={name} 
            species={species}
          />
        ))}
      </CharactersList>
    </main>
  );
};

export default Home;