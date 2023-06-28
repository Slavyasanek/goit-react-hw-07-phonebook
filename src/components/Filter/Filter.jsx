import { FilterInput, FilterWrapper } from './Filter.styled';
import { AiOutlineSearch } from 'react-icons/ai'
import { nanoid } from 'nanoid';
import {useDispatch, useSelector} from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
    const filterId = nanoid();
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        dispatch(setFilter(target.value))
    }

    return (
        <FilterWrapper>
            <label htmlFor={filterId}>Find contacts by name</label>
            <FilterInput
                type="text"
                id={filterId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder='Searching by name...'
                onChange={handleChange}
                value={useSelector(selectFilter)}
            />
            <AiOutlineSearch />
        </FilterWrapper>);
}