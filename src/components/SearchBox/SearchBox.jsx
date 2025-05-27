import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
        <label className="contact_form">
      Find contacts by name
        <input className="contact_form_field"
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Search contacts"/>
      </label>
    </div>
  );
}