import { CharacterList, CharacterItem, CharacterProp, CharacterText } from './CharacterInfoList.styled';
// import { getInfoById } from 'helpers/getInfoById';

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