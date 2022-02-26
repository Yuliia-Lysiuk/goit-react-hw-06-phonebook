
import React from "react";
import { FilterBox, Input, Text } from './Filter.styled';
import { useDispatch} from "react-redux";
import { changeFilter } from 'redux/store';


export const Filter = () => {
  const dispatch = useDispatch();
  const onChange = (e) =>
    dispatch(changeFilter(e.currentTarget.value.toLowerCase()));
     return (<FilterBox>
             <Text >Find contacts by name</Text>
          <Input
            type="text"
            onChange={onChange}
          />
     </FilterBox>   )
}
