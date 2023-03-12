import { useState, useEffect, Suspense } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import API from "services/api";
import { Helmet } from 'react-helmet';
import {  CharaterImg, CharaterInfo, MovieAdditionalBox, MovieGenres, MovieAdditionalTitle, MovieAdditionalList, Link } from "./CharacterDetails.styled";
import { BackButton } from "components/BackButton/BackButton";

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState([]);
//   const { pathname, search } = useLocation();
//   const fromPage = `${pathname}${search}`;
  
  useEffect(() => {
    getMovieById();

    async function getMovieById() {
      try {
        const fetchCharater = await API.fetchCharaterById(Number(characterId));
        console.log(fetchCharater);
        setCharacter(fetchCharater);

      } catch (error) {
        console.log(error);
      };
    };
    }, [characterId]);

    if (!character) {
        return null;
    }

    const { image, name } = character

    return (
        <main>
            <Helmet>
                <title>Details</title>
            </Helmet>
            
            <BackButton>Go back</BackButton>

            
            <CharaterImg src={image} alt={name} width="200"/>
            {/* <CharaterInfo>
            <h2>{title}
                <span> ({year})</span>
            </h2>
            <p>User Score {userScore()}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <MovieGenres>
                {genres?.map(({id, name}) => <li key={id}>{name}</li>)}
            </MovieGenres>
            </CharaterInfo> */}
        
        
        {/* <MovieAdditionalBox>
            <MovieAdditionalTitle>Additional infomation</MovieAdditionalTitle>
            <MovieAdditionalList>
            <li>
                <Link to="cast" state={{from: fromPage}}>Cast</Link>
            </li>
            <li>
                <Link to="reviews" state={{from: fromPage}}>Reviews</Link>
            </li>
            </MovieAdditionalList>
        </MovieAdditionalBox>

        <Suspense fallback={null}>
            <Outlet/>
        </Suspense>  */}
        </main>
    );
};

export default CharacterDetails;