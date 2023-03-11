import { useState, useEffect } from "react";
import API from 'services/api';
import { Helmet } from 'react-helmet';
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
// import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { CharatersList } from "./Home.styled";
import { CharatersItem } from "components/CharatersItem/CharatersItem";

const Home = () => {
  const [charaters, setCharaters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <main>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Filter />

      {isLoading && <Loader />} 

      <CharatersList>
        {charaters.map(({ id, name, species }) => (
          <CharatersItem 
            key={id}
            id={id}
            name={name} 
            species={species}
          />
        ))}
      </CharatersList>
    </main>
  );
};

export default Home;