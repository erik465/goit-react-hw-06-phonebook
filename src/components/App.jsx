import { AddContact } from "./AddContact/AddContact";
import { ContactsList } from "./ContactsList/ContactsList";
import { ContactFilter } from "./ContactFilter/ContactFilter";

export const App = () => {
  return (
    <div>
        <h1>Phonebook</h1>
        <AddContact />
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactsList />
      </div>
  );
};
