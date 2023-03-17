import { useState, useEffect, useMemo } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import API from 'services/api';
import { Helmet } from 'react-helmet';
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { Pagination } from "components/Pagination/Pagination";
import { ScrollUpButton } from "components/ScrollUpButton/ScrollUpButton";
import { MainContainer, CharactersList, Message } from "./Home.styled";
import { CharactersItem } from "components/CharactersItem/CharactersItem";
import { Title } from "components/Title/Title";

const Home = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useLocalStorage('filter', []);

  useEffect(() => {
    setIsLoading(true);
    getCharaters();

    async function getCharaters() {
      try {
        const { info, results } = await API.fetchCharaters(page);
        console.log(results, "fetch characters");
        setCharacters(results);
      
        const { pages } = info;
        console.log(pages, "total pages");
        setTotalPages(pages);
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
    setFilter(e.target.value);
    console.log("filter", e.target.value)
  };

  const sortedCharacters = [...characters].sort((first, second) =>
    first.name.localeCompare(second.name));

  const visibleCharacters = useMemo(() => {
    console.log("Now memoized!");
    const normalizedFilter = filter.toString().toLowerCase();

    return sortedCharacters.filter(({ name }) =>
      name.toString().toLowerCase().includes(normalizedFilter)
    );
  }, [filter, sortedCharacters]);
  
  return (
    <MainContainer>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Title />

      <Filter onChange={changeFilter} />

      {isLoading && <Loader />} 

      {visibleCharacters.length > 0  
        ? (<CharactersList>  
          {visibleCharacters.map(({ id, image, name, species }) => (
            <CharactersItem 
              key={id}
              id={id}
              image={image}
              name={name} 
              species={species}
            />))}
          </CharactersList>)
        : (<Message>
              Sorry, there are no characters matching your search query. Please try again
          </Message>)  
      }    

      <Pagination
        page={page}
        totalPages={totalPages}
        onClickPrev={handlePrevPage}
        onClickNext={handleNextPage} />
      
      <ScrollUpButton />
    </MainContainer>
  );
};

export default Home;