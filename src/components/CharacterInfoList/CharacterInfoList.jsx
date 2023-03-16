import { CharacterList, CharacterItem, CharacterProp, CharacterText } from './CharacterInfoList.styled';
import PropTypes from 'prop-types';

export const CharacterInfoList = ({ gender, status, species, origin, type }) => {
    const infoCharacter = [
        { prop: 'Gender', value: gender || 'Unknown' },
        { prop: 'Status', value: status || 'Unknown'},
        { prop: 'Specie', value: species || 'Unknown' },
        { prop: 'Origin', value: origin?.name || 'Unknown' },
        { prop: 'Type', value: type || 'Unknown' },
    ]
    
    return (
        <CharacterList>
            {infoCharacter?.map(({ prop, value }) => (
                <CharacterItem key={prop}>
                    <CharacterProp>{prop}</CharacterProp>
                    <CharacterText>{value}</CharacterText>
                </CharacterItem>
            ))}
        </CharacterList>
    )
};

CharacterInfoList.propTypes = {
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
}