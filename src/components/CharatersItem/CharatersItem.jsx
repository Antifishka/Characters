import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { CharatersCard, CharatersImg, CharatersInfo, CharatersTitle, CharatersText } from "./CharatersItem.styled";

export const CharatersItem = ({ id, image, name, species}) => {
    const { pathname, search } = useLocation();
    const fromPage = `${pathname}${search}`;

    return (
        <CharatersCard>
            <Link to={`/${id}`} state={{from: fromPage}}>
                <CharatersImg src={image} alt={name} width="312px" height="232px"/>
                <CharatersInfo>
                    <CharatersTitle>{name}</CharatersTitle>
                    <CharatersText>{species}</CharatersText>
                </CharatersInfo>
            </Link>
        </CharatersCard>
    );
};

CharatersItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
}