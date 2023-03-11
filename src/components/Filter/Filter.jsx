import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "redux/filter/filter-selectors";
import { setFilter } from "redux/filter/filter-slice";
import { FieldFilter, InputFilter, IconForm } from "./Filter.styled";
import { theme } from "constants/theme";
import { FaSearch } from 'react-icons/fa';

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.currentTarget.value));
    };

    return (
        <FieldFilter>
            <IconForm><FaSearch size={17} color={theme.colors.accent} /></IconForm>
            <InputFilter
                type="text"
                value={filter}
                placeholder="Filter by name..."
                onChange={changeFilter}
            />
        </FieldFilter>
    );
}; 