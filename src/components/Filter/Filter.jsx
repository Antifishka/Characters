import { Container, FieldFilter, InputFilter, IconForm } from "./Filter.styled";
import { theme } from "constants/theme";
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
    return (
        <Container>
            <FieldFilter>
                <IconForm><FaSearch size={19} color={theme.colors.placeholder} />
                </IconForm>
                <InputFilter
                    type="text"
                    name="filter"
                    placeholder="Filter by name..."
                    debounceTimeout={500}
                    onChange={onChange}
                />
            </FieldFilter>
        </Container>
    );
}    

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};