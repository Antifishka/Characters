import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useBreakpoints } from "hooks/useMediaQuery";
import { CharactersCard, CharactersImg, CharactersInfo, CharactersTitle, CharactersText } from "./CharactersItem.styled";

export const CharactersItem  = ({ id, image, name, species}) => {
    const { pathname, search } = useLocation();
    const fromPage = `${pathname}${search}`;

    const { isDesktop } = useBreakpoints();

    return (
        <CharactersCard>
            <Link to={`/${id}`} state={{from: fromPage}}>
                <CharactersImg
                    src={image}
                    alt={name}
                    width={isDesktop ? "240px" : "312px"} />
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