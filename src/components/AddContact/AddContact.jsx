import { Formik, Field } from 'formik';
import { StyledForm, StyledError } from './AddContact.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getContact } from 'redux/selector';

const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Enter a valid number')
    .required('Required'),
  
});




export const AddContact = () =>{
  const dispatch = useDispatch()
  const contacts = useSelector(getContact)

  const handleAdd = (name, number) => {
    contacts.forEach(contact => {
      if(name === contact.name){
        alert('Contact with this name already added');
        throw new Error("Contact with this name already added");
      }
    })
 
    dispatch(addContact({name, number, id: nanoid()}))
}


    return(
        <Formik
        initialValues={{
          name: '',
          number: '',
         
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          handleAdd(values.name, values.number)
          resetForm({values: ''})
        }}
      >
        <StyledForm>
          <label htmlFor="name">Name
            <Field id="name" type="text" name="name" placeholder="Name" />
            <StyledError name='name' component='span'/>
          </label>

          <label htmlFor="number">Number
            <Field 
              id="number" 
              name="number" 
              type="tel" 
              placeholder="Number" 
            />
            <StyledError name='number' component='span'/>
          </label>

         
          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    )
}