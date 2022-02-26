
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from 'redux/store';
import { getvisibleContacts } from 'redux/selectors';
import { Button, Contact, Item, List, Text } from './ContactList.styled';

export function ContactList() {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(getvisibleContacts);

    return (
    <div>
            {visibleContacts.length === 0 ?
                (
                    <Text>Nothing found</Text>
            
                ) : (
                   <List>
                            {visibleContacts.map(({ id, name, number }) => 
                                <Item key={id}>
                                    <Contact>{name}: {number}</Contact>
                                    <Button type="button"  onClick={() => dispatch(deleteContacts(id))}>Delete</Button>
                                </Item>
                            )}
                        </List >)
                   
            }
    </div>
    )   
}
