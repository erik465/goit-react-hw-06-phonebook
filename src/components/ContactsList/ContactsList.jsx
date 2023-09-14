import {StyledList} from './ContactsList.styled'
import { useSelector, useDispatch } from 'react-redux'
import { getContact, getFilter } from 'redux/selector'
import { deleteContact } from 'redux/contactsSlice'

export const ContactsList = () =>{
    const contacts = useSelector(getContact)
    const filter = useSelector(getFilter)
    const dispatch = useDispatch()

    const createVisibleContacts = () =>{
     return filter.trim() === '' ? contacts : contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim()))

  }

 

    return (
        <StyledList > 
            {
            Array.isArray(contacts) ? contacts.map(contact =>{
                return( 
                <li key={contact.id}>
                    <p>{contact.name} : {contact.number}</p>
                    <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
                </li> 
                )
            }): null}
        </StyledList>
    )
}