import React from 'react';
import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/ToolkitSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleChange = evt => dispatch(setFilter(evt.currentTarget.value));

  return (
    <Label>
      Find contacts by Name
      <input onChange={handleChange} type="text" name="filter" value={filter} />
    </Label>
  );
}

export default Filter;
