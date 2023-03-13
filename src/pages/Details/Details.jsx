import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import API from "services/api";
import { Helmet } from 'react-helmet';
import {  CharacterImg, CharacterName, Title } from "./Details.styled";
import { BackButton } from "components/BackButton/BackButton";
import { CharacterInfoList } from "components/CharacterInfoList/CharacterInfoList";

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
    };

    console.log(character, 'character')
    return (
        <main>
            <Helmet>
                <title>Details</title>
            </Helmet>
            
            <BackButton>Go back</BackButton>

            <CharacterImg src={character.image} alt={character.name} width="150"/>
            <CharacterName>{character.name}</CharacterName>
            <Title>Informations</Title>
            <CharacterInfoList character={character} />
        </main>
    );
};

export default CharacterDetails;