import { useState, useEffect } from "react";
import API from 'services/api';
import { Helmet } from 'react-helmet';
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { CharatersList } from "./Home.styled";
import { CharatersItem } from "components/CharatersItem/CharatersItem";
import { getVisibleContacts } from "helpers/getVisibleContacts";

const Home = () => {
  const [charaters, setCharaters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    setIsLoading(true);
    getCharaters();

    async function getCharaters() {
      try {
        const fetchCharaters = await API.fetchCharaters();
        console.log(fetchCharaters);
        setCharaters(fetchCharaters);

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

  const visibleCharaters = getVisibleContacts(charaters, filter);

  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Filter filter={filter} onChange={changeFilter} />

      {isLoading && <Loader />} 

      <CharatersList>
        {visibleCharaters.map(({ id, image, name, species }) => (
          <CharatersItem 
            key={id}
            id={id}
            image={image}
            name={name} 
            species={species}
          />
        ))}
      </CharatersList>
    </main>
  );
};

export default Home;