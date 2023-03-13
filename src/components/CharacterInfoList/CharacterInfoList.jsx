import { CharacterList, CharacterItem, CharacterProp, CharacterText } from './CharacterInfoList.styled';

export const CharacterInfoList = ( character ) => {

    const characterInfo = [
        { prop: 'Gender', value: character.gender || "Unknown"},
        { prop: 'Status', value: character.status || "Unknown"},
        { prop: 'Specie', value: character.species || "Unknown"},
        { prop: 'Origin', value: character.origin || "Unknown"},
        { prop: 'Type', value: character.type || "Unknown"},
    ];
    console.log(characterInfo, "characterInfo")
    return (
        <CharacterList>
            {characterInfo.map(({ prop, value }) => (
                <CharacterItem key={prop}>
                    <CharacterProp>{prop}</CharacterProp>
                    <CharacterText>{value}</CharacterText>
                </CharacterItem>
            ))}
        </CharacterList>
    )
};