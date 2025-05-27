import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

export default function ContactList({ icons })  {
  const contacts = useSelector(state => state.contacts?.items);
  const filter = useSelector(state => state.filters?.name?.toLowerCase());

  const filteredContacts = contacts.filter(contact => {
    if (typeof contact.name !== "string") return false;
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
  
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number}  icons={icons}/>
        </li>
      ))}
    </ul>
  );
}
