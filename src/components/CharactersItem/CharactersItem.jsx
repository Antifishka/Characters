import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { CharactersCard, CharactersImg, CharactersInfo, CharactersTitle, CharactersText } from "./CharactersItem.styled";

export const CharactersItem  = ({ id, image, name, species}) => {
    const { pathname, search } = useLocation();
    const fromPage = `${pathname}${search}`;

    return (
        <CharactersCard>
            <Link to={`/${id}`} state={{from: fromPage}}>
                <CharactersImg src={image} alt={name} width="312px" />
                <CharactersInfo>
                    <CharactersTitle>{name}</CharactersTitle>
                    <CharactersText>{species}</CharactersText>
                </CharactersInfo>
            </Link>
        </CharactersCard>
    );
};

CharactersItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
}