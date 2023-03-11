import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CharatersCard, StyledLink, MoviesImg, MoviesCardInfo, MoviesTitle, MoviesVote } from "./CharatersItem.styled";

export const CharatersItem = ({ id, title, imagePath, vote }) => {
    const { pathname, search } = useLocation();
    const fromPage = `${pathname}${search}`;

    return (
        <CharatersCard>
            <StyledLink to={`/${id}`} state={{from: fromPage}}>
                <MoviesImg src={imagePath} alt={title} />
                <MoviesCardInfo>
                    <MoviesTitle>{title}</MoviesTitle>
                    <MoviesVote>{vote}
                    </MoviesVote>
                </MoviesCardInfo>
            </StyledLink>
        </CharatersCard>
    );
};

CharatersItem.propTypes = {
    // id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    // vote: PropTypes.number.isRequired,
}