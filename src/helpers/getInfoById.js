export const getInfoById = ({ gender, status, species, origin, type }) => {
    console.log(gender, status, species, origin, type);
    return [
        { prop: 'Gender', value: gender || 'Unknown' },
        { prop: 'Status', value: status || 'Unknown'},
        { prop: 'Specie', value: species || 'Unknown' },
        { prop: 'Origin', value: origin[0] || 'Unknown' },
        { prop: 'Type', value: type || 'Unknown' },
    ];
};