import { useState, useEffect, useMemo } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import API from 'services/api';
import { Helmet } from 'react-helmet';
// import toast from 'react-hot-toast';
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { Pagination } from "components/Pagination/Pagination";
import { CharactersList } from "./Home.styled";
import { CharactersItem } from "components/CharactersItem/CharactersItem";
import { Title } from "components/Title/Title";

const Home = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useLocalStorage('filter', []);

  useEffect(() => {
    setIsLoading(true);
    getCharaters();

    async function getCharaters() {
      try {
        const { info, results } = await API.fetchCharaters(page);
        console.log(results);
        setCharacters(results);
        // toast.success(`There are ${fetchCharacters.length} characters`);
        console.log(info);
        const { count, pages } = info;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      };
    };
  }, [page]);

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
    console.log("filter", e.currentTarget.value)
  };

  const sortedCharacters = [...characters].sort((first, second) =>
    first.name.localeCompare(second.name));

  const visibleCharacters = useMemo(() => {
    console.log("Now memoized!");
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

      <Pagination
        page={page}
        // totalPages={pages}
        onClickPrev={handlePrevPage}
        onClickNext={handleNextPage} />
    </main>
  );
};

export default Home;