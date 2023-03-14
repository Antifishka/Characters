import { CharacterList, CharacterItem, CharacterProp, CharacterText } from './CharacterInfoList.styled';

export const CharacterInfoList = ({ info }) => {
    console.log(info, "info");
    console.log(info[4], 'type')

    const characterInfo = [
        { prop: 'Gender', value: info[0] || "Unknown"},
        { prop: 'Status', value: info[1] || "Unknown"},
        { prop: 'Specie', value: info[2] || "Unknown"},
        { prop: 'Origin', value: info[3].name || "Unknown"},
        { prop: 'Type', value: info[4] || "Unknown"},
    ];
    
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