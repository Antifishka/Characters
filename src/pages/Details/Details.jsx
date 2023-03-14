import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "services/api";
import { Helmet } from 'react-helmet';
import {  CharacterImg, CharacterName, Title } from "./Details.styled";
import { BackButton } from "components/BackButton/BackButton";
import { CharacterInfoList } from "components/CharacterInfoList/CharacterInfoList";

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState([]);
  
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
  
  const { image, name, gender, status, species, origin, type } = character;
  
  return (
        <main>
            <Helmet>
                <title>Details</title>
            </Helmet>
            
            <BackButton>Go back</BackButton>

            <CharacterImg src={image} alt={name} width="150px" />
            <CharacterName>{name}</CharacterName>
            <Title>Informations</Title>
      <CharacterInfoList info={[ gender, status, species, origin, type ]} />
        </main>
  );
};

export default CharacterDetails;