import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/selectors";
import { Loader } from "./Loader/Loader";


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section
        sectionType="form"
        title="Phonebook">
        <ContactForm />
      </Section>
      <Section
        sectionType="phonebook"
        title="Contacts">
        <Filter />
        {error ? <p>Something went wrong </p> : (contacts.length === 0 ? <p>Add contacts to proceed</p> : <ContactList />)}
        {isLoading && !error && <Loader/>}
      </Section>
    </div>
  );
}
